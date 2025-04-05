import { SlGlobeAlt } from "react-icons/sl";
import { defineField, defineType } from "sanity";


export const catalog=defineType({
    name: "catalog",
    title: "Catalog",
    description: "A list of catalogs associated with some taxonomies",
    type: "document",
    icon: SlGlobeAlt,
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required().error("A name is required")
        }),
        defineField({
            name: "taxonomies",
            title: "Taxonomies",
            type: "array",
            validation: (rule) => rule.required().error("One or more taxonomies are required"),
            of: [
                {
                    type: "reference",
                    to: {
                        type: "taxonomy"
                    }
                }
            ]
        })
    ],

});