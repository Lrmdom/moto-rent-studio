import {defineField, defineType} from 'sanity'
import {BasketIcon} from '@sanity/icons'


export const attributeType = defineType({
    name: 'attributeType',
    title: 'Attribute',
    type: 'document',
    icon: BasketIcon,
    fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {
            name: 'title',
            title: 'Title',
            type: 'internationalizedArrayString',
        },
        {
            name:'visualization',
            title:'Vizualization',
            type: 'string',
            options: {
                list: [
                    {title: 'Button group', value: 'InputToggleButton'},
                    {title: 'Color group', value: 'InputToggleColor'},
                    {title: 'Dropdown list', value: 'Dropdown'},

                ],
            }
        }
    ],
});