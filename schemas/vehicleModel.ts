import {defineField, defineType} from 'sanity'

export const vehicleModelType = defineType({
  name: 'vehicleModel',
  title: 'Vehicle Model',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    {
      title: 'Address Delivery',
      name: 'addressDelivery',
      type: 'boolean',
    },
    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      title: 'Model Link',
      name: 'modelLink',
      type: 'string',
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
    /* defineField({
                       name: 'vehicleGroupLists',
                       type: 'array',
                       of: [
                         {
                           type: 'reference',
                           weak: true,
                           to: {type: 'vehicleGroupList'},
                         },
                       ],
                     }),*/
    defineField({
      name: 'vehicleGroupTypes',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'vehicleGroupType'},
        },
      ],
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
    {
      name: 'attributes',
      title: 'Attributes',
      type: 'internationalizedArrayBlockContent',
    },
  ],
  initialValue: {
    addressDelivery: false,
  },
})
