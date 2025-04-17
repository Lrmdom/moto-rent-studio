import {defineField, defineType} from 'sanity'

export const vehicleGroupListType = defineType({
  name: 'vehicleGroupList',
  title: 'Vehicle Group List',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      type: 'string',
    }),
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
      title: 'Vehicle Models',
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
