import {defineField, defineType} from 'sanity'

export const exclusionDefinitionType = defineType({
  name: 'exclusionDefinition',
  title: 'Exclusion Definition',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Internal Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Damage to Interior", "Loss of Keys"',
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
      description: 'A unique identifier for this specific exclusion (e.g., "damage-to-interior").',
    }),
    defineField({
      title: 'Display Title',
      name: 'title',
      type: 'internationalizedArrayString', // This is where the internationalization happens!
      description: 'The user-friendly title of the exclusion, in different languages.',
    }),
    defineField({
      title: 'Short Description',
      name: 'shortDescription',
      type: 'internationalizedArrayString',
      description: 'A brief explanation of this exclusion.',
    }),
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
