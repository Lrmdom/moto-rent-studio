import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset } from './sanity.config'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: 'moto-rent-studio',
  appId: 'loqas0x2p617l3xjnvy1itum'
})
