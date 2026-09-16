import { FileHelper } from '@start9labs/start-sdk'
import { rpcHostId, rpcPort } from 'bitcoin-core-startos/startos/utils'
import {
  electrumHostId as electrsHostId,
  port as electrsPort,
} from 'electrs-startos/startos/utils'
import {
  electrumPort as fulcrumPort,
  mainHostId as fulcrumHostId,
} from 'fulcrum-startos/startos/utils'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Scriptwerk'))

  const bitcoindRpc = await sdk.host
    .getBridgeAddress(effects, {
      packageId: 'bitcoind',
      hostId: rpcHostId,
      internalPort: rpcPort,
      ssl: false,
    })
    .const()
  const fulcrum = await sdk.host
    .getBridgeAddress(effects, {
      packageId: 'fulcrum',
      hostId: fulcrumHostId,
      internalPort: fulcrumPort,
      ssl: false,
    })
    .const()
  const electrs = await sdk.host
    .getBridgeAddress(effects, {
      packageId: 'electrs',
      hostId: electrsHostId,
      internalPort: electrsPort,
      ssl: false,
    })
    .const()

  let mounts = sdk.Mounts.of()
  if (bitcoindRpc) {
    mounts = mounts.mountDependency({
      dependencyId: 'bitcoind',
      volumeId: 'main',
      subpath: null,
      mountpoint: '/mnt/bitcoind',
      readonly: true,
    })
  }
  const scriptwerk = sdk.SubContainer.of(
    effects,
    { imageId: 'scriptwerk' },
    mounts,
    'scriptwerk',
  )

  // Restart only when bitcoind writes a replacement cookie — an absent cookie
  // means bitcoind is down.
  const cookie = bitcoindRpc
    ? await FileHelper.string(`${await scriptwerk.rootfs}/mnt/bitcoind/.cookie`)
        .read(
          (cookie) => cookie,
          (prev, next) => next === null || prev === next,
        )
        .const(effects)
    : null
  const [cookieUser, cookiePassword] = cookie?.trim().split(':') ?? []

  const electrum = fulcrum
    ? { url: fulcrum, source: 'fulcrum' }
    : electrs
      ? { url: electrs, source: 'electrs' }
      : null

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: scriptwerk,
    exec: {
      command: sdk.useEntrypoint(),
      env: {
        ...(bitcoindRpc &&
          cookieUser &&
          cookiePassword && {
            BITCOIND_RPC_URL: `http://${bitcoindRpc}`,
            BITCOIND_RPC_USER: cookieUser,
            BITCOIND_RPC_PASSWORD: cookiePassword,
            BITCOIND_RPC_SOURCE: 'startos',
          }),
        ...(electrum && {
          ELECTRUM_URL: electrum.url,
          ELECTRUM_SOURCE: electrum.source,
        }),
      },
    },
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The web interface is ready'),
          errorMessage: i18n('The web interface is not ready'),
        }),
    },
    requires: [],
  })
})
