# Scriptwerk

## Documentation

- [Scriptwerk README](https://github.com/kwadde-cmyk/scriptwerk-startos/blob/main/README.md) — the upstream feature guide, in English and German.

## What you get on StartOS

A **Web UI** interface serving the studio. If Bitcoin is installed on this server, Scriptwerk checks descriptors and derives addresses against your own node — the app's **Node** dialog comes pre-filled and locked, with no RPC user to create. If Fulcrum or Electrs is installed, the **Wallet** view and **Check UTXOs** list the coins a policy holds through it; Fulcrum is used when both are installed.

Nothing you design is stored on the server. Policies, key names and saved designs live in the browser you open the studio with.

## Getting set up

1. Run **Set Web UI Password** (StartOS asks you to before the first start) and save the password it shows. The username is `admin`.
2. Start the service and open the **Web UI** from the Dashboard tab; your browser asks for the username and password.
3. Build a policy from the **Stages** tab, or import a descriptor, miniscript, BSMS or Scriptwerk JSON file.
4. To check the policy against your node, open the **Node** dialog: with Bitcoin installed it is already connected. **Unlock** lets you point it at a different node; **Reset** returns to the one on this server.

Install Bitcoin, Fulcrum or Electrs at any time — Scriptwerk restarts on its own to pick them up.

## Using Scriptwerk

### Hardware wallets

Registering a policy on a Ledger or BitBox, and scanning QR codes, needs a desktop Chromium browser and a secure address: open the studio through its HTTPS address, not the plain-HTTP one. The StartOS app's built-in viewer cannot reach USB devices.

### Keeping your work

Export a descriptor, BSMS or Scriptwerk JSON from the **Import / Export** view before clearing browser data or switching devices. A StartOS backup of this service holds only the Web UI password — your designs are not on the server.

### Transactions

The **Tx** view builds a payment from scanned coins, or one recovery transaction per coin whose timelock has opened. Finalize exports the PSBT as a file or a static QR, imports it as a file or a QR video, or signs it over USB. Sending hands the finished transaction to Bitcoin, or saves it as a file. The policy must already be registered on the Ledger or BitBox. No seed is stored on the server or in the browser.

## Limitations

- Scriptwerk does not hold a seed or coins. Signing stays on a Ledger or BitBox. Verify the descriptor and checksum on Bitcoin and on the device before coins sit on a policy.
- Only SegWit `wsh()` miniscript policies; Taproot is not supported.
