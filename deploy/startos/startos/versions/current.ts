import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.23:0',
  releaseNotes: {
    en_US:
      'Sats unit uses the three-bar satoshi mark.',
    de_DE:
      'Sats-Einheit mit dem Drei-Balken-Satoshi-Zeichen.',
    es_ES:
      'La unidad sats usa la marca de tres barras.',
    pl_PL:
      'Jednostka sats z trójbelkowym znakiem satoshi.',
    fr_FR:
      'Unité sats : marque satoshi à trois barres.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
