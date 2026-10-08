import { T } from '@start9labs/start-sdk'
import { rpcHostId, rpcPort } from 'bitcoin-core-startos/startos/utils'
import {
  electrumHostId as electrsHostId,
  port as electrsPort,
} from 'electrs-startos/startos/utils'
import {
  electrumPort as fulcrumPort,
  mainHostId as fulcrumHostId,
} from 'fulcrum-startos/startos/utils'
import {
  bitcoindDescription,
  electrsDescription,
  fulcrumDescription,
} from './manifest/i18n'
import { sdk } from './sdk'

const installed = async (
  effects: T.Effects,
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

const bitcoind = sdk.Dependency.optional('bitcoind', {
  description: bitcoindDescription,
  metadata: {
    title: 'Bitcoin',
    icon: 'https://raw.githubusercontent.com/Start9Labs/bitcoin-core-startos/refs/heads/31.x/dep-icon.svg',
  },
  versionRange:
    '(>=28.4:29 && <29) || (>=29.4:16 && <30) || (>=30.3:16 && <31) || >=31.1:16 || >=#knotsprerdts:29.3:29',
  kind: 'running',
  healthChecks: ['bitcoind'],
  enabled: ({ effects }) => installed(effects, 'bitcoind', rpcHostId, rpcPort),
})

const fulcrum = sdk.Dependency.optional('fulcrum', {
  description: fulcrumDescription,
  metadata: {
    title: 'Fulcrum',
    icon: 'https://raw.githubusercontent.com/Start9Labs/fulcrum-startos/master/icon.png',
  },
  versionRange: '>=2.1.1:8',
  kind: 'running',
  healthChecks: ['primary', 'sync-progress'],
  enabled: ({ effects }) =>
    installed(effects, 'fulcrum', fulcrumHostId, fulcrumPort),
})

const electrs = sdk.Dependency.optional('electrs', {
  description: electrsDescription,
  metadata: {
    title: 'Electrs',
    icon: 'https://raw.githubusercontent.com/Start9Labs/electrs-startos/refs/heads/master/icon.svg',
  },
  versionRange: '>=0.11.1:11',
  kind: 'running',
  healthChecks: ['electrs', 'sync'],
  enabled: ({ effects }) =>
    installed(effects, 'electrs', electrsHostId, electrsPort),
})

export const dependencies = sdk.Dependencies.of()
  .addDependency(bitcoind)
  .addDependency(fulcrum)
  .addDependency(electrs)
