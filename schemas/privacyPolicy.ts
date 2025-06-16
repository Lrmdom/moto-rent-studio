import {defineField, defineType} from 'sanity'
import {UnlockIcon} from '@sanity/icons'

export const privacyPolicyType = defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  icon: UnlockIcon, // Ícone de cadeado para privacidade
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'internationalizedArrayString',
      description:
        'Title of the Privacy Policy document (e.g., "Política de Privacidade", "Privacy Policy").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'internationalizedArrayBlockContent', // Permite texto rico em múltiplos idiomas
      description: 'The full content of the Privacy Policy document.',
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
        'The date and time this document was last updated. Crucial for legal compliance and transparency.',
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
        'Unique URL slug for the Privacy Policy page (e.g., "/politica-de-privacidade").',
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
        title: title || 'Privacy Policy',
        subtitle: `Last Updated: ${date}`,
      }
    },
  },
})
