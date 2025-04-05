import {defineField, defineType} from 'sanity'

export const locationType = defineType({
  name: 'location',
  title: 'Vehicles Locations',
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
    defineField({
      name: 'vehicles',
      type: 'reference',
      to: [{type: 'vehicle'}],
    }),
    defineField({
      name: 'company',
      type: 'reference',
      to: [{type: 'company'}],
    }),
  ],
})
