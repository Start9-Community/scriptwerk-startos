import { setPassword } from '../actions/setPassword'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

// Critical, so Scriptwerk cannot start before the gate in interfaces.ts has a credential.
export const watchPassword = sdk.setupOnInit(async (effects) => {
  if (!(await storeJson.read((s) => s?.uiPassword).const(effects))) {
    await sdk.action.createOwnTask(effects, setPassword, 'critical', {
      reason: i18n(
        'Scriptwerk has no login of its own and can reach your Bitcoin node — set a password before starting it',
      ),
    })
  }
})
