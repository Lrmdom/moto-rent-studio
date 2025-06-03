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
          name: 'assurancePackageRef',
          title: 'Assurance Package',
          type: 'reference',
          to: [{type: 'assurancePackage'}], // Reference your new assurancePackageType
          description: 'Select assurance packages available for this vehicle group.',
        }),
      ],
      description: 'Define which assurance packages can be offered with this vehicle group.',
    }),
    // --- END ADDITION ---
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
