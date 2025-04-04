import {defineType, defineArrayMember} from 'sanity'

export default defineType({
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
       /* defineArrayMember({
            title: 'Block',
            type: 'block',
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
           /!* styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'},
            ],*!/
            /!*lists: [{title: 'Bullet', value: 'bullet'}],*!/
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'},
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                ],
            },
        }),*/
        defineArrayMember({
                name: 'attribute',
                type: 'object',
                options: {
                    columns: 2,
                },
                fields: [
                    /*
                                        {name: 'name',title:'Attribute Name', type: 'reference', to: [{type: 'attributeType'}]},
                    */
                    {name: 'name', title: 'Attribute Name',type: 'string'},
                    {name: 'value', type: 'string', title: 'Attribute value'},
                    {
                        name: 'description',
                        title: 'Small Description',
                        type: 'string',
                    },
                    {name: 'visualPresentation', title: 'Visual Presentation', weak:true,type: 'reference', to: [{type: 'attributeType'}]},
                ],
                preview: {
                    select: {
                        name: "name",
                        value: "value",
                        description: "description"
                    },
                    prepare(selection) {
                        const {name, value, description} = selection;
                        const title = [name, value,description?description:""].filter(Boolean).join(" : : : ");
                        return {
                            title,
                        };
                    },
                }
            },
        ),


    ],
})
