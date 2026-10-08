import { sdk } from '../sdk'
import { setPassword } from './setPassword'

export const actions = sdk.Actions.of().addAction(setPassword)
