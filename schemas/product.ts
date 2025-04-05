import {defineField, defineType} from 'sanity'
import {BasketIcon} from '@sanity/icons'


export const product = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: BasketIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'attributes',
            "title": 'Attributes',
            "type": 'internationalizedArrayBlockContent',
        },
       /* {
            title: 'Attributes',
            name: 'atributes',
            type: 'array',
            of: [
                {type: 'block'},
                {
                    name: 'attribute',
                    type: 'object',
                    fields: [
                        {name: 'name',type: 'reference', to: [{type: 'attributeType'}]},
                        {name: 'value', type: 'string', title: 'Attribute value'},
                    ]
                }
            ]
        },*/
        {
            name: 'title',
            title: 'Title',
            type: 'internationalizedArrayString',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'internationalizedArrayText',
        },
        {
            name: 'image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                defineField({
                    name: 'alt',
                    type: 'internationalizedArrayString',
                    title: 'Alternative text',
                }),
            ],
        },
        {
            name: 'variants',
            title: 'Variants',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'variant'}]}],
        },

    ],
});