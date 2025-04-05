import {defineField, defineType} from 'sanity'

export const execlogPriceModel = defineType({
  name: 'execlogPriceModel',
  title: 'Execlog Services Price Model',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'conditions',
      title: 'Conditions',
      type: 'internationalizedArrayBlockContent',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayBlockContent',
    }),
  ],
})
