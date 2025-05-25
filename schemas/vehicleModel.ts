import {defineField, defineType} from 'sanity'

export const vehicleModelType = defineType({
  name: 'vehicleModel',
  title: 'Vehicle Model',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    {
      name: 'groupList', // THIS IS THE KEY FIELD for the relationship
      title: 'Motorcycle Group',
      type: 'reference', // It's a reference type
      to: [{type: 'vehicleGroupList'}], // It refers to the 'motorcycleGroupList' document type
      description:
        'Select the group (category) this motorcycle model belongs to. Each model can only belong to one group.',
      validation: (Rule) => Rule.required().error('Every model must belong to a group.'), // ENFORCES THE ONE-TO-ONE/MANY-TO-ONE CONSTRAINT
    },

    {
      title: 'Address Delivery Possible',
      name: 'addressDelivery',
      type: 'boolean',
    },
    {
      title: 'To Rent?',
      name: 'toRent',
      type: 'boolean',
    },
    {
      title: 'To Sale?',
      name: 'toSale',
      type: 'boolean',
    },
    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      title: 'Model Link',
      name: 'modelLink',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),

    defineField({
      name: 'vehicleGroupTypes',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'vehicleGroupType'},
        },
      ],
    }),
    defineField({
      name: 'vehicles',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'vehicle'},
        },
      ],
    }),
    {
      name: 'attributes',
      title: 'Attributes',
      type: 'internationalizedArrayBlockContent',
    },
  ],
  initialValue: {
    addressDelivery: false,
  },
})
