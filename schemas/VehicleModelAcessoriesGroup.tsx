import {defineField, defineType} from 'sanity'
import {DiamondIcon} from '@sanity/icons'

export const vehicleModelAcessoriesGroupType = defineType({
  name: 'vehicleModelAcessoriesGroup',
  title: 'Vehicle Model Acessories Group',
  type: 'document',
  icon: DiamondIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Model List',
      name: 'modelLists',
      type: 'reference',
      weak: true,
      to: {type: 'vehicleModel'},
    }),
    defineField({
      title: 'Group List',
      name: 'acessorieGroupLists',
      type: 'reference',
      weak: true,
      to: {type: 'acessorieGroup'},
    }),
    defineField({
      title: 'Acessories',
      name: 'acessorieLists',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'acessorie'},
        },
      ],
    }),
    defineField({
      title: 'Pricing Per Day',
      name: 'pricing',
      type: 'number',
    }),
  ],
})
