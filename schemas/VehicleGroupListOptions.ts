import {defineField, defineType} from 'sanity'

export const VehicleGroupListOptionsType = defineType({
  name: 'VehicleGroupListOptions',
  title: 'Vehicle GroupList Options',

  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description:
        'The name attribute must be exactly the same name in Commercelayer sku_options.name.',
    }),
    defineField({
      name: 'regExpression',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
      description:
        'Price comes from CommerceLayer. This must be synced if want to set prices here.',
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
