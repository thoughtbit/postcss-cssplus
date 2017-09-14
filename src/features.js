/* eslint-disable max-len */
export default {
  /**
   * REMINDER:
   * ******************
   * order is important
   * ******************
   */

  // 导入
  //------------------------------------------------------------------

  // https://npmjs.com/package/postcss-import
  // import: (options) => require("postcss-import")(options),

  // https://npmjs.com/package/postcss-url
  // url: (options) => require("postcss-url")(options),

  // 下一代语法
  //------------------------------------------------------------------

  // https://npmjs.com/package/postcss-custom-properties
  customProperties: (options) => require("postcss-custom-properties")(options),

  // https://npmjs.com/package/postcss-apply
  applyRule: (options) => require("postcss-apply")(options),

  // https://npmjs.com/package/postcss-calc
  calc: (options) => require("postcss-calc")(options),

  // https://www.npmjs.com/package/postcss-image-set-polyfill
  imageSet: (options) => require("postcss-image-set-polyfill")(options),

  // https://npmjs.com/package/postcss-nesting
  nesting: (options) => require("postcss-nesting")(options),

  // https://npmjs.com/package/postcss-custom-media
  customMedia: (options) => require("postcss-custom-media")(options),

  // https://npmjs.com/package/postcss-media-minmax
  mediaQueriesRange: (options) => require("postcss-media-minmax")(options),

  // https://npmjs.com/package/postcss-custom-selectors
  customSelectors: (options) => require("postcss-custom-selectors")(options),

  // https://npmjs.com/package/postcss-attribute-case-insensitive
  attributeCaseInsensitive: (options) => require("postcss-attribute-case-insensitive")(options),

  // https://npmjs.com/package/postcss-color-rebeccapurple
  colorRebeccapurple: (options) => require("postcss-color-rebeccapurple")(options),

  // https://npmjs.com/package/postcss-color-hwb
  colorHwb: (options) => require("postcss-color-hwb")(options),

  // https://npmjs.com/package/postcss-color-hsl
  colorHsl: (options) => require("postcss-color-hsl")(options),

  // https://npmjs.com/package/postcss-color-rgb
  colorRgb: (options) => require("postcss-color-rgb")(options),

  // https://npmjs.com/package/postcss-color-gray
  colorGray: (options) => require("postcss-color-gray")(options),

  // https://npmjs.com/package/postcss-color-hex-alpha
  colorHexAlpha: (options) => require("postcss-color-hex-alpha")(options),

  // https://npmjs.com/package/postcss-color-function
  colorFunction: (options) => require("postcss-color-function")(options),

  // https://npmjs.com/package/postcss-font-family-system-ui
  fontFamilySystemUi: (options) => require("postcss-font-family-system-ui")(options),

  // https://npmjs.com/package/pleeease-filters
  filter: (options) => require("pleeease-filters")(options),

  // https://npmjs.com/package/postcss-initial
  initial: (options) => require("postcss-initial")(options),

  // https://npmjs.com/package/postcss-pseudoelements
  pseudoElements: (options) => require("postcss-pseudoelements")(options),

  // https://npmjs.com/package/postcss-selector-matches
  pseudoClassMatches: (options) => require("postcss-selector-matches")(options),

  // https://npmjs.com/package/postcss-selector-not
  pseudoClassNot: (options) => require("postcss-selector-not")(options),

  // https://npmjs.com/package/postcss-color-rgba-fallback
  colorRgba: (options) => require("postcss-color-rgba-fallback")(options),

  // https://www.npmjs.com/package/postcss-replace-overflow-wrap
  overflowWrap: (options) => require("postcss-replace-overflow-wrap")(options),

  // https://github.com/seaneking/postcss-fontpath
  // fontPath: (options) => require("postcss-fontpath")(options),

  // 类似sass语法
  //------------------------------------------------------------------

  // https://npmjs.com/package/postcss-mixins
  // mixins: (options) => require("postcss-mixins")(options),

  // 属性简写
  //------------------------------------------------------------------

  // https://github.com/seaneking/postcss-short
  // short: (options) => require("postcss-short")(options),

  // 工具类
  //------------------------------------------------------------------

  // https://npmjs.com/package/postcss-simple-reset
  // reset: (options) => require("postcss-simple-reset")(options),

  // https://npmjs.com/package/postcss-simple-utils
  // utils: (options) => require("postcss-simple-utils")(options),

  // px to rem
  //------------------------------------------------------------------

  // https://npmjs.com/package/pixrem
  rem: (options) => require("pixrem")(options),

  // 优化
  //------------------------------------------------------------------

  // https://npmjs.com/package/autoprefixer
  autoprefixer: (options) => require("autoprefixer")(options),
}
