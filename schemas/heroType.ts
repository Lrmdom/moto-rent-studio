// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'

export const heroType = defineType({
    name: 'hero',
    type: 'object',
    title: 'Hero',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            type: 'string',
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
    ],
})