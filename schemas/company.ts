import {defineField, defineType} from 'sanity'

export const companyType = defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'description',
        type: 'string',
      }),
  ],
})