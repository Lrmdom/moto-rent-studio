// ./schemas/pageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType2 = defineType({
  name: 'page2',
  type: 'document',
  title: 'Page2',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'reference',
          weak: true,
          to: [{type: 'promotion'}],
        }),
        // etc...
      ],
    }),
  ],
})
