import {defineField, defineType} from 'sanity'

export const vehicleGroupType = defineType({
  name: 'vehicleGroup',
  title: 'Vehicle Group',
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
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'internationalizedArrayString',
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
  ],
})
