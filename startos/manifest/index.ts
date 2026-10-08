import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'scriptwerk',
  title: 'Scriptwerk',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/scriptwerk-startos',
  upstreamRepo: 'https://github.com/kwadde-cmyk/scriptwerk-startos',
  marketingUrl: 'https://github.com/kwadde-cmyk/scriptwerk-startos',
  donationUrl: null,
  description: { short, long },
  volumes: ['startos'],
  images: {
    scriptwerk: {
      source: { dockerBuild: { workdir: './scriptwerk' } },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
