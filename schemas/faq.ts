import {defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'internationalizedArrayString',
      description: 'The FAQ question.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'internationalizedArrayBlockContent',
      description: 'The answer to the question.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question.pt[0].value',
        maxLength: 96,
      },
      description: 'Unique URL slug for this FAQ item.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category (Optional)',
      type: 'reference',
      to: [{type: 'faqCategory'}],
      description: 'Optional category for grouping FAQs.',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Optional order for displaying FAQs. Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      question: 'question.pt[0].value',
      category: 'category.title.pt[0].value',
    },
    prepare(selection) {
      const {question, category} = selection
      return {
        title: question || 'New FAQ',
        subtitle: category ? `Category: ${category}` : 'No Category',
      }
    },
  },
})

export const faqCategoryType = defineType({
  name: 'faqCategory',
  title: 'FAQ Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name (Internal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'internationalizedArrayBlockContent',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.pt[0].value',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
