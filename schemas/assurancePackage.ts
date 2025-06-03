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
    defineField({
      name: 'dailyPrice',
      title: 'Daily Price',
      type: 'number',
      description: 'The additional daily cost of this assurance package (e.g., 15.00 for 15€/day).',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'depositReduction',
      title: 'Security Deposit Reduction (€)',
      type: 'number',
      description:
        'Amount by which the security deposit is reduced (e.g., 500 for a 500€ reduction).',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'excessReduction',
      title: 'Excess/Deductible Reduction (€)',
      type: 'number',
      description:
        'Amount by which the deductible/excess is reduced in case of damage (e.g., 800 for an 800€ reduction).',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'includedCoverages',
      title: 'Included Coverages/Benefits',
      type: 'array',
      of: [
        defineField({
          name: 'coverageRef',
          title: 'Coverage',
          type: 'reference',
          to: [{type: 'coverageDefinition'}], // REFERENCE THE NEW SCHEMA
          description: 'Select a predefined coverage definition.',
        }),
      ],
      // You lose the 'tags' layout here, as it's now a list of references.
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
          to: [{type: 'exclusionDefinition'}], // REFERENCE THE NEW SCHEMA
          description: 'Select a predefined exclusion definition.',
        }),
      ],
      // You lose the 'tags' layout here, as it's now a list of references.
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
      dailyPrice: 'dailyPrice',
      depositReduction: 'depositReduction',
    },
    prepare({name, dailyPrice, depositReduction}) {
      const priceInfo = dailyPrice ? `${dailyPrice.toFixed(2)}€/day` : 'No Daily Cost'
      const depositInfo = depositReduction
        ? `Deposit Reduced by ${depositReduction.toFixed(2)}€`
        : ''
      return {
        title: name,
        subtitle: `${priceInfo} ${depositInfo}`,
      }
    },
  },
})
