import { setupManifest } from '@start9labs/start-sdk'
import {
  bitcoindDescription,
  electrsDescription,
  fulcrumDescription,
  long,
  short,
} from './i18n'

export const manifest = setupManifest({
  id: 'scriptwerk',
  title: 'Scriptwerk',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/scriptwerk-startos',
  upstreamRepo: 'https://github.com/kwadde-cmyk/scriptwerk-startos',
  marketingUrl: 'https://github.com/kwadde-cmyk/scriptwerk-startos',
  donationUrl: null,
  description: { short, long },
  volumes: [],
  images: {
    scriptwerk: {
      source: { dockerBuild: { workdir: './scriptwerk' } },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    bitcoind: {
      description: bitcoindDescription,
      optional: true,
      metadata: {
        title: 'Bitcoin',
        icon: 'https://raw.githubusercontent.com/Start9Labs/bitcoin-core-startos/refs/heads/31.x/dep-icon.svg',
      },
    },
    fulcrum: {
      description: fulcrumDescription,
      optional: true,
      metadata: {
        title: 'Fulcrum',
        icon: 'https://raw.githubusercontent.com/Start9Labs/fulcrum-startos/master/icon.png',
      },
    },
    electrs: {
      description: electrsDescription,
      optional: true,
      metadata: {
        title: 'Electrs',
        icon: 'https://raw.githubusercontent.com/Start9Labs/electrs-startos/refs/heads/master/icon.svg',
      },
    },
  },
})
