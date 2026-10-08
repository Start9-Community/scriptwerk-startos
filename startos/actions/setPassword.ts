import { utils } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { uiUsername } from '../utils'

export const setPassword = sdk.Action.withoutInput(
  'set-password',

  async ({ effects }) => {
    const alreadySet = !!(await storeJson
      .read((s) => s?.uiPassword)
      .const(effects))
    return {
      name: alreadySet
        ? i18n('Reset Web UI Password')
        : i18n('Set Web UI Password'),
      description: i18n(
        'Generate the password for the Scriptwerk web interface. The username is always "admin". Running this again replaces the existing password.',
      ),
      warning: alreadySet
        ? i18n('The current password stops working as soon as this runs.')
        : null,
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },

  async ({ effects }) => {
    const password = utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 32 })
    await storeJson.merge(effects, { uiPassword: password })

    return {
      version: '1' as const,
      title: i18n('Web UI Password Set'),
      message: i18n(
        'Your browser asks for these the next time you open the Web UI. Save the password now — it is not shown again.',
      ),
      result: {
        type: 'group' as const,
        value: [
          {
            type: 'single' as const,
            name: i18n('Username'),
            description: null,
            value: uiUsername,
            masked: false,
            copyable: true,
            qr: false,
          },
          {
            type: 'single' as const,
            name: i18n('Password'),
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
          },
        ],
      },
    }
  },
)
