# Scriptwerk

## Documentation

- [Scriptwerk README](https://github.com/kwadde-cmyk/scriptwerk-startos/blob/main/README.md) — the upstream feature guide, in English and German.

## What you get on StartOS

A **Web UI** interface serving the studio. If Bitcoin is installed on this server, Scriptwerk checks descriptors and derives addresses against your own node — the app's **Node** dialog comes pre-filled and locked, with no RPC user to create. If Fulcrum or Electrs is installed, the **Wallet** view and **Check UTXOs** list the coins a policy holds through it; Fulcrum is used when both are installed.

Nothing you design is stored on the server. Policies, key names and saved designs live in the browser you open the studio with.

## Getting set up

1. Open the **Web UI** from the Dashboard tab.
2. Build a policy from the **Stages** tab, or import a descriptor, miniscript, BSMS or Scriptwerk JSON file.
3. To check the policy against your node, open the **Node** dialog: with Bitcoin installed it is already connected. **Unlock** lets you point it at a different node; **Reset** returns to the one on this server.

Install Bitcoin, Fulcrum or Electrs at any time — Scriptwerk restarts on its own to pick them up.

## Using Scriptwerk

### Hardware wallets

Registering a policy on a Ledger or BitBox, and scanning QR codes, needs a desktop Chromium browser and a secure address: open the studio through its HTTPS address, not the plain-HTTP one. The StartOS app's built-in viewer cannot reach USB devices.

### Keeping your work

Export a descriptor, BSMS or Scriptwerk JSON from the **Import / Export** view before clearing browser data or switching devices. A StartOS backup of this service contains nothing — there is nothing on the server to back up.

## Limitations

- Scriptwerk is a design and checking tool, not a wallet or a signer. Verify the descriptor and checksum on Bitcoin and on the device before coins sit on a policy.
- Only SegWit `wsh()` miniscript policies; Taproot is not supported.
