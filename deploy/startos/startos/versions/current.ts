import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.20:0',
  releaseNotes: {
    en_US:
      'Watch-only wallet on the Descriptor tab. Testnet removed; Scriptwerk is mainnet only.',
    de_DE:
      'Watch-only-Wallet im Descriptor-Tab. Testnet entfernt; Scriptwerk nur noch Mainnet.',
    es_ES:
      'Cartera watch-only en el descriptor. Sin testnet; solo mainnet.',
    pl_PL:
      'Portfel watch-only w karcie deskryptora. Bez testnetu; tylko mainnet.',
    fr_FR:
      'Portefeuille watch-only dans l’onglet descripteur. Plus de testnet ; mainnet uniquement.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
