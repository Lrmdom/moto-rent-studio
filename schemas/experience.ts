import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experiência',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Experiência',
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
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Gastronomia e Vinhos', value: 'gastronomy' },
          { title: 'Aventura e Natureza', value: 'adventure' },
          { title: 'Cultura e História', value: 'culture' },
          { title: 'Bem-estar', value: 'wellness' },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Resumo',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo Detalhado',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'geoPoint',
      title: 'Coordenadas Geográficas',
      type: 'geopoint',
      description: 'Útil para mapas interativos (Leaflet / Mapbox).',
    }),
    defineField({
      name: 'durationHours',
      title: 'Duração (Horas)',
      type: 'number',
    }),
    defineField({
      name: 'pricePerPerson',
      title: 'Preço por Pessoa (€)',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
})