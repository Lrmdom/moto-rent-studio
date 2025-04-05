import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const execlogCustomerNeed = defineType({
  name: 'execlogCustomerNeed',
  title: 'Execlog Customer need',
  type: 'document',
  icon: UserIcon,
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
      fieldset: 'cLayer',
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
      fieldset: 'cLayer',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'internationalizedArrayString',
      group: 'translations',
      fieldset: 'translations',
    }),
    defineField({
      name: 'image_url',
      type: 'url',
      group: 'cLayer',
      fieldset: 'cLayer',
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
      type: 'internationalizedArrayString',
      group: 'translations',
      fieldset: 'translations',
    }),
    defineField({
      name: 'description',
      type: 'text',
      group: 'cLayer',
      fieldset: 'cLayer',
    }),
    defineField({
      name: 'mobileDescription',
      type: 'text',
    }),
    defineField({
      name: 'do_not_ship',
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
      name: 'benefits',
      type: 'text',
    }),
    defineField({
      name: 'observations',
      type: 'text',
    }),

    defineField({
      name: 'images',
      type: 'image',
    }),

    defineField({
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
