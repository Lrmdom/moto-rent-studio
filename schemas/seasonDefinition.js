// schemas/seasonDefinition.js
import {defineType, defineField} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const seasonDefinitionType = defineType({
  name: 'seasonDefinition', // This is the simple lookup for season names
  title: 'Season Definitions',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Season Name',
      type: 'string',
      description: 'e.g., "Summer High Season", "Winter Low Season", "Easter Holiday"',
      // You'll likely want validation here later: (Rule) => Rule.required().unique(),
    }),
    defineField({
      name: 'start_Date',
      title: 'Default Start Date',
      type: 'date',
      description: 'The typical start date for this season (e.g., 2025-07-01 for High Season).',
      // You'll likely want validation here later: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'end_Date',
      title: 'Default End Date',
      type: 'date',
      description: 'The typical end date for this season (e.g., 2025-08-31 for High Season).',
      // You'll likely want validation here later: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
    }),
  ],
})
