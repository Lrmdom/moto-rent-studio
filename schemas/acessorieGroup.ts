import {defineField, defineType} from 'sanity'

export const acessorieGroupType = defineType({
  name: 'acessorieGroup',
  title: 'Acessories group',
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
      title: 'Acessories in this group',
      name: 'acessories',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'acessorie'},
        },
      ],
    }),
    defineField({
      title: 'Vehicle models with this acessories',
      name: 'vehicleModels',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'vehicleModel'},
        },
      ],
    }),
  ],
})