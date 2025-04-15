// ./deskStructure.js

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Landing Pages')
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('landingPage')
                ),
              S.listItem()
                .title('Other Pages')
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('otherPages')
                )
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings'].includes(listItem.getId()))

    ])


