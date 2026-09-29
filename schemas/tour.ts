import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Tour',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'duration',
      title: 'Duração',
      type: 'string',
      description: 'Ex: 3 dias / 2 noites, ou 4 horas',
    }),
    defineField({
      name: 'price',
      title: 'Preço Base (€)',
      type: 'number',
    }),
    defineField({
      name: 'location',
      title: 'Localização / Ponto de Partida',
      type: 'string',
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerário',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'dayTitle', title: 'Título do Dia / Passo', type: 'string' }),
            defineField({ name: 'description', title: 'Descrição', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'experiences',
      title: 'Experiências Incluídas',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'experience' }] }],
      description: 'Experiências pontuais que fazem parte deste tour.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'mainImage',
    },
  },
})