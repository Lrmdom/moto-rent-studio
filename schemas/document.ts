import {defineType, defineField} from 'sanity'

export const legalDocument = defineType({
  name: 'legalDocument',
  title: 'Documento Legal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Tipo de Documento',
      type: 'string',
      options: {
        list: [
          'Caderneta Predial',
          'Licença de Utilização',
          'Certidão Permanente',
          'Certificado Energético',
          'Ficha Técnica da Habitação',
          'CPCV',
          'Escritura / DPA',
          'Outro',
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Ficheiro',
      type: 'file',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'property',
      title: 'Imóvel Relacionado',
      type: 'reference',
      to: [{type: 'property'}],
    }),
    defineField({
      name: 'lead',
      title: 'Lead Relacionada',
      type: 'reference',
      to: [{type: 'lead'}],
    }),
  ],
})
