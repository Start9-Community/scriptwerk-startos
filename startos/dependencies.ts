import { rpcHostId, rpcPort } from 'bitcoin-core-startos/startos/utils'
import {
  electrumHostId as electrsHostId,
  port as electrsPort,
} from 'electrs-startos/startos/utils'
import {
  electrumPort as fulcrumPort,
  mainHostId as fulcrumHostId,
} from 'fulcrum-startos/startos/utils'
import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  const installed = async (
    packageId: 'bitcoind' | 'fulcrum' | 'electrs',
    hostId: string,
    internalPort: number,
  ) =>
    !!(await sdk.host
      .getBridgeAddress(effects, {
        packageId,
        hostId,
        internalPort,
        ssl: false,
      })
      .const())

  return {
    ...((await installed('bitcoind', rpcHostId, rpcPort)) && {
      bitcoind: {
        kind: 'running',
        versionRange: '>=28.4:14',
        healthChecks: ['bitcoind'],
      },
    }),
    ...((await installed('fulcrum', fulcrumHostId, fulcrumPort)) && {
      fulcrum: {
        kind: 'running',
        versionRange: '>=2.1.1:8',
        healthChecks: ['primary', 'sync-progress'],
      },
    }),
    ...((await installed('electrs', electrsHostId, electrsPort)) && {
      electrs: {
        kind: 'running',
        versionRange: '>=0.11.1:11',
        healthChecks: ['electrs', 'sync'],
      },
    }),
  }
})
