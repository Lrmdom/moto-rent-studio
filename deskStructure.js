// ./deskStructure.js

import {MdDirectionsCar} from 'react-icons/md'

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
      S.listItem()
        .title('TURFORTES')
        .icon(MdDirectionsCar)
        .child(
          S.list()
            .title('TURFORTES')
            .items([
              S.documentTypeListItem('vehicle').title('Vehicles'),
              S.documentTypeListItem('vehicleGroup').title('Vehicle Groups'),
              S.documentTypeListItem('vehicleGroupList').title('Vehicle Group Lists'),
              S.documentTypeListItem('vehicleModel').title('Vehicle Models'),
              S.listItem()
                .title('Experiences & Tours')
                .child(
                  S.list()
                    .title('Experiences & Tours')
                    .items([
                      S.documentTypeListItem('experience').title('Experiences'),
                      S.documentTypeListItem('tour').title('Tours'),
                    ])
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings', 'landingPage', 'vehicle', 'vehicleGroup', 'vehicleGroupList', 'vehicleModel', 'experience', 'tour'].includes(listItem.getId()))

    ])


