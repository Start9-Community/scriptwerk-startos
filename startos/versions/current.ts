import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.33:1',
  releaseNotes: {
    en_US: `- Bitcoin must be at least 28.4:29, 29.4:16, 30.3:16 or 31.1:16, depending on its major version. Bitcoin Knots (pre-RDTS) 29.3:29 or later also works.
- The Web UI now asks for a username and password. Run Set Web UI Password to create them before starting Scriptwerk.`,
    de_DE: `- Bitcoin muss je nach Hauptversion mindestens 28.4:29, 29.4:16, 30.3:16 oder 31.1:16 sein. Bitcoin Knots (pre-RDTS) ab 29.3:29 funktioniert ebenfalls.
- Die Weboberfläche fragt jetzt nach Benutzername und Passwort. Lege sie mit „Passwort für die Weboberfläche festlegen“ an, bevor du Scriptwerk startest.`,
    es_ES: `- Bitcoin debe ser al menos la versión 28.4:29, 29.4:16, 30.3:16 o 31.1:16, según su versión principal. También funciona Bitcoin Knots (pre-RDTS) 29.3:29 o posterior.
- La interfaz web ahora pide nombre de usuario y contraseña. Créalos con «Establecer la contraseña de la interfaz web» antes de iniciar Scriptwerk.`,
    pl_PL: `- Bitcoin musi być co najmniej w wersji 28.4:29, 29.4:16, 30.3:16 lub 31.1:16, zależnie od wersji głównej. Działa też Bitcoin Knots (pre-RDTS) 29.3:29 lub nowszy.
- Interfejs webowy wymaga teraz nazwy użytkownika i hasła. Utwórz je akcją „Ustaw hasło interfejsu webowego” przed uruchomieniem Scriptwerk.`,
    fr_FR: `- Bitcoin doit être au moins en version 28.4:29, 29.4:16, 30.3:16 ou 31.1:16, selon sa version majeure. Bitcoin Knots (pre-RDTS) 29.3:29 ou plus récent fonctionne aussi.
- L’interface web demande désormais un nom d’utilisateur et un mot de passe. Créez-les avec « Définir le mot de passe de l’interface web » avant de démarrer Scriptwerk.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
