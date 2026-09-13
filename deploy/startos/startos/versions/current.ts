import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.22:0',
  releaseNotes: {
    en_US:
      'Amounts: no rounding; below 1 BTC eight decimals; Auto per amount; coin list always BTC. Unit switch uses Bitcoin and satoshi icons.',
    de_DE:
      'Beträge ohne Runden; unter 1 BTC acht Nachkommastellen; Auto je Betrag; Coins-Liste immer BTC. Einheiten als Bitcoin- und Satoshi-Icons.',
    es_ES:
      'Importes sin redondeo; menos de 1 BTC con ocho decimales; Auto por importe; lista de coins siempre BTC. Iconos de unidad.',
    pl_PL:
      'Kwoty bez zaokrągleń; poniżej 1 BTC osiem miejsc; Auto per kwota; lista coinów zawsze BTC. Ikony jednostek.',
    fr_FR:
      'Montants sans arrondi ; moins de 1 BTC à huit décimales ; Auto par montant ; liste coins toujours BTC. Icônes d’unité.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
