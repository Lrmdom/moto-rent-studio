import {defineField, defineType} from 'sanity'

export const execlogPrice = defineType({
  name: 'execlogPrice',
  title: 'Execlog Services Price',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
      name: 'execlogServicePriceModel',
      type: 'object',
      fields: [
        {
          title: 'Price Model',
          name: 'priceModel',
          type: 'reference',
          to: [{type: 'execlogPriceModel'}],
        },
      ],
    }),

    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    /*    defineField({
                                      name: 'execlogService',
                                      group: 'references',
                                      fieldset: 'references',
                                      type: 'array',
                                      of: [
                                        {
                                          type: 'reference',
                                          weak: true,
                                          to: {type: 'execlogService'},
                                        },
                                      ],
                                    }),*/
  ],
})
