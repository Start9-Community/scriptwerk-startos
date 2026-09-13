import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.21:0',
  releaseNotes: {
    en_US:
      'Check descriptor in the top-right of the node card. Watch-only shows the wallet name, per-UTXO amounts, BTC/sats/Auto, and auto-scans when Core is connected. Policy name sits above the tree.',
    de_DE:
      'Descriptor prüfen oben rechts im Node-Rahmen. Watch-only mit Wallet-Name, einzelnen UTXOs, BTC/sats/Auto, Scan beim Verbinden. Policy-Name über dem Baum.',
    es_ES:
      'Comprobar descriptor arriba a la derecha. Watch-only con nombre, UTXOs sueltos, BTC/sats/Auto y escaneo al conectar.',
    pl_PL:
      'Sprawdź deskryptor w prawym górnym rogu. Watch-only z nazwą, UTXO, BTC/sats/Auto i skanem po połączeniu.',
    fr_FR:
      'Vérifier le descripteur en haut à droite. Watch-only : nom, UTXO, BTC/sats/Auto, scan à la connexion.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
