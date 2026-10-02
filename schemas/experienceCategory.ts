import { defineField, defineType } from 'sanity'

export const experienceCategoryType = defineType({
  name: 'experienceCategory',
  title: 'Categoria de Experiência',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Categoria',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
