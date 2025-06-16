import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import { defineType, FieldDefinition } from 'sanity';
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {presentationTool, DocumentLocationResolver} from 'sanity/presentation'
import {Observable, map} from 'rxjs'

import {media, mediaAssetSource} from 'sanity-plugin-media'
//import {sanityCommerce, SanityCommercePluginConfig} from '@commercelayer/sanity-plugin-commerce'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {documentInternationalization} from '@sanity/document-internationalization'
import {defaultDocumentNode} from './src/defaultDocumentNode'
//import {myStructure} from './deskStructure'
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!
import {codeInput} from '@sanity/code-input'
import {hierarchicalDocumentList, hierarchyTree} from '@sanity/hierarchical-document-list'

import {cloudinaryAssetSourcePlugin} from 'sanity-plugin-cloudinary'
import {cloudinaryImageSource} from 'sanity-plugin-cloudinary'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'


const locate: DocumentLocationResolver = (params, context) => {
  const {documentStore} = context

  // if (params.type === 'post') {
  // Listen to the query and fetch the draft and published document
  const doc$ = documentStore.listenQuery(`*[_id == $id][0]{slug,title}`, params, {
    perspective: 'previewDrafts',
  }) as Observable<{
    slug: {current: string | null} | null
    title: string | null
  } | null>

  return doc$.pipe(
    map((doc) => {
      if (!doc || !doc.slug?.current) return null

      return {
        locations: [
          {
            title: doc.title || 'Untitled',
            href: `/post/${doc.slug.current}`,
          },
          {
            title: 'Posts',
            href: `/`,
          },
        ],
      }
    }),
  )
  // }

  return null
}
const SANITY_STUDIO_PREVIEW_URL = (
  process.env.SANITY_STUDIO_PREVIEW_URL
  || 'http://localhost:3333'
)
const SITE_URL = "http://localhost:5173"
// @ts-ignore
export default defineConfig({
  name: 'execlog',
  title: 'Execlog project',
  projectId,
  dataset,
  plugins: [
    cloudinarySchemaPlugin(),
    cloudinaryAssetSourcePlugin(),
    //sanityCommerce(sanityCommerceConfig),
    hierarchicalDocumentList(),
    structureTool({
      //structure: myStructure,
      defaultDocumentNode,
    }),
    media(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL,
        preview: "/",
        previewMode: {
          enable: "/api/preview-mode/enable",
          disable: "/api/preview-mode/disable",
        },
      },
    }),
    // presentationTool({
    //   /*previewUrl: {
    //     origin: SANITY_STUDIO_PREVIEW_URL,
    //     draftMode: {
    //       enable: '/api/draft',
    //     },*!/
    //   }}),*/
    //   previewUrl: SANITY_STUDIO_PREVIEW_URL,
    //   /*previewUrl: {
    //     origin: typeof location === 'undefined' ? SANITY_STUDIO_PREVIEW_URL : location.origin,
    //     draftMode: {
    //       enable: '/api/draft',
    //     },
    //   },
    //   locate,*/
    // }),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'pt', title: 'Português'},
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Español'},
      ],
      defaultLanguages: ['pt'],
      fieldTypes: ['string', 'blockContent','text'],
    }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'pt', title: 'Português'},
        {id: 'en', title: 'English'},
        {id: 'es', title: 'Español'},
      ],
      schemaTypes: ['page2', 'page', 'landingPage', 'post'],
    }),
    codeInput(),

  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources, context) => {
        if (context.currentUser?.roles.includes('cloudinaryAccess')) {
          // appends cloudinary as an asset source
          return [...previousAssetSources, cloudinaryImageSource]
        }
        if (context.currentUser?.roles.includes('onlyCloudinaryAccess')) {
          // only use clooudinary as an asset source
          return [cloudinaryImageSource]
        }
        // dont add cloudnary as an asset sources
        return previousAssetSources
      },
    },
  },
  schema: {
    types: schemaTypes,hierarchyTree,
  },
})
