import {defineField, defineType} from 'sanity'

export const vehicleModelPricePeriodType = defineType({
  name: 'vehicleModelPricePeriod',
  title: 'Vehicle Model Price Periods',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Models',
      name: 'vehicleModels',
      type: 'reference',
      to: {type: 'vehicleModel'},
    }),
    defineField({
      title: 'Periods',
      name: 'periods',
      type: 'reference',
      to: {type: 'vehiclePricePeriod'},
    }),
    defineField({
      title: 'Pricing',
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
