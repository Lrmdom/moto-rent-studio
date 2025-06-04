import {defineField, defineType} from 'sanity'

export const coverageDefinitionType = defineType({
  name: 'coverageDefinition',
  title: 'Coverage Definition',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Internal Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Tire & Glass Protection"',
    }),
    defineField({
      name: 'code',
      title: 'Unique Code',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description:
        'A unique identifier for this specific coverage (e.g., "tire-glass-protection").',
    }),
    defineField({
      title: 'Display Title',
      name: 'title',
      type: 'internationalizedArrayString', // This is where the internationalization happens!
      description: 'The user-friendly title of the coverage, in different languages.',
    }),
    defineField({
      title: 'Short Description',
      name: 'shortDescription',
      type: 'internationalizedArrayString',
      description: 'A brief explanation of this coverage.',
    }),
    // You could add an icon, details link, etc.
  ],
  preview: {
    select: {
      name: 'name',
      code: 'code.current',
    },
    prepare({name, code}) {
      return {
        title: name,
        subtitle: `Code: ${code}`,
      }
    },
  },
})
