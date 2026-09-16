<p align="center">
  <img src="icon.png" alt="Scriptwerk Logo" width="21%">
</p>

# Scriptwerk on StartOS

> Everything not listed in this document should behave the same as upstream
> Scriptwerk. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Scriptwerk](https://github.com/kwadde-cmyk/scriptwerk-startos) is a studio for Bitcoin miniscript wallets: build a spending policy in stages, inspect the descriptor and its checksum, assign keys, print a recovery sheet, and register the policy on a Ledger or BitBox. It is not a wallet and never holds coins — everything it designs lives in the browser that opened it. On StartOS it runs as one web service and, when they are installed, uses Bitcoin on the same server to check descriptors and derive addresses, and Fulcrum or Electrs to list the coins a watch-only version of the policy holds.

- **Upstream repo:** <https://github.com/kwadde-cmyk/scriptwerk-startos>
- **Wrapper repo:** <https://github.com/Start9-Community/scriptwerk-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

One image, built from upstream's own `Dockerfile` inside the `scriptwerk/` git submodule, which is pinned at an upstream release tag. The package adds nothing to the image.

| Property      | Value                                                     |
| ------------- | --------------------------------------------------------- |
| Image         | `scriptwerk`, built from `scriptwerk/Dockerfile`          |
| Base          | `node:22-bookworm-slim`                                   |
| Architectures | x86_64, aarch64                                           |
| Command       | the image entrypoint (`node scripts/host.mjs`)            |
| User          | `scriptwerk` (non-root)                                   |

| Subcontainer | Purpose                                       |
| ------------ | --------------------------------------------- |
| `scriptwerk` | The `primary` daemon — the one to `attach` to |

The server is a Nitro node-server on port 8080 serving the studio and two small proxies the browser cannot do itself: `/bitcoind-rpc` forwards JSON-RPC to Bitcoin, and `/electrum` speaks the Electrum protocol to Fulcrum or Electrs. Both proxies are configured by environment variables the package sets from resolved dependency addresses (see [Dependencies](#dependencies)); when a variable is absent, the corresponding feature waits for the user to enter a node in the app's own **Node** dialog.

## Volume and Data Layout

None. The package declares no volumes and mounts nothing of its own into the container: Scriptwerk keeps every policy, key name and saved design in the browser's `localStorage` on the device that opened it, and the server keeps no state.

When Bitcoin is installed, its `main` volume is mounted read-only at `/mnt/bitcoind` so the package can read the RPC cookie. The mount is only declared while Bitcoin is present.

## File Models

None. There is no configuration file and no `store.json`; everything the package decides is derived at start from which dependencies are installed.

Two things reach the application by environment variable instead, and both are re-read only at launch:

- **Bitcoin's RPC credentials.** `BITCOIND_RPC_URL`, `BITCOIND_RPC_USER` and `BITCOIND_RPC_PASSWORD` carry Bitcoin's bridge address and the two halves of its RPC cookie. The cookie is rotated every time Bitcoin restarts, so the package watches the cookie file and restarts Scriptwerk when its contents change — the service restarting a few seconds after Bitcoin does is that watch working. `BITCOIND_RPC_SOURCE=startos` tells the app the values were injected, which locks the app's Node dialog on them.
- **The Electrum server.** `ELECTRUM_URL` and `ELECTRUM_SOURCE` name Fulcrum's, or failing that Electrs's, plaintext Electrum port on the host bridge.

## Dependencies

Three optional dependencies; the service runs without any of them.

| Dependency | Required | Health checks               | Mount                                | Why                                                        |
| ---------- | -------- | --------------------------- | ------------------------------------ | ---------------------------------------------------------- |
| Bitcoin    | No       | `bitcoind`                  | `main` at `/mnt/bitcoind`, read-only | `getdescriptorinfo` and address derivation on the user's node |
| Fulcrum    | No       | `primary`, `sync-progress`  | none                                 | Coin lookup for a watch-only policy — preferred            |
| Electrs    | No       | `electrs`, `sync`           | none                                 | Coin lookup when Fulcrum is not installed                  |

Each is declared as current only while it is installed, so an absent optional dependency raises no warning. Bitcoin is reached at its RPC binding's bridge address and authenticated with its cookie; no RPC user is created on the node. When both Electrum servers are installed the package picks Fulcrum, and there is no setting to prefer Electrs. Dependencies resolved after Scriptwerk starts heal it: installing or removing one restarts the service once.

## Network Access and Interfaces

One interface, serving the studio.

| Interface | Id   | Type | Port | Description                       |
| --------- | ---- | ---- | ---- | --------------------------------- |
| Web UI    | `ui` | ui   | 8080 | The Scriptwerk miniscript studio  |

The port is bound on the `ui-multi` MultiHost over plain HTTP and is not masked. There is no login: the studio holds no secrets server-side, but the Bitcoin RPC proxy behind it is open to anyone who can reach the interface, so keep it on trusted addresses.

Hardware wallet access (Ledger, BitBox) is WebHID in the browser, not anything the server does, and browsers only grant WebHID and camera access on a secure origin — the StartOS-served HTTPS address qualifies, a plain-HTTP one does not.

## Installation and First-Run Flow

Nothing to configure. Install, start, open the address. If Bitcoin, Fulcrum or Electrs are installed at that point they are wired in already; installing one later restarts Scriptwerk to pick it up. The app's Node dialog shows the injected values locked, with an **Unlock** to point at a different node and a **Reset** back to the StartOS ones.

## Actions

None.

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

One check, on the only daemon.

| Check     | Displayed       | Method                 |
| --------- | --------------- | ---------------------- |
| `primary` | "Web Interface" | Port 8080 is listening |

A failure means the Node server did not start; its stderr is in the service logs. A green check says nothing about Bitcoin or the Electrum server — a descriptor check failing with HTTP 401 or a connection error is reported inside the app's Node dialog, and the dependency warnings on the service page say whether the dependency is running.

## Backups and Restore

Nothing is backed up, because nothing is stored: `createBackup` is declared over an empty volume set. Policies, key names and saved designs live in the browser that made them and are captured by nothing on the server — export a descriptor, BSMS or Scriptwerk JSON from the app to keep a design. A restored server needs nothing re-entered here.

## Limitations and Differences

1. **Nothing survives on the server.** Designs are per browser and per origin; opening the studio through a different address, or clearing site data, starts empty.
2. **Bitcoin's cookie is used, not an RPC user.** Upstream's self-host instructions have you create an RPC user; on StartOS the package injects the node's cookie instead, so the Node dialog shows `__cookie__` as the username and the service restarts when Bitcoin rotates it.
3. **Fulcrum wins over Electrs** when both are installed, with no way to choose.
4. **Restarts on dependency changes.** Installing, removing or restarting Bitcoin, and installing or removing an Electrum server, each restart Scriptwerk once.

---

## Quick Reference for AI Consumers

```yaml
package_id: scriptwerk
image: scriptwerk # built from scriptwerk/Dockerfile (the upstream submodule)
architectures:
  - x86_64
  - aarch64
subcontainers:
  - scriptwerk # the only container
volumes: {}
file_models: []
startos_managed_env_vars:
  - BITCOIND_RPC_URL
  - BITCOIND_RPC_USER
  - BITCOIND_RPC_PASSWORD
  - BITCOIND_RPC_SOURCE
  - ELECTRUM_URL
  - ELECTRUM_SOURCE
dependencies:
  - bitcoind # optional
  - fulcrum # optional, preferred Electrum server
  - electrs # optional, used when fulcrum is absent
interfaces:
  ui: { type: ui, port: 8080 }
actions: []
tasks: []
health_checks:
  - primary # displayed "Web Interface"
```
