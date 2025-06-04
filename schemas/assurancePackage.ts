// schemas/assurancePackage.js
import {defineField, defineType} from 'sanity'

export const assurancePackageType = defineType({
  name: 'assurancePackage',
  title: 'Assurance Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Basic Coverage", "Premium Protection", "All Inclusive"',
    }),
    defineField({
      name: 'code',
      title: 'Internal Code',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'A unique identifier for the package (e.g., "basic-coverage").',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
      description: 'User-friendly title for the package, in different languages.',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'internationalizedArrayString',
      description: 'Detailed description of what the package includes, in different languages.',
    }),
    // --- Removed: depositReduction and excessReduction from here ---
    defineField({
      name: 'includedCoverages',
      title: 'Included Coverages/Benefits',
      type: 'array',
      of: [
        defineField({
          name: 'coverageRef',
          title: 'Coverage',
          type: 'reference',
          to: [{type: 'coverageDefinition'}],
          description: 'Select a predefined coverage definition.',
        }),
      ],
      description: 'Select specific benefits included in this package from predefined coverages.',
    }),
    defineField({
      name: 'notIncludedCoverages',
      title: 'Not Included/Exclusions',
      type: 'array',
      of: [
        defineField({
          name: 'exclusionRef',
          title: 'Exclusion',
          type: 'reference',
          to: [{type: 'exclusionDefinition'}],
          description: 'Select a predefined exclusion definition.',
        }),
      ],
      description:
        'Select specific exclusions that apply to this package from predefined definitions.',
    }),
    defineField({
      name: 'isDefault',
      title: 'Is Default Package?',
      type: 'boolean',
      description: 'Check if this is the default assurance package offered with rentals.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Define the order in which packages should be displayed (lower number first).',
      validation: (Rule) => Rule.integer().min(0),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      // No numerical values to select here anymore for a simple preview
    },
    prepare({name}) {
      return {
        title: name,
        subtitle: 'Core assurance package definition', // More generic subtitle
      }
    },
  },
})
