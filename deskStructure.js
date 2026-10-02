// ./deskStructure.js

import {MdDirectionsCar} from 'react-icons/md'

export const myStructure = (S) =>
  
  S.list()
    .title('Conteúdo')
    .items([
      S.listItem()
        .title('Frota e Tours')
        .icon(MdDirectionsCar)
        .child(
          S.list()
            .title('Frota e Tours')
            .items([
              S.documentTypeListItem('vehicle').title('Veículos'),
              S.documentTypeListItem('vehicleGroup').title('Grupos de Veículos'),
              S.documentTypeListItem('vehicleGroupList').title('Listas de Grupos de Veículos'),
              S.documentTypeListItem('vehicleModel').title('Modelos de Veículos'),
              S.listItem()
                .title('Experiências e Tours')
                .child(
                  S.list()
                    .title('Experiências e Tours')
                    .items([
                      S.documentTypeListItem('experience').title('Experiências'),
                      S.documentTypeListItem('experienceCategory').title('Categorias de Experiência'),
                      S.documentTypeListItem('tour').title('Tours'),
                    ])
                ),
            ])
        ),
      S.listItem()
        .title('Páginas')
        .child(
          S.list()
            .title('Páginas')
            .items([
              S.listItem()
                .title('Páginas de Aterragem')
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('landingPage')
                ),
              S.listItem()
                .title('Outras Páginas')
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('otherPages')
                )
            ])
        ),
      
      S.divider(),
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings', 'landingPage', 'vehicle', 'vehicleGroup', 'vehicleGroupList', 'vehicleModel', 'experience', 'tour'].includes(listItem.getId()))

    ])


