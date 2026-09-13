import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.24:0',
  releaseNotes: {
    en_US:
      'BTC and sats unit icons: circled ₿ and three-bar mark in Scriptwerk paper/sage.',
    de_DE:
      'BTC- und Sats-Icons: ₿ im Kreis und Drei-Balken-Zeichen in Papier/Sage.',
    es_ES:
      'Iconos BTC y sats: ₿ en círculo y marca de tres barras en papel/salvia.',
    pl_PL:
      'Ikony BTC i sats: ₿ w kole i trzy belki w papierze/szałwii.',
    fr_FR:
      'Icônes BTC et sats : ₿ cerclé et trois barres, papier/sauge Scriptwerk.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
