import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.25:0',
  releaseNotes: {
    en_US:
      'Dark unit icons. Always eight BTC decimals with locale separators. Auto below 0.1 BTC as sats. Address coins follow the unit; the bottom coin list stays BTC.',
    de_DE:
      'Dunkle Einheiten-Icons. BTC immer acht Nachkommastellen mit lokalen Trennzeichen. Auto unter 0,1 BTC als Sats. Adress-Coins folgen der Einheit; die Coins-Liste unten bleibt BTC.',
    es_ES:
      'Iconos oscuros. BTC con ocho decimales y separadores locales. Auto bajo 0,1 BTC en sats. Coins de dirección siguen la unidad; la lista inferior sigue en BTC.',
    pl_PL:
      'Ciemne ikony. BTC zawsze osiem miejsc, lokalne separatory. Auto poniżej 0,1 BTC jako sats. Coiny przy adresie wg jednostki; lista na dole zawsze BTC.',
    fr_FR:
      'Icônes sombres. BTC à huit décimales, séparateurs locaux. Auto sous 0,1 BTC en sats. Coins d’adresse suivent l’unité ; la liste du bas reste en BTC.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
