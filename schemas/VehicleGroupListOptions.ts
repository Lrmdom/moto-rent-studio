import {defineField, defineType} from 'sanity'

export const VehicleGroupListOptionsType = defineType({
  name: 'VehicleGroupListOptions',
  title: 'Vehicle GroupList Options',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'regExpression',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      title: 'Vehicle Groups Lists',
      name: 'vehiclegrouplist',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'vehicleGroupList'},
        },
      ],
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
  ],
})
