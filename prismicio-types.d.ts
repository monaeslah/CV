// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ExtraPageDocumentDataSlicesSlice = SamplesSlice | ErrorSlice;

/**
 * Content for extra_page documents
 */
interface ExtraPageDocumentData {
  /**
   * Slice Zone field in *extra_page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: extra_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ExtraPageDocumentDataSlicesSlice> /**
   * Meta Description field in *extra_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: extra_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *extra_page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: extra_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *extra_page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: extra_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * extra_page document from Prismic
 *
 * - **API ID**: `extra_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExtraPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExtraPageDocumentData>,
    "extra_page",
    Lang
  >;

type FooterDocumentDataSlicesSlice = FooterSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice> /**
   * Meta Description field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: footer.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: footer.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

type HeaderDocumentDataSlicesSlice = HeaderSlice;

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Slice Zone field in *Header*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: header.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HeaderDocumentDataSlicesSlice> /**
   * Meta Description field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: header.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: header.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HeaderDocumentData>, "header", Lang>;

type PageDocumentDataSlicesSlice =
  | PortfolioSlice
  | HobbiesSlice
  | EducationSlice
  | ExperienceSlice
  | IntroductionSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | ExtraPageDocument
  | FooterDocument
  | HeaderDocument
  | PageDocument;

/**
 * Primary content in *Education → Primary*
 */
export interface EducationSliceDefaultPrimary {
  /**
   * Title field in *Education → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Education → Items*
 */
export interface EducationSliceDefaultItem {
  /**
   * Title field in *Education → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Education → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.items[].date
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  date: prismic.KeyTextField;

  /**
   * Description field in *Education → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for Education Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EducationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EducationSliceDefaultPrimary>,
  Simplify<EducationSliceDefaultItem>
>;

/**
 * Slice variation for *Education*
 */
type EducationSliceVariation = EducationSliceDefault;

/**
 * Education Shared Slice
 *
 * - **API ID**: `education`
 * - **Description**: Education
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EducationSlice = prismic.SharedSlice<
  "education",
  EducationSliceVariation
>;

/**
 * Default variation for Error Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ErrorSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Error*
 */
type ErrorSliceVariation = ErrorSliceDefault;

/**
 * Error Shared Slice
 *
 * - **API ID**: `error`
 * - **Description**: Error
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ErrorSlice = prismic.SharedSlice<"error", ErrorSliceVariation>;

/**
 * Primary content in *Experience → Primary*
 */
export interface ExperienceSliceDefaultPrimary {
  /**
   * Title field in *Experience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Experience → Items*
 */
export interface ExperienceSliceDefaultItem {
  /**
   * Title field in *Experience → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Experience → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].date
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  date: prismic.KeyTextField;

  /**
   * Description field in *Experience → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for Experience Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExperienceSliceDefaultPrimary>,
  Simplify<ExperienceSliceDefaultItem>
>;

/**
 * Slice variation for *Experience*
 */
type ExperienceSliceVariation = ExperienceSliceDefault;

/**
 * Experience Shared Slice
 *
 * - **API ID**: `experience`
 * - **Description**: Experience
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSlice = prismic.SharedSlice<
  "experience",
  ExperienceSliceVariation
>;

/**
 * Primary content in *Footer → Primary*
 */
export interface FooterSliceDefaultPrimary {
  /**
   * Copy Right field in *Footer → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.copy_right
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copy_right: prismic.KeyTextField;

  /**
   * Title field in *Footer → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Full Name field in *Footer → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.full_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  full_name: prismic.KeyTextField;

  /**
   * Email field in *Footer → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Message field in *Footer → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.primary.message
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  message: prismic.KeyTextField;
}

/**
 * Primary content in *Footer → Items*
 */
export interface FooterSliceDefaultItem {
  /**
   * Link field in *Footer → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Icon field in *Footer → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterSliceDefaultPrimary>,
  Simplify<FooterSliceDefaultItem>
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Primary content in *Header → Primary*
 */
export interface HeaderSliceDefaultPrimary {
  /**
   * Logo field in *Header → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Responsive menu field in *Header → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.responsive_menu
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  responsive_menu: prismic.ImageField<never>;

  /**
   * Title field in *Header → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * close responsive field in *Header → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.close_responsive
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  close_responsive: prismic.ImageField<never>;
}

/**
 * Primary content in *Header → Items*
 */
export interface HeaderSliceDefaultItem {
  /**
   * Link field in *Header → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * type id field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].type_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type_id: prismic.KeyTextField;
}

/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  Simplify<HeaderSliceDefaultItem>
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;

/**
 * Primary content in *Hobbies → Primary*
 */
export interface HobbiesSliceDefaultPrimary {
  /**
   * Title field in *Hobbies → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hobbies.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Hobbies → Items*
 */
export interface HobbiesSliceDefaultItem {
  /**
   * Icon field in *Hobbies → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hobbies.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Title field in *Hobbies → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hobbies.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * label field in *Hobbies → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hobbies.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for Hobbies Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HobbiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HobbiesSliceDefaultPrimary>,
  Simplify<HobbiesSliceDefaultItem>
>;

/**
 * Slice variation for *Hobbies*
 */
type HobbiesSliceVariation = HobbiesSliceDefault;

/**
 * Hobbies Shared Slice
 *
 * - **API ID**: `hobbies`
 * - **Description**: Hobbies
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HobbiesSlice = prismic.SharedSlice<
  "hobbies",
  HobbiesSliceVariation
>;

/**
 * Primary content in *Introduction → Primary*
 */
export interface IntroductionSliceDefaultPrimary {
  /**
   * title field in *Introduction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * SubTitle field in *Introduction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Description field in *Introduction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Avatar field in *Introduction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: introduction.primary.avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Default variation for Introduction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroductionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Introduction*
 */
type IntroductionSliceVariation = IntroductionSliceDefault;

/**
 * Introduction Shared Slice
 *
 * - **API ID**: `introduction`
 * - **Description**: Introduction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroductionSlice = prismic.SharedSlice<
  "introduction",
  IntroductionSliceVariation
>;

/**
 * Primary content in *Portfolio → Primary*
 */
export interface PortfolioSliceDefaultPrimary {
  /**
   * Title field in *Portfolio → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * slice Type field in *Portfolio → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.primary.slice_type
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slice_type: prismic.KeyTextField;
}

/**
 * Primary content in *Portfolio → Items*
 */
export interface PortfolioSliceDefaultItem {
  /**
   * cover field in *Portfolio → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.items[].cover
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover: prismic.ImageField<never>;

  /**
   * Description field in *Portfolio → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * LinkTo field in *Portfolio → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: portfolio.items[].linkto
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkto: prismic.LinkField;
}

/**
 * Default variation for Portfolio Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PortfolioSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PortfolioSliceDefaultPrimary>,
  Simplify<PortfolioSliceDefaultItem>
>;

/**
 * Slice variation for *Portfolio*
 */
type PortfolioSliceVariation = PortfolioSliceDefault;

/**
 * Portfolio Shared Slice
 *
 * - **API ID**: `portfolio`
 * - **Description**: Portfolio
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PortfolioSlice = prismic.SharedSlice<
  "portfolio",
  PortfolioSliceVariation
>;

/**
 * Primary content in *Samples → Primary*
 */
export interface SamplesSliceDefaultPrimary {
  /**
   * Title field in *Samples → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: samples.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Samples → Items*
 */
export interface SamplesSliceDefaultItem {
  /**
   * Video field in *Samples → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: samples.items[].video
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video: prismic.EmbedField;

  /**
   * Image field in *Samples → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: samples.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *Samples → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: samples.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Samples Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SamplesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SamplesSliceDefaultPrimary>,
  Simplify<SamplesSliceDefaultItem>
>;

/**
 * Slice variation for *Samples*
 */
type SamplesSliceVariation = SamplesSliceDefault;

/**
 * Samples Shared Slice
 *
 * - **API ID**: `samples`
 * - **Description**: Samples
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SamplesSlice = prismic.SharedSlice<
  "samples",
  SamplesSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ExtraPageDocument,
      ExtraPageDocumentData,
      ExtraPageDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      EducationSlice,
      EducationSliceDefaultPrimary,
      EducationSliceDefaultItem,
      EducationSliceVariation,
      EducationSliceDefault,
      ErrorSlice,
      ErrorSliceVariation,
      ErrorSliceDefault,
      ExperienceSlice,
      ExperienceSliceDefaultPrimary,
      ExperienceSliceDefaultItem,
      ExperienceSliceVariation,
      ExperienceSliceDefault,
      FooterSlice,
      FooterSliceDefaultPrimary,
      FooterSliceDefaultItem,
      FooterSliceVariation,
      FooterSliceDefault,
      HeaderSlice,
      HeaderSliceDefaultPrimary,
      HeaderSliceDefaultItem,
      HeaderSliceVariation,
      HeaderSliceDefault,
      HobbiesSlice,
      HobbiesSliceDefaultPrimary,
      HobbiesSliceDefaultItem,
      HobbiesSliceVariation,
      HobbiesSliceDefault,
      IntroductionSlice,
      IntroductionSliceDefaultPrimary,
      IntroductionSliceVariation,
      IntroductionSliceDefault,
      PortfolioSlice,
      PortfolioSliceDefaultPrimary,
      PortfolioSliceDefaultItem,
      PortfolioSliceVariation,
      PortfolioSliceDefault,
      SamplesSlice,
      SamplesSliceDefaultPrimary,
      SamplesSliceDefaultItem,
      SamplesSliceVariation,
      SamplesSliceDefault,
    };
  }
}
