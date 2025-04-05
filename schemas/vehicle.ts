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
      to: {type: 'location'},
    }),

    {
      name: 'attributes',
      title: 'Attributes',
      type: 'internationalizedArrayBlockContent',
    },
  ],
})
