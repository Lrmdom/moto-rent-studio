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
import {vehicleModelAcessoriesGroupType} from './VehicleModelAcessoriesGroup'
import {routeType} from './route'
import {locationType} from './location'
import {vehicleModelType} from './vehicleModel'
import {vehiclePricePeriodType} from './vehiclePricePeriod'
import {vehicleListPricePeriodType} from './vehicleListPricePeriod'
import {VehicleGroupListOptionsType} from './VehicleGroupListOptions'
import {seasonDefinitionType} from './seasonDefinition'
import {assurancePackageType} from './assurancePackage'
import {exclusionDefinitionType} from './exclusionDefinition'
import {coverageDefinitionType} from './coverageDefinition'
import {termsAndConditionsType} from './termsAndConditions'
import {privacyPolicyType} from './privacyPolicy'
import {faqType, faqCategoryType} from './faq'

export const schemaTypes = [
  faqCategoryType,
  faqType,
  termsAndConditionsType,
  privacyPolicyType,
  assurancePackageType,
  exclusionDefinitionType,
  coverageDefinitionType,
  locationType,
  vehicleGroupType,
  vehicleGroupListType,
  VehicleGroupListOptionsType,
  vehicleGroupTypeType,
  vehicleModelType,
  vehicleType,
  vehiclePricePeriodType,
  vehicleListPricePeriodType,
  seasonDefinitionType,
  acessorieType,
  acessorieGroupType,
  vehicleModelAcessoriesGroupType,
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
