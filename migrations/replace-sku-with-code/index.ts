import {defineMigration, at, setIfMissing, unset} from 'sanity/migrate'

const from = 'sku'
const to = 'code'

export default defineMigration({
  title: 'Replace sku  with code',
  documentTypes: ['execlogServiceDetail'],

  migrate: {
    document(doc, context) {
      return [at(to, setIfMissing(doc[from])), at(from, unset())]
    },
  },
})
