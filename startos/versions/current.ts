import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

const notes = {
  en_US: [
    'Requires StartOS 0.4.2 or later.',
    '',
    "Scriptwerk's access to Bitcoin's data is limited to its RPC credentials. If Scriptwerk uses Bitcoin on this server, update Bitcoin when StartOS asks.",
  ].join('\n'),
  de_DE: [
    'Erfordert StartOS 0.4.2 oder neuer.',
    '',
    'Der Zugriff von Scriptwerk auf die Daten von Bitcoin ist auf dessen RPC-Zugangsdaten beschränkt. Wenn Scriptwerk Bitcoin auf diesem Server nutzt, aktualisiere Bitcoin, sobald StartOS dazu auffordert.',
  ].join('\n'),
  es_ES: [
    'Requiere StartOS 0.4.2 o posterior.',
    '',
    'El acceso de Scriptwerk a los datos de Bitcoin se limita a sus credenciales RPC. Si Scriptwerk usa Bitcoin en este servidor, actualiza Bitcoin cuando StartOS lo pida.',
  ].join('\n'),
  pl_PL: [
    'Wymaga StartOS 0.4.2 lub nowszego.',
    '',
    'Dostęp Scriptwerk do danych Bitcoina ogranicza się do jego danych uwierzytelniających RPC. Jeśli Scriptwerk korzysta z Bitcoina na tym serwerze, zaktualizuj Bitcoina, gdy StartOS o to poprosi.',
  ].join('\n'),
  fr_FR: [
    'Nécessite StartOS 0.4.2 ou une version ultérieure.',
    '',
    'L’accès de Scriptwerk aux données de Bitcoin se limite à ses identifiants RPC. Si Scriptwerk utilise Bitcoin sur ce serveur, mettez Bitcoin à jour lorsque StartOS le demande.',
  ].join('\n'),
}

export const current = VersionInfo.of({
  version: '0.1.73:2',
  releaseNotes: notes,
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
