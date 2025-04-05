import {defineField, defineType} from 'sanity'
import {DiamondIcon} from '@sanity/icons'

export const execlogService = defineType({
  name: 'execlogService',
  title: 'Execlog Service',
  type: 'document',
  icon: DiamondIcon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'cLayer',
      title: 'cLayer',
    },
    {
      name: 'references',
      title: 'References',
    },
    {
      name: 'translations',
      title: 'Translations',
    },
  ],
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'cLayer',
      title: 'CommerceLayer',
    },
    {
      name: 'references',
      title: 'References',
    },
    {
      name: 'translations',
      title: 'Translations',
    },
    {name: 'social', title: 'Social media handles'},
  ],

  fields: [
    defineField({
      name: 'sku',
      type: 'string',
      group: 'cLayer',
    }),
    defineField({
      name: 'code',
      type: 'string',
      group: 'cLayer',
      fieldset: 'cLayer',
    }),
    defineField({
      name: 'name',
      type: 'string',
      group: 'cLayer',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
      group: 'translations',
      fieldset: 'translations',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'image_url',
      type: 'url',
      group: 'cLayer',
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
      name: 'excerpt',
      type: 'internationalizedArrayBlockContent',
      group: 'translations',
      fieldset: 'translations',
    }),
    defineField({
      name: 'imageAltText',
      type: 'text',
      group: 'cLayer',
    }),
    defineField({
      name: 'description',
      type: 'text',
      group: ['cLayer'],
    }),
    defineField({
      name: 'mobileDescription',
      type: 'text',
    }),
    defineField({
      name: 'benefits',
      type: 'text',
    }),
    defineField({
      name: 'observations',
      type: 'text',
    }),

    defineField({
      name: 'do_not_ship',
      title: 'Do Not Ship',
      type: 'boolean',
      group: 'cLayer',
      fieldset: 'cLayer',
    }),
    defineField({
      name: 'do_not_track',
      type: 'boolean',
      group: 'cLayer',
      fieldset: 'cLayer',
    }),
    defineField({
      name: 'execlogServicePrice',
      group: 'references',
      fieldset: 'references',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: {type: 'execlogPrice'},
        },
      ],
    }),
    defineField({
      name: 'images',
      type: 'image',
    }),

    {
      name: 'metaSocial',
      title: 'Social Network',
      type: 'internationalizedArrayString',
      group: 'seo',
      fieldset: 'seo',
    },
    {
      name: 'metaTitle',
      title: 'SEO title',
      type: 'internationalizedArrayString',
      group: 'seo',
      fieldset: 'seo',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'internationalizedArrayString',
      group: 'seo',
      fieldset: 'seo',
    },

    {name: 'seoImage', title: 'SEO Image', type: 'image', group: ['seo'], fieldset: 'seo'},
  ],
})
