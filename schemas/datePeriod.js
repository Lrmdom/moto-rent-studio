// schemas/datePeriod.js
import {defineType, defineField} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const datePeriodType = defineType({
  name: 'datePeriod',
  title: 'Reusable Date Periods',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Period Name (e.g., Q1, Summer Break)',
      type: 'string',
      validation: (Rule) => Rule.required().unique(),
    }),
    defineField({
      name: 'start_Date',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'end_Date',
      title: 'End Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
