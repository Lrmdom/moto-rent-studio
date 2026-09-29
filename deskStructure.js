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
        .title('Vehicles')
        .icon(MdDirectionsCar)
        .child(
          S.list()
            .title('Vehicles')
            .items([
              S.listItem().title('Vehicles').schemaType('vehicle').child(S.documentTypeList('vehicle')),
              S.listItem().title('Vehicle Groups').schemaType('vehicleGroup').child(S.documentTypeList('vehicleGroup')),
              S.listItem().title('Vehicle Group Lists').schemaType('vehicleGroupList').child(S.documentTypeList('vehicleGroupList')),
              S.listItem().title('Vehicle Models').schemaType('vehicleModel').child(S.documentTypeList('vehicleModel')),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings', 'landingPage', 'vehicle', 'vehicleGroup', 'vehicleGroupList', 'vehicleModel'].includes(listItem.getId()))

    ])


