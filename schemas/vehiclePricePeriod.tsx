import {defineField, defineType} from 'sanity'

export const vehiclePricePeriodType = defineType({
  name: 'pricePeriod',
  title: 'Vehicle Price Periods',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      type: 'date',
    }),
    defineField({
      name: 'endtDate',
      type: 'date',
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
