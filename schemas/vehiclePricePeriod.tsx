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
      name: 'start_Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM',
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'end_Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM',
        calendarTodayLabel: 'Today',
      },
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
