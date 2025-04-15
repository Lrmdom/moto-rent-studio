// ./scripts/createData.ts

import {faker} from '@faker-js/faker'
import type {SanityDocumentLike} from 'sanity'
import {getCliClient} from 'sanity/cli'

const client = getCliClient()
const COUNT = 5

async function createData() {
  console.log(`Create new data with...`)
  console.log(`Project ID: ${client.config().projectId}`)
  console.log(`Dataset: ${client.config().dataset}`)

  const posts: SanityDocumentLike[] = []

  for (let i = 0; i < COUNT; i++) {
    posts.push({
      _type: 'post',
      _id: faker.string.uuid(),
      title: faker.company.catchPhrase(),
    })
  }

  console.log(posts)
}

createData()