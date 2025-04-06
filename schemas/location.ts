import {defineField, defineType} from 'sanity'

export const locationType = defineType({
  name: 'location',
  title: 'Vehicles Locations',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'contacts',
      title: 'Contacts',
      type: 'internationalizedArrayBlockContent',
    }),
/*    defineField({
      title:'Vehicles in Location',
      name: 'vehicles',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'vehicle'},
        },
      ],
    }),*/
    defineField({
      name: 'company',
      type: 'reference',
      to: [{type: 'company'}],
    }),
  ],
})
