
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        { type: 'textComponent' },
        { type: 'richTextComponent' },
        { type: 'imageComponent' },
        { type: 'linkComponent' },
      ],
    }),
  ],
});