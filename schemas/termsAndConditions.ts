import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const termsAndConditionsType = defineType({
  name: 'termsAndConditions',
  title: 'Terms and Conditions',
  type: 'document',
  icon: DocumentIcon, // Ícone de documento para representar os termos
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'internationalizedArrayString',
      description:
        'Title of the Terms and Conditions document (e.g., "Termos e Condições", "Terms and Conditions").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'internationalizedArrayBlockContent', // Permite texto rico em múltiplos idiomas
      description: 'The full content of the Terms and Conditions document.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
      description:
        'The date and time this document was last updated. Useful for versioning and legal compliance.',
      initialValue: new Date().toISOString(), // Define a data atual como valor inicial
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.pt[0].value', // Usa o título em PT como base para o slug
        maxLength: 96,
      },
      description:
        'Unique URL slug for the Terms and Conditions page (e.g., "/termos-e-condicoes").',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.pt[0].value', // Mostra o título em PT no preview do estúdio
      lastUpdated: 'lastUpdated',
    },
    prepare(selection) {
      const {title, lastUpdated} = selection
      const date = lastUpdated ? new Date(lastUpdated).toLocaleDateString('pt-PT') : 'No date'
      return {
        title: title || 'Terms and Conditions',
        subtitle: `Last Updated: ${date}`,
      }
    },
  },
})
