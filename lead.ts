import { defineType, defineField } from 'sanity'

export const lead = defineType({
    name: 'lead',
    title: 'Lead',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome do Comprador',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email(),
        }),
        defineField({
            name: 'property',
            title: 'Imóvel',
            type: 'reference',
            to: [{ type: 'property' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'financialDocuments',
            title: 'Documentos Financeiros',
            type: 'array',
            of: [{ type: 'file' }],
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: ['Pendente', 'Validado', 'Rejeitado'],
            },
            initialValue: 'Pendente',
        }),
        defineField({
            name: 'signed',
            title: 'Assinado',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'signedAt',
            title: 'Data de Assinatura',
            type: 'datetime',
        }),
    ],
})
