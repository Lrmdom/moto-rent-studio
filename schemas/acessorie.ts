import {defineField, defineType} from 'sanity'

export const acessorieType = defineType({
  name: 'acessorie',
  title: 'Acessories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
    }),

    defineField({
      title: 'Description',
      name: 'description',
      type: 'internationalizedArrayString',
    }),
      defineField({
        name: 'image',
        type: 'image',
      }),
    defineField({
      name: 'acessorieGroup',
      type: 'reference',
      to: [{type: 'acessorieGroup'}],
    }),
      defineField({
        name: 'vehicleModel',
        type: 'reference',
        to: [{type: 'vehicleModel'}],
      }),
      {
        name: 'attributes',
        title: 'Attributes',
        type: 'internationalizedArrayBlockContent',
    },
  ],
})