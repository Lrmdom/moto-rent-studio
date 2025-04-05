import {defineField, defineType} from 'sanity'

export const routeType = defineType({
  name: 'route',
  title: 'Route',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'description',
        type: 'string',
      }),
      defineField({
        name: 'image',
        type: 'image',
      }),
      defineField({
        name: 'vehicleGroup',
        type: 'reference',
        to: [{type: 'vehicleGroup'}],
      }),
      defineField({
        name: 'vehicleGroupType',
        type: 'reference',
        to: [{type: 'vehicleGroupType'}],
      }),
      defineField({
        name: 'vehicleGroupList',
        type: 'reference',
        to: [{type: 'vehicleGroupList'}],
      }),
      defineField({
        name: 'vehicle',
        type: 'reference',
        to: [{type: 'vehicle'}],
      }),
      {
        name: 'attributes',
        title: 'Attributes',
        type: 'internationalizedArrayBlockContent',
    },
  ],
})