export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Scriptwerk': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The Scriptwerk miniscript studio': 5,

  // actions/setPassword.ts, init/watchPassword.ts
  'Reset Web UI Password': 6,
  'Set Web UI Password': 7,
  'Generate the password for the Scriptwerk web interface. The username is always "admin". Running this again replaces the existing password.': 8,
  'The current password stops working as soon as this runs.': 9,
  'Web UI Password Set': 10,
  'Your browser asks for these the next time you open the Web UI. Save the password now — it is not shown again.': 11,
  Username: 12,
  Password: 13,
  'Scriptwerk has no login of its own and can reach your Bitcoin node — set a password before starting it': 14,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
