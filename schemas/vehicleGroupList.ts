import {defineField, defineType} from 'sanity'
import {seasonDefinitionType} from './seasonDefinition'
// Make sure to import your new assurancePackageType
import {assurancePackageType} from './assurancePackage' // <--- ADD THIS LINE

export const vehicleGroupListType = defineType({
  name: 'vehicleGroupList',
  title: 'Vehicle Group List',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'prices',
      title: 'Seasonal Pricing Periods',
      type: 'array',
      of: [
        defineField({
          name: 'pricePeriodEntry',
          title: 'Pricing Period Entry',
          type: 'object',
          fields: [
            defineField({
              name: 'season',
              title: 'Select Season',
              type: 'reference',
              to: [{type: 'seasonDefinition'}],
              weak: true,
              description: 'Select the predefined seasonal name (e.g., "High Season").',
            }),
            defineField({
              name: 'pricing',
              title: 'Daily Price',
              type: 'number',
              description: 'The price per day for this vehicle group during this period.',
            }),
          ],
          preview: {
            select: {
              seasonName: 'season.name',
              startDate: 'season.start_Date',
              endDate: 'season.end_Date',
              pricing: 'pricing',
            },
            prepare({seasonName, startDate, endDate, pricing}) {
              const start = startDate
                ? new Date(startDate).toLocaleDateString('pt-PT')
                : 'No Start Date'
              const end = endDate ? new Date(endDate).toLocaleDateString('pt-PT') : 'No End Date'
              const price = pricing ? `${pricing.toFixed(2)}€` : 'No Price'

              return {
                title: seasonName || 'Unnamed Season',
                subtitle: `${start} - ${end} (${price})`,
              }
            },
          },
        }),
      ],
      description:
        'Define different daily prices for different time periods throughout the year. At least one period is required.',
    }),
    // --- ADD THIS FIELD TO vehicleGroupListType ---
    defineField({
      name: 'availableAssurancePackages',
      title: 'Available Assurance Packages',
      type: 'array',
      of: [
        defineField({
          name: 'assurancePackageDetails',
          title: 'Assurance Package Details',
          type: 'object',
          fields: [
            defineField({
              name: 'package',
              title: 'Assurance Package',
              type: 'reference',
              to: [{type: 'assurancePackage'}],
              description: 'Select an assurance package available for this vehicle group.',
            }),
            defineField({
              name: 'included',
              title: 'Included in Rental Price?',
              type: 'boolean',
              initialValue: false,
              description:
                'If selected, this package is included with the rental and has no extra daily cost.',
            }),
            defineField({
              name: 'price',
              title: 'Price for this Vehicle Group',
              type: 'number',
              description:
                'The distinct daily price for this assurance package when offered with THIS vehicle group. Deactivated if "Included" is checked.',
              validation: (Rule) =>
                Rule.min(0).custom((price, context) => {
                  if (context.parent.included && (price === undefined || price === null)) {
                    return true
                  }
                  if (!context.parent.included && (price === undefined || price === null)) {
                    return 'Price is required when the package is not included in the rental.'
                  }
                  return true
                }),
              hidden: ({parent}) => parent?.included, // Hide if 'included' is true
              // readOnly: ({parent}) => parent?.included, // Alternatively, make it readOnly
            }),
            // --- Re-added and modified original 'Deposit' field ---
            defineField({
              name: 'Deposit', // Keeping your original casing here
              title: 'Package Deposit Value for this Group',
              type: 'number',
              description:
                'The distinct deposit value for this assurance package when offered with THIS vehicle group. Deactivated if "Included" is checked.',
              validation: (Rule) =>
                Rule.min(0).custom((value, context) => {
                  if (context.parent.included && (value === undefined || value === null)) {
                    return true // Deposit is optional when included
                  }
                  if (!context.parent.included && (value === undefined || value === null)) {
                    return 'Deposit value is required when the package is not included.'
                  }
                  return true
                }),
            }),
            // --- Re-added 'excessReduction' as you requested if it also needs to be group-specific ---
            defineField({
              name: 'excessReduction',
              title: 'Excess/Deductible Reduction (€) for this Group',
              type: 'number',
              description:
                'Amount by which the deductible/excess is reduced by this package for THIS vehicle group. Deactivated if "Included" is checked.',
              validation: (Rule) =>
                Rule.min(0).custom((value, context) => {
                  if (context.parent.included && (value === undefined || value === null)) {
                    return true // Excess reduction is optional when included
                  }
                  if (!context.parent.included && (value === undefined || value === null)) {
                    return 'Excess reduction value is required when the package is not included.'
                  }
                  return true
                }),
              hidden: ({parent}) => parent?.included, // Hide if 'included' is true
              // readOnly: ({parent}) => parent?.included, // Alternatively, make it readOnly
            }),
          ],
          preview: {
            select: {
              packageName: 'package.name',
              price: 'price',
              included: 'included',
              depositValue: 'Deposit', // Select the 'Deposit' field for preview
              excessReduction: 'excessReduction', // Select the 'excessReduction' field for preview
            },
            prepare({packageName, price, included, depositValue, excessReduction}) {
              let subtitleParts = []

              if (included) {
                subtitleParts.push('Included in Rental Price')
              } else if (price !== undefined && price !== null) {
                subtitleParts.push(`Price: ${price.toFixed(2)}€`)
              }

              if (depositValue !== undefined && depositValue !== null) {
                subtitleParts.push(`Deposit: ${depositValue.toFixed(2)}€`)
              }
              if (excessReduction !== undefined && excessReduction !== null) {
                subtitleParts.push(`Excess: ${excessReduction.toFixed(2)}€`)
              }

              return {
                title: packageName || 'Unnamed Assurance Package',
                subtitle: subtitleParts.join(' | ') || 'Details not set',
              }
            },
          },
        }),
      ],
      description:
        'Define which assurance packages can be offered with this vehicle group, and their specific daily prices, deposit and excess reductions. Set a package as "Included" to make it free with the rental.',
      validation: (Rule) =>
        Rule.custom((packages) => {
          if (!packages) {
            return true
          }
          const packageRefs = packages.map((p) => p.package?._ref).filter(Boolean)
          const uniqueRefs = new Set(packageRefs)

          if (uniqueRefs.size !== packageRefs.length) {
            return 'Each assurance package must be selected only once per vehicle group.'
          }
          return true
        }),
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
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        }),
      ],
    }),
  ],
})
