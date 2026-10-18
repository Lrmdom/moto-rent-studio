// schemas/documents/property.ts
import {defineType, defineField} from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Imóvel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Anúncio',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Preço',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'location',
      title: 'Localização (Coordenadas)',
      type: 'geopoint', // Requer plugin 'sanity-plugin-google-maps-input' ou similar
    }),
    defineField({
      name: 'images',
      title: 'Galeria',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenidades',
      type: 'array',
      of: [{type: 'string'}],
      options: {list: ['Garagem', 'Piscina', 'Varanda', 'Elevador']},
    }),
    defineField({
      name: 'legalDocuments',
      title: 'Documentos Legais',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'legalDocument' }] }],
    }),
    // ... outros campos (estado, descrição, etc.)
  ],
})
