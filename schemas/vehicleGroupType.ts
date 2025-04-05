import {defineField, defineType} from 'sanity'

export const vehicleGroupTypeType = defineType({
  name: 'vehicleGroupType',
  title: 'Vehicle Group Type',
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
      name: 'vehicles',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'vehicle'},
        },
      ],
    }),
  ],
})
