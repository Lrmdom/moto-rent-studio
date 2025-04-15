// ./src/defaultDocumentNode.ts

import { type DefaultDocumentNodeResolver } from 'sanity/structure'
import { Iframe } from 'sanity-plugin-iframe-pane'
import { type SanityDocument } from 'sanity'

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument) {

     return doc?.slug?.current
        ? `http://localhost:3333/${doc.slug.current}`
        : `${window.location.hostname}/${doc._id}` 
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
    // Only show preview pane on `movie` schema type documents
    switch (schemaType) {
        case `page`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc: SanityDocument) => getPreviewUrl(doc),
                    })
                    .title('Preview'),
            ])
        case `page2`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc: SanityDocument) => getPreviewUrl(doc),
                    })
                    .title('Preview'),
            ])
        case `taxon`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc: SanityDocument) => getPreviewUrl(doc),
                    })
                    .title('Preview'),
            ])
        case `execlogService`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc: SanityDocument) => getPreviewUrl(doc),
                    })
                    .title('Preview'),


            ])
        default:
            return S.document().views([S.view.form()])
    }
}