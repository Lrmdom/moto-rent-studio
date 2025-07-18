import {defineField, defineType} from 'sanity'

export const vehicleType = defineType({
  name: 'vehicle',
  title: 'Vehicle',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    {
      title: 'Address Delivery Possible',
      name: 'addressDelivery',
      type: 'boolean',
    },
    {
      title: 'To Rent?',
      name: 'toRent',
      type: 'boolean',
    },
    {
      title: 'To Sale?',
      name: 'toSale',
      type: 'boolean',
    },
    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'mileage',
      type: 'number',
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
      name: 'registration',
      type: 'string',
    }),

    defineField({
      name: 'vehicleGroupLists',
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
      name: 'vehicleModel',
      type: 'reference',
      weak: true,
      to: {type: 'vehicleModel'},
    }),
    defineField({
      name: 'location',
      type: 'reference',
      weak: true,
      to: {type: 'location'},
    }),

    {
      name: 'attributes',
      title: 'Attributes',
      type: 'internationalizedArrayBlockContent',
    },
  ],
})
