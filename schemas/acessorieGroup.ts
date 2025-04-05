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