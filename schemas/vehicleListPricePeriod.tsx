import {defineField, defineType} from 'sanity'
import {DiamondIcon} from '@sanity/icons'

export const vehicleListPricePeriodType = defineType({
  name: 'vehicleListPricePeriod', // Name of this document type
  title: 'Vehicle List Price Periods',
  type: 'document',
  icon: DiamondIcon,
  fields: [
    defineField({
      name: 'name', // e.g., "Summer 2025"
      type: 'string',
    }),
    defineField({
      title: 'Vehicle List', // This refers to a vehicleGroupList
      name: 'vehicleLists', // The field name
      type: 'reference',
      weak: true,
      to: {type: 'vehicleGroupList'}, // References your vehicleGroupList document
    }),
    defineField({
      title: 'Periods', // This refers to a specific date range (like "2025-07-01 to 2025-08-31")
      name: 'periods',
      type: 'reference',
      weak: true,
      to: {type: 'pricePeriod'}, // References a 'pricePeriod' document type
    }),
    defineField({
      title: 'Pricing Per Day',
      name: 'pricing',
      type: 'number',
    }),
    defineField({
      title: 'Title', // Internationalized title for this price period *entry*
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      title: 'Description', // Internationalized description for this price period *entry*
      name: 'description',
      type: 'internationalizedArrayString',
    }),
  ],
})
