import {companyType} from './company'
import {vehicleType} from './vehicle'
import {vehicleGroupType} from './vehicleGroup'
import {vehicleGroupTypeType} from './vehicleGroupType'
import blockContent from './blockContent'
import {vehicleGroupListType} from './vehicleGroupList'
import pageType from '../schemaTypes/pageType'
import {pageType2} from './pageType2'
import imageComponentType from '../schemaTypes/imageComponentType'
import linkComponentType from '../schemaTypes/linkComponentType'
import textComponentType from '../schemaTypes/textComponentType'
import richTextComponentType from '../schemaTypes/richTextComponentType'
import landingPageType from '../schemaTypes/landingPageType'
import {formType} from './formType'
import {heroType} from './heroType'
import {imageGalleryType} from './imageGalleryType'
import {textWithIllustrationType} from './textWithIllustrationType'
import {videoType} from './videoType'
import post from './post'
import {attributeType} from './attributeType'
import {promotionType} from './promotionType'
import {acessorieGroupType} from './acessorieGroup'
import {acessorieType} from './acessorie'
import {routeType} from './route'
import {locationType} from './location'
import {vehicleModelType} from './vehicleModel'
import {vehiclePricePeriodType} from './vehiclePricePeriod'
import {vehicleModelPricePeriodType} from './vehicleModelPricePeriod'

export const schemaTypes = [
  locationType,
  vehicleGroupType,
  vehicleGroupListType,
  vehicleGroupTypeType,
  vehicleModelType,
  vehicleType,
  vehiclePricePeriodType,
  vehicleModelPricePeriodType,
  acessorieType,
  acessorieGroupType,
  routeType,
  post,
  attributeType,
  promotionType,
  landingPageType,
  richTextComponentType,
  textComponentType,
  linkComponentType,
  imageComponentType,
  pageType2,
  pageType,
  textWithIllustrationType,
  videoType,
  blockContent,
  formType,
  heroType,
  imageGalleryType,
  companyType,
]
