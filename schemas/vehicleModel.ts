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
    // --- NOVO CAMPO para Acessórios: Array de objetos para simular a estrutura original ---
    defineField({
      title: 'Model Accessories Configuration',
      name: 'modelAcessoriesConfig', // Um novo nome para evitar conflito e ser mais descritivo
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'acessoryEntry', // Nome do tipo inline
          title: 'Accessory Entry',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Entry Name (for identification)',
              description: 'e.g., "Standard Accessories", "Premium Pack"',
            }),
            defineField({
              title: 'Associate with Accessory Group',
              name: 'acessorieGroupRef',
              type: 'reference',
              weak: true,
              to: [{type: 'acessorieGroup'}],
              description: 'Select an optional group for this entry.',
            }),
            defineField({
              title: 'Individual Accessories for this Entry',
              name: 'acessorieRefs',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  weak: true,
                  to: {type: 'acessorie'},
                },
              ],
              description: 'Select individual accessories to include in this entry.',
            }),
            // Se 'pricing' era um campo do 'vehicleModelAcessoriesGroup', você pode adicioná-lo aqui se for por "entry"
            // defineField({
            //   title: 'Pricing Per Day for this Entry',
            //   name: 'pricing',
            //   type: 'number',
            // }),
          ],
        },
      ],
      description: 'Configure accessory groups and individual accessories for this model.',
    }),
    // --- Fim do NOVO CAMPO ---
  ],
  initialValue: {
    addressDelivery: false,
  },
})
