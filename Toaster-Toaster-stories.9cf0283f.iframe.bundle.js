"use strict";(self.webpackChunkcommon_components=self.webpackChunkcommon_components||[]).push([[9167],{"./node_modules/@react-aria/button/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>$701a24aa0da5b062$export$ea18c227d4417cc3});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs");function $701a24aa0da5b062$export$ea18c227d4417cc3(props,ref){let additionalProps,{elementType="button",isDisabled,onPress,onPressStart,onPressEnd,onPressChange,preventFocusOnPress,allowFocusWhenDisabled,onClick:deprecatedOnClick,href,target,rel,type="button"}=props;additionalProps="button"===elementType?{type,disabled:isDisabled}:{role:"button",tabIndex:isDisabled?void 0:0,href:"a"===elementType&&isDisabled?void 0:href,target:"a"===elementType?target:void 0,type:"input"===elementType?type:void 0,disabled:"input"===elementType?isDisabled:void 0,"aria-disabled":isDisabled&&"input"!==elementType?isDisabled:void 0,rel:"a"===elementType?rel:void 0};let{pressProps,isPressed}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__.r7)({onPressStart,onPressEnd,onPressChange,onPress,isDisabled,preventFocusOnPress,ref}),{focusableProps}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__.kc)(props,ref);allowFocusWhenDisabled&&(focusableProps.tabIndex=isDisabled?-1:focusableProps.tabIndex);let buttonProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(focusableProps,pressProps,(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.zL)(props,{labelable:!0}));return{isPressed,buttonProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(additionalProps,buttonProps,{"aria-haspopup":props["aria-haspopup"],"aria-expanded":props["aria-expanded"],"aria-controls":props["aria-controls"],"aria-pressed":props["aria-pressed"],onClick:e=>{deprecatedOnClick&&(deprecatedOnClick(e),console.warn("onClick is deprecated, please use onPress"))}})}}},"./src/Components/Toaster/Toaster.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,Fixed:()=>Fixed,Info:()=>Info,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../epi-systems-frontend/node_modules/react/index.js");var _index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Components/Toaster/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Toaster",component:_index__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"]},Default={args:{..._index__WEBPACK_IMPORTED_MODULE_1__.Z.defaultProps,variant:"success",title:"Success",size:"medium",dismissible:!1,children:"You can access all the files in this folder.",position:"relative"}},Info={args:{variant:"info",title:"Info",children:"Anyone on the internet with this link can view."}},Warning={args:{variant:"warning",title:"Warning",children:"Viewers can see comments and suggestions"}},Error={args:{variant:"alert",title:"Error",children:"Sorry, you're not authorized to look at this page."}},Fixed={args:{variant:"info",children:"Your Toaster components are ready to demo",position:"fixed",dismissible:!1,timeout:3e3},parameters:{docs:{description:{story:"This toaster will appear at the top of the page and disappear on it's own after 2 seconds"}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Toaster.defaultProps,\n    variant: 'success',\n    title: 'Success',\n    size: 'medium',\n    dismissible: false,\n    children: `You can access all the files in this folder.`,\n    position: 'relative'\n  }\n}",...Default.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'info',\n    title: 'Info',\n    children: `Anyone on the internet with this link can view.`\n  }\n}",...Info.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'warning',\n    title: 'Warning',\n    children: `Viewers can see comments and suggestions`\n  }\n}",...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'alert',\n    title: 'Error',\n    children: `Sorry, you're not authorized to look at this page.`\n  }\n}",...Error.parameters?.docs?.source}}},Fixed.parameters={...Fixed.parameters,docs:{...Fixed.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'info',\n    children: `Your Toaster components are ready to demo`,\n    position: 'fixed',\n    dismissible: false,\n    timeout: 3000\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: \"This toaster will appear at the top of the page and disappear on it's own after 2 seconds\"\n      }\n    }\n  }\n}",...Fixed.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Info","Warning","Error","Fixed"]},"./src/Components/Toaster/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Components_Toaster});var react=__webpack_require__("../epi-systems-frontend/node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__("./src/Components/Button/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=(__webpack_require__("./src/styles/icons.scss"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Toaster/styles.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.Z,options);styles.Z&&styles.Z.locals&&styles.Z.locals;var jsx_runtime=__webpack_require__("../epi-systems-frontend/node_modules/react/jsx-runtime.js");const Toaster=({variant="success",size="medium",position="relative",align="center",dismissible=!0,timeout=0,className,...props})=>{const[isHidden,setIsHidden]=(0,react.useState)(!0);return(0,react.useEffect)((()=>{let timer=setTimeout((()=>{setIsHidden(!1)}),10);return()=>{setIsHidden(!0),clearTimeout(timer)}}),[]),(0,react.useEffect)((()=>{let timer;return 0!==timeout&&(timer=setTimeout((()=>{setIsHidden(!0)}),timeout)),()=>{setIsHidden(!1),clearTimeout(timer)}}),[timeout]),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(["CC-toaster",`CC-toaster--${position}`,`CC-toaster--${align}`,{"CC-toaster--hide":isHidden},className]),role:"alert","aria-live":"assertive","aria-atomic":"true",children:(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)(["CC-toaster__container",`CC-toaster--${size}`,`CC-toaster--${variant}`]),children:[(0,jsx_runtime.jsx)("i",{className:`fa fa-${variant}`,"aria-hidden":"true"}),props.title&&(0,jsx_runtime.jsx)("label",{className:"toaster__title",children:props.title}),(0,jsx_runtime.jsx)("p",{className:"CC-toaster__children",children:props.children}),(0,jsx_runtime.jsx)(Button.Z,{className:(0,clsx_m.Z)(["CC-toaster__button-close",{"CC-toaster__button-close--dismissible":dismissible}]),"aria-label":"close",onPress:()=>{setIsHidden(!0)},children:(0,jsx_runtime.jsx)("i",{className:"fa fa-close","aria-hidden":"true"})})]})})};Toaster.displayName="Toaster",Toaster.propTypes={variant:prop_types_default().oneOf(["success","info","warning","alert"]),size:prop_types_default().oneOf(["auto","small","medium","large","full"]),title:prop_types_default().string,children:prop_types_default().string,position:prop_types_default().oneOf(["relative","fixed"]),align:prop_types_default().oneOf(["left","center","right"]),timeout:prop_types_default().number,dismissible:prop_types_default().bool,className:prop_types_default().string},Toaster.defaultProps={variant:"success",title:"",size:"medium",dismissible:!0,position:"relative",align:"center",timeout:0},Toaster.__docgenInfo={description:"",methods:[],displayName:"Toaster",props:{variant:{defaultValue:{value:"'success'",computed:!1},description:"Toaster style?",type:{name:"enum",value:[{value:"'success'",computed:!1},{value:"'info'",computed:!1},{value:"'warning'",computed:!1},{value:"'alert'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'auto'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'full'",computed:!1}]},required:!1},position:{defaultValue:{value:"'relative'",computed:!1},description:"Set position fixed or relative to content",type:{name:"enum",value:[{value:"'relative'",computed:!1},{value:"'fixed'",computed:!1}]},required:!1},align:{defaultValue:{value:"'center'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'center'",computed:!1},{value:"'right'",computed:!1}]},required:!1},dismissible:{defaultValue:{value:"true",computed:!1},description:"Hide close button?",type:{name:"bool"},required:!1},timeout:{defaultValue:{value:"0",computed:!1},description:"Set Toaster hide effect timeout (in milliseconds)",type:{name:"number"},required:!1},title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const Components_Toaster=Toaster},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Toaster/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CC-toaster{display:grid;opacity:1;transform:translateY(0);transition:opacity .4s ease-out,transform .3s ease-out;pointer-events:none}.CC-toaster--hide{opacity:0;transform:translateY(-100%)}.CC-toaster__container{display:flex;column-gap:15px;align-items:center;padding:15px;color:#000;background:#fff;border-bottom-width:6px;border-bottom-style:solid;pointer-events:all}.CC-toaster__container>i{font-size:1.25em}.CC-toaster__title{font-family:Roboto,sans-serif;font-weight:400;max-width:30%;font-size:.875rem}.CC-toaster__children{font-family:Roboto,sans-serif;font-weight:300;font-size:.8125rem;flex-grow:1;max-height:calc(120px - 2em);margin:0;padding:0;overflow-x:hidden;overflow-y:auto}.CC-toaster__button-close{display:none;justify-content:center;color:#286fa8;background:rgba(0,0,0,0);border:none;font-size:1em;min-width:initial;padding:0}.CC-toaster__button-close:hover{cursor:pointer;color:#101168;background:rgba(0,0,0,0)}.CC-toaster__button-close--dismissible{display:inline-flex}.CC-toaster--fixed{position:fixed;top:0;left:0;right:0;z-index:10}.CC-toaster--relative{position:relative}.CC-toaster--left .CC-toaster__container{justify-self:left}.CC-toaster--center .CC-toaster__container{justify-self:center}.CC-toaster--right .CC-toaster__container{justify-self:right}.CC-toaster--auto{width:auto}.CC-toaster--small{width:40%}.CC-toaster--medium{width:60%}.CC-toaster--large{width:80%}.CC-toaster--full{width:100%}.CC-toaster--success{border-color:#039d12}.CC-toaster--success>i{color:#039d12}.CC-toaster--info{border-color:#286fa8}.CC-toaster--info>i{color:#286fa8}.CC-toaster--warning{border-color:#f1b33c}.CC-toaster--warning>i{color:#f1b33c}.CC-toaster--alert{border-color:#c7270f}.CC-toaster--alert>i{color:#c7270f}","",{version:3,sources:["webpack://./src/Components/Toaster/styles.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/mixins.scss"],names:[],mappings:"AAGA,YACE,YAAA,CACA,SAAA,CACA,uBAAA,CACA,sDAAA,CACA,mBAAA,CACA,kBACE,SAAA,CACA,2BAAA,CAEF,uBACE,YAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CACA,UCXU,CDYV,eCbU,CDcV,uBAAA,CACA,yBAAA,CACA,kBAAA,CACA,yBACE,gBAAA,CAGJ,mBEvBA,6BAAA,CACA,eAAA,CFwBE,aAAA,CACA,iBAAA,CAEF,sBEbA,6BAAA,CACA,eAAA,CFcE,kBAAA,CACA,WAAA,CACA,4BAAA,CACA,QAAA,CACA,SAAA,CACA,iBAAA,CACA,eAAA,CAEF,0BACE,YAAA,CACA,sBAAA,CACA,aCzBW,CD0BX,wBAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CACA,SAAA,CACA,gCACE,cAAA,CACA,aCnCS,CDoCT,wBAAA,CAEF,uCACE,mBAAA,CAIJ,mBACE,cAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,UAAA,CAEF,sBACE,iBAAA,CAGA,yCACE,iBAAA,CAIF,2CACE,mBAAA,CAIF,0CACE,kBAAA,CAKJ,kBACE,UAAA,CAEF,mBACE,SAAA,CAEF,oBACE,SAAA,CAEF,mBACE,SAAA,CAEF,kBACE,UAAA,CAIF,qBACE,oBClFU,CDmFV,uBACE,aCpFQ,CDuFZ,kBACE,oBC5FW,CD6FX,oBACE,aC9FS,CDiGb,qBACE,oBC7Fa,CD8Fb,uBACE,aC/FW,CDkGf,mBACE,oBCrGQ,CDsGR,qBACE,aCvGM",sourcesContent:["@use '../../styles/variables';\n@use '../../styles/mixins';\n\n.CC-toaster {\n  display: grid;\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.4s ease-out, transform 0.3s ease-out;\n  pointer-events: none;\n  &--hide {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  &__container {\n    display: flex;\n    column-gap: 15px;\n    align-items: center;\n    padding: 15px;\n    color: variables.$color-black;\n    background: variables.$color-white;\n    border-bottom-width: 6px;\n    border-bottom-style: solid;\n    pointer-events: all;\n    > i {\n      font-size: 1.25em;\n    }\n  }\n  &__title {\n    @include mixins.text-regular;\n    max-width: 30%;\n    font-size: 0.875rem;\n  }\n  &__children {\n    @include mixins.text-light;\n    font-size: 0.8125rem;\n    flex-grow: 1;\n    max-height: calc(120px - 2em);\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  &__button-close {\n    display: none;\n    justify-content: center;\n    color: variables.$color-blue-3;\n    background: transparent;\n    border: none;\n    font-size: 1em;\n    min-width: initial;\n    padding: 0;\n    &:hover {\n      cursor: pointer;\n      color: variables.$color-blue-1;\n      background: transparent;\n    }\n    &--dismissible {\n      display: inline-flex;\n    }\n  }\n\n  &--fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 10;\n  }\n  &--relative {\n    position: relative;\n  }\n  &--left {\n    .CC-toaster__container {\n      justify-self: left;\n    }\n  }\n  &--center {\n    .CC-toaster__container {\n      justify-self: center;\n    }\n  }\n  &--right {\n    .CC-toaster__container {\n      justify-self: right;\n    }\n  }\n\n  // display toaster width sizes\n  &--auto {\n    width: auto;\n  }\n  &--small {\n    width: 40%;\n  }\n  &--medium {\n    width: 60%;\n  }\n  &--large {\n    width: 80%;\n  }\n  &--full {\n    width: 100%;\n  }\n\n  // toaster notification color variants\n  &--success {\n    border-color: variables.$color-green;\n    > i {\n      color: variables.$color-green;\n    }\n  }\n  &--info {\n    border-color: variables.$color-blue-3;\n    > i {\n      color: variables.$color-blue-3;\n    }\n  }\n  &--warning {\n    border-color: variables.$color-yellow-1;\n    > i {\n      color: variables.$color-yellow-1;\n    }\n  }\n  &--alert {\n    border-color: variables.$color-red;\n    > i {\n      color: variables.$color-red;\n    }\n  }\n}\n","// ********************* PATHS *********************\n$path-img: '/src/assets/images/';\n\n// ********************* COLORS *********************\n// lowest = darkest hue\n\n$color-white: #ffffff;\n$color-black: #000000;\n\n// Grays\n$color-gray-1: #333333; // Standard text color & color for all disabled text\n$color-gray-2: #767676; // Lightest allowable text; input placeholder text and helper text.\n$color-gray-3: #c4c4c4; // Form borders\n$color-gray-4: #ebebeb; // Disabled elements backgrounds\n$color-gray-5: #f6f7fb; // Page background & table zebra stripes\n$color-gray-6: #e0e6f2; // Alternative lighter color.\n\n// Blues\n$color-blue-1: #101168; // Darkerst blue\n$color-blue-2: #215295; // medium blue\n$color-blue-3: #286fa8; // lighest blue for header, footer, most headers, buttons, and links in text.\n\n// Other colors\n$color-red: #c7270f; // color for warnings, errors, or message notifications\n$color-green: #039d12; // color for finished / affirmative messages\n$color-yellow-1: #f1b33c; // active/rollover buttons or highlight location\n$color-yellow-2: #f6f0ea; // Highlight for selected rows in tables (accounting & ERVs pages)\n$color-yellow-3: #fae0aa; // tooltip bg color\n\n// the BG used for all modal overlays and the like\n$color-bg-modal: rgba(0, 0, 0, 0.75);\n\n// color for 508 focus around elements\n$color-focus: pink; // undecided. TODO: pick a color\n\n$color-divider: rgba(255, 255, 255, 0.25); //the semi-translucent dividers used in header & footer\n\n// ********************* BOX SHADOWS *********************\n$box-shadow-color-focus: 0px 0px 5px $color-focus;\n\n// ********************* BORDER RADIUS *********************\n$border-radius: 4px;\n$border-radius-forms: 0px;\n\n// ********************* STANDARD MARGINS *********************\n\n$margin-horz-desktop: 32px;\n$margin-horz-phone: 12px;\n\n$margin-vert-desktop: 24px;\n$margin-vert-phone: 12px;\n\n// ********************* VIEWPORTS FOR MEDIA QUERIES *********************\n$phone-width: 480px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n$giant-desktop-width: 1600px;\n\n// ********************* FONTS *********************\n$text-thin: 'roboto-thin', Roboto, sans-serif;\n$text-light: 'roboto-light', Roboto, sans-serif;\n$text-regular: 'roboto-regular', Roboto, sans-serif;\n$text-medium: 'roboto-medium', Roboto, sans-serif;\n$text-bold: 'roboto-bold', Roboto, sans-serif;\n\n// ********************* FORM ELEMENTS *********************\n$height-form-elements: 22px;\n","@use './variables';\n// ************************* FONT FAMILIES *******************\n// done this way so that if fonts don't load the will still look somewhat okay\n@mixin text-regular {\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n}\n\n@mixin text-thin {\n  font-family: Roboto, sans-serif;\n  font-weight: 100;\n}\n\n@mixin text-medium {\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n}\n\n@mixin text-light {\n  font-family: Roboto, sans-serif;\n  font-weight: 300;\n}\n\n@mixin text-bold {\n  font-family: Roboto, sans-serif;\n  font-weight: 700;\n}\n\n@mixin text-no-results {\n  @include text-regular();\n  text-align: center;\n  font-size: 1.2rem;\n  color: variables.$color-gray-2;\n}\n\n@mixin fontawesome {\n  display: inline-block;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: auto;\n  font-style: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-variant: normal;\n  font-family: 'Font Awesome 5 Free', 'FontAwesome', sans-serif;\n  line-height: 1;\n}\n\n// use this to de-ellipsis overflow an element\n@mixin ut-word-wrap {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n}\n\n@mixin ut-nowrap {\n  white-space: nowrap;\n}\n\n@mixin zebra {\n  background: variables.$color-gray-5;\n}\n\n// ************************* MEDIA QUERIES *******************\n@mixin mq-phone {\n  @media (min-width: 0 ) and (max-width: #{variables.$phone-width}) {\n    @content;\n  }\n}\n\n@mixin mq-tablet {\n  @media (min-width: #{variables.$phone-width (+1)}) and (max-width: #{variables.$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin mq-phone-and-tablet {\n  @media (min-width: 0 ) and (max-width: #{variables.$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin mq-desktop {\n  @media (min-width: #{variables.$tablet-width + 1}) {\n    @content;\n  }\n}\n\n// ************************* UTILITY MIXINS *******************\n@mixin ut-only-sr {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);