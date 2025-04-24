import {defineField, defineType} from 'sanity'
import {DiamondIcon} from '@sanity/icons'

export const vehicleListPricePeriodType = defineType({
  name: 'vehicleListPricePeriod',
  title: 'Vehicle List Price Periods',
  type: 'document',
  icon: DiamondIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Vehicle List',
      name: 'vehicleLists',
      type: 'reference',
      weak: true,
      to: {type: 'vehicleGroupList'},
    }),
    defineField({
      title: 'Periods',
      name: 'periods',
      type: 'reference',
      weak: true,
      to: {type: 'pricePeriod'},
    }),
    defineField({
      title: 'Pricing Per Day',
      name: 'pricing',
      type: 'number',
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
  ],
})
