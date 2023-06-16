"use strict";(self.webpackChunkcommon_components=self.webpackChunkcommon_components||[]).push([[9728],{"./src/Components/ListBox/ListBox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiSelect:()=>MultiSelect,Primary:()=>Primary,Sections:()=>Sections,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ListBox_stories});__webpack_require__("../epi-systems-frontend/node_modules/react/index.js");var ListBox=__webpack_require__("./src/Components/ListBox/index.js"),dist_import=__webpack_require__("./node_modules/@react-stately/collections/dist/import.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_stories=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/ListBox/styles.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_stories.Z,options);styles_stories.Z&&styles_stories.Z.locals&&styles_stories.Z.locals;var jsx_runtime=__webpack_require__("../epi-systems-frontend/node_modules/react/jsx-runtime.js");const ListBox_stories={title:"Example/ListBox",parameters:{docs:{description:{component:"A listbox displays a list of options and allows a user to select one or more of them."}}},component:ListBox.Z,tags:["autodocs"]},Template=args=>(0,jsx_runtime.jsx)(ListBox.Z,{label:args.label,items:args.items,selectionMode:args.selectionMode,children:item=>(0,jsx_runtime.jsx)(dist_import.ck,{children:item.name},item.id)});Template.displayName="Template";const Primary=Template.bind();Primary.args={label:"Animals",selectionMode:"single",items:[{id:1,name:"Aardvark"},{id:2,name:"Cat"},{id:3,name:"Dog"},{id:4,name:"Kangaroo"},{id:5,name:"Koala"},{id:6,name:"Penguin"},{id:7,name:"Snake"},{id:8,name:"Turtle"},{id:9,name:"Wombat"}]};const Template2=args=>(0,jsx_runtime.jsx)(ListBox.Z,{label:args.label,items:args.items,selectionMode:args.selectionMode,children:item=>(0,jsx_runtime.jsx)(dist_import.$0,{items:item.children,title:item.name,children:item=>(0,jsx_runtime.jsx)(dist_import.ck,{children:item.name})},item.name)});Template2.displayName="Template2";const Sections=Template2.bind();Sections.args={label:"Animals",selectionMode:"single",items:[{name:"Australian",children:[{id:2,name:"Koala"},{id:3,name:"Kangaroo"},{id:4,name:"Platypus"}]},{name:"American",children:[{id:6,name:"Bald Eagle"},{id:7,name:"Bison"},{id:8,name:"Skunk"}]}]};const Template3=args=>(0,jsx_runtime.jsxs)(ListBox.Z,{label:args.label,className:args.className,selectionMode:args.selectionMode,selectionBehavior:args.selectionBehavior,defaultSelectedKeys:args.selectedKeys,children:[(0,jsx_runtime.jsx)(dist_import.ck,{children:"Lettuce"},"lettuce"),(0,jsx_runtime.jsx)(dist_import.ck,{children:"Tomato"},"tomato"),(0,jsx_runtime.jsx)(dist_import.ck,{children:"Cheese"},"cheese"),(0,jsx_runtime.jsx)(dist_import.ck,{children:"Tuna Salad"},"tuna"),(0,jsx_runtime.jsx)(dist_import.ck,{children:"Egg Salad"},"egg"),(0,jsx_runtime.jsx)(dist_import.ck,{children:"Ham"},"ham"),(0,jsx_runtime.jsx)(dist_import.ck,{children:"Bacon"},"bacon"),(0,jsx_runtime.jsx)(dist_import.ck,{children:"Mustard"},"mustard"),(0,jsx_runtime.jsx)(dist_import.ck,{children:"Mayo"},"mayo")]});Template3.displayName="Template3";const MultiSelect=Template3.bind();MultiSelect.args={label:"Choose sandwich contents",className:"customStyle",selectionMode:"multiple",selectionBehavior:"replace",selectedKeys:["lettuce","tomato","bacon"]},MultiSelect.parameters={docs:{description:{story:"To select multiple rows, modifier keys such as `Ctrl`, `Cmd`, and `Shift` can be used. On touch screen devices, selection always behaves as toggle since modifier keys may not be available."}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => {\n  return <ListBox label={args.label} items={args.items} selectionMode={args.selectionMode}>\n      {item => <Item key={item.id}>{item.name}</Item>}\n    </ListBox>;\n}",...Primary.parameters?.docs?.source}}},Sections.parameters={...Sections.parameters,docs:{...Sections.parameters?.docs,source:{originalSource:"args => {\n  return <ListBox label={args.label} items={args.items} selectionMode={args.selectionMode}>\n      {item => <Section key={item.name} items={item.children} title={item.name}>\n          {item => <Item>{item.name}</Item>}\n        </Section>}\n    </ListBox>;\n}",...Sections.parameters?.docs?.source}}},MultiSelect.parameters={...MultiSelect.parameters,docs:{...MultiSelect.parameters?.docs,source:{originalSource:"args => {\n  return <ListBox label={args.label} className={args.className} selectionMode={args.selectionMode} selectionBehavior={args.selectionBehavior} defaultSelectedKeys={args.selectedKeys}>\n      <Item key='lettuce'>Lettuce</Item>\n      <Item key='tomato'>Tomato</Item>\n      <Item key='cheese'>Cheese</Item>\n      <Item key='tuna'>Tuna Salad</Item>\n      <Item key='egg'>Egg Salad</Item>\n      <Item key='ham'>Ham</Item>\n      <Item key='bacon'>Bacon</Item>\n      <Item key='mustard'>Mustard</Item>\n      <Item key='mayo'>Mayo</Item>\n    </ListBox>;\n}",...MultiSelect.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Sections","MultiSelect"]},"./src/Components/ListBox/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Components_ListBox});var react=__webpack_require__("../epi-systems-frontend/node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),dist_import=__webpack_require__("./node_modules/@react-aria/listbox/dist/import.mjs"),separator_dist_import=__webpack_require__("./node_modules/@react-aria/separator/dist/import.mjs"),list_dist_import=__webpack_require__("./node_modules/@react-stately/list/dist/import.mjs"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=(__webpack_require__("./src/styles/inputs.scss"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/ListBox/styles.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.Z,options);styles.Z&&styles.Z.locals&&styles.Z.locals;var jsx_runtime=__webpack_require__("../epi-systems-frontend/node_modules/react/jsx-runtime.js");const ListBox=props=>{const ref=(0,react.useRef)(),listBoxState=(0,list_dist_import.n_)(props),{listBoxRef=ref,state=listBoxState}=props,{listBoxProps,labelProps}=(0,dist_import.co)(props,state,listBoxRef);return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)(["CC-listBox",props.className]),children:[props.label&&(0,jsx_runtime.jsx)("div",{className:"CC-listBox__label",...labelProps,children:props.label}),(0,jsx_runtime.jsx)("ul",{...listBoxProps,ref:listBoxRef,className:"CC-listBox__list",children:[...state.collection].map((item=>"section"===item.type?(0,jsx_runtime.jsx)(ListBoxSection,{section:item,state},item.key):(0,jsx_runtime.jsx)(Option,{item,state},item.key)))})]})};ListBox.displayName="ListBox",ListBox.propTypes={label:prop_types_default().string,selectionMode:prop_types_default().oneOf(["single","multiple"]),items:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().number,name:prop_types_default().string})),className:prop_types_default().string},ListBox.defaultProps={label:null,selectionMode:"single"};const Option=({className,item,state})=>{const ref=(0,react.useRef)(),{optionProps,isSelected,isFocused,isDisabled}=(0,dist_import.Fv)({key:item.key},state,ref);return(0,jsx_runtime.jsx)("li",{...optionProps,ref,className:(0,clsx_m.Z)([className,"CC-listBox__item",{"CC-listBox__items--selected":isSelected},{"CC-listBox__items--focused":isFocused},{"CC-listBox__items--disabled":isDisabled}]),children:item.rendered})};Option.displayName="Option";const ListBoxSection=({section,state})=>{const{itemProps,headingProps,groupProps}=(0,dist_import.TV)({heading:section.rendered,"aria-label":section["aria-label"]}),{separatorProps}=(0,separator_dist_import.z)({elementType:"li"});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[section.key!==state.collection.getFirstKey()&&(0,jsx_runtime.jsx)("li",{...separatorProps,className:"CC-listBox--separator"}),(0,jsx_runtime.jsxs)("li",{...itemProps,children:[section.rendered&&(0,jsx_runtime.jsx)("span",{...headingProps,className:"CC-listBox--sectionTitle",children:section.rendered}),(0,jsx_runtime.jsx)("ul",{...groupProps,className:"CC-listBox--section",children:[...section.childNodes].map((node=>(0,jsx_runtime.jsx)(Option,{item:node,state},node.key)))})]})]})};ListBox.__docgenInfo={description:"",methods:[],displayName:"ListBox",props:{label:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},selectionMode:{defaultValue:{value:"'single'",computed:!1},description:"",type:{name:"enum",value:[{value:"'single'",computed:!1},{value:"'multiple'",computed:!1}]},required:!1},items:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"number",required:!1},name:{name:"string",required:!1}}}},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const Components_ListBox=ListBox},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/ListBox/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.CC-listBox{display:inline-block}.CC-listBox ul{overflow:auto;list-style:none;padding:0;margin:0;width:175px;border:1px solid #c4c4c4}.CC-listBox ul ul{border:none}.CC-listBox__items{cursor:pointer;font-family:Roboto,sans-serif;font-weight:400;font-size:.8rem;padding:2px 5px;color:#333;background-color:#fff}.CC-listBox__items:hover{color:#fff;background:#286fa8}.CC-listBox__items--selected,.CC-listBox__items--focused{color:#fff;background-color:#286fa8}.CC-listBox__items--disabled{cursor:not-allowed;pointer-events:none;color:#333;background:#ebebeb}.CC-listBox--separator{border-top:"1px solid gray";margin:"2px 5px"}.CC-listBox--section{padding:0;list-style:"none"}.CC-listBox--sectionTitle{font-weight:"bold";font-size:"1.1em";padding:"2px 5px"}',"",{version:3,sources:["webpack://./src/Components/ListBox/styles.scss","webpack://./src/styles/mixins.scss","webpack://./src/styles/variables.scss"],names:[],mappings:"AAGA,YACE,oBAAA,CACA,eACE,aAAA,CACA,eAAA,CACA,SAAA,CACA,QAAA,CACA,WAAA,CACA,wBAAA,CACA,kBACE,WAAA,CAGJ,mBACE,cAAA,CCbF,6BAAA,CACA,eAAA,CDcE,eAAA,CACA,eAAA,CACA,UEXW,CFYX,qBEhBU,CFiBV,yBACE,UElBQ,CFmBR,kBELS,CFOX,yDAEE,UEvBQ,CFwBR,wBEVS,CFYX,6BACE,kBAAA,CACA,mBAAA,CACA,UEzBS,CF0BT,kBEvBS,CF0Bb,uBACE,2BAAA,CACA,gBAAA,CAEF,qBACE,SAAA,CACA,iBAAA,CAEF,0BACE,kBAAA,CACA,iBAAA,CACA,iBAAA",sourcesContent:["@use '../../styles/variables';\n@use '../../styles/mixins';\n\n.CC-listBox {\n  display: inline-block;\n  ul {\n    overflow: auto;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    width: 175px;\n    border: 1px solid variables.$color-gray-3;\n    ul {\n      border: none;\n    }\n  }\n  &__items {\n    cursor: pointer;\n    @include mixins.text-regular();\n    font-size: 0.8rem;\n    padding: 2px 5px;\n    color: variables.$color-gray-1;\n    background-color: variables.$color-white;\n    &:hover {\n      color: variables.$color-white;\n      background: variables.$color-blue-3;\n    }\n    &--selected,\n    &--focused {\n      color: variables.$color-white;\n      background-color: variables.$color-blue-3;\n    }\n    &--disabled {\n      cursor: not-allowed;\n      pointer-events: none;\n      color: variables.$color-gray-1;\n      background: variables.$color-gray-4;\n    }\n  }\n  &--separator {\n    border-top: '1px solid gray';\n    margin: '2px 5px';\n  }\n  &--section {\n    padding: 0;\n    list-style: 'none';\n  }\n  &--sectionTitle {\n    font-weight: 'bold';\n    font-size: '1.1em';\n    padding: '2px 5px';\n  }\n}\n","@use './variables';\n// ************************* FONT FAMILIES *******************\n// done this way so that if fonts don't load the will still look somewhat okay\n@mixin text-regular {\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n}\n\n@mixin text-thin {\n  font-family: Roboto, sans-serif;\n  font-weight: 100;\n}\n\n@mixin text-medium {\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n}\n\n@mixin text-light {\n  font-family: Roboto, sans-serif;\n  font-weight: 300;\n}\n\n@mixin text-bold {\n  font-family: Roboto, sans-serif;\n  font-weight: 700;\n}\n\n@mixin text-no-results {\n  @include text-regular();\n  text-align: center;\n  font-size: 1.2rem;\n  color: variables.$color-gray-2;\n}\n\n@mixin fontawesome {\n  display: inline-block;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: auto;\n  font-style: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-variant: normal;\n  font-family: 'Font Awesome 5 Free', 'FontAwesome', sans-serif;\n  line-height: 1;\n}\n\n// use this to de-ellipsis overflow an element\n@mixin ut-word-wrap {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n}\n\n@mixin ut-nowrap {\n  white-space: nowrap;\n}\n\n@mixin zebra {\n  background: variables.$color-gray-5;\n}\n\n// ************************* MEDIA QUERIES *******************\n@mixin mq-phone {\n  @media (min-width: 0 ) and (max-width: #{variables.$phone-width}) {\n    @content;\n  }\n}\n\n@mixin mq-tablet {\n  @media (min-width: #{variables.$phone-width (+1)}) and (max-width: #{variables.$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin mq-phone-and-tablet {\n  @media (min-width: 0 ) and (max-width: #{variables.$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin mq-desktop {\n  @media (min-width: #{variables.$tablet-width + 1}) {\n    @content;\n  }\n}\n\n// ************************* UTILITY MIXINS *******************\n@mixin ut-only-sr {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n","// ********************* PATHS *********************\n$path-img: '/src/assets/images/';\n\n// ********************* COLORS *********************\n// lowest = darkest hue\n\n$color-white: #ffffff;\n$color-black: #000000;\n\n// Grays\n$color-gray-1: #333333; // Standard text color & color for all disabled text\n$color-gray-2: #767676; // Lightest allowable text; input placeholder text and helper text.\n$color-gray-3: #c4c4c4; // Form borders\n$color-gray-4: #ebebeb; // Disabled elements backgrounds\n$color-gray-5: #f6f7fb; // Page background & table zebra stripes\n$color-gray-6: #e0e6f2; // Alternative lighter color.\n\n// Blues\n$color-blue-1: #101168; // Darkerst blue\n$color-blue-2: #215295; // medium blue\n$color-blue-3: #286fa8; // lighest blue for header, footer, most headers, buttons, and links in text.\n\n// Other colors\n$color-red: #c7270f; // color for warnings, errors, or message notifications\n$color-green: #039d12; // color for finished / affirmative messages\n$color-yellow-1: #f1b33c; // active/rollover buttons or highlight location\n$color-yellow-2: #f6f0ea; // Highlight for selected rows in tables (accounting & ERVs pages)\n$color-yellow-3: #fae0aa; // tooltip bg color\n\n// the BG used for all modal overlays and the like\n$color-bg-modal: rgba(0, 0, 0, 0.75);\n\n// color for 508 focus around elements\n$color-focus: pink; // undecided. TODO: pick a color\n\n$color-divider: rgba(255, 255, 255, 0.25); //the semi-translucent dividers used in header & footer\n\n// ********************* BOX SHADOWS *********************\n$box-shadow-color-focus: 0px 0px 5px $color-focus;\n\n// ********************* BORDER RADIUS *********************\n$border-radius: 4px;\n$border-radius-forms: 0px;\n\n// ********************* STANDARD MARGINS *********************\n\n$margin-horz-desktop: 32px;\n$margin-horz-phone: 12px;\n\n$margin-vert-desktop: 24px;\n$margin-vert-phone: 12px;\n\n// ********************* VIEWPORTS FOR MEDIA QUERIES *********************\n$phone-width: 480px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n$giant-desktop-width: 1600px;\n\n// ********************* FONTS *********************\n$text-thin: 'roboto-thin', Roboto, sans-serif;\n$text-light: 'roboto-light', Roboto, sans-serif;\n$text-regular: 'roboto-regular', Roboto, sans-serif;\n$text-medium: 'roboto-medium', Roboto, sans-serif;\n$text-bold: 'roboto-bold', Roboto, sans-serif;\n\n// ********************* FORM ELEMENTS *********************\n$height-form-elements: 22px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/ListBox/styles.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.customStyle{padding:20px;border:1px solid #8a2be2;border-radius:10px}.customStyle .listBox__label{font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif}.customStyle ul{padding:0px;margin:5px 0px;list-style:none;border:1px solid gray;max-width:250px;max-height:300px;overflow:auto}.customStyle li{padding:2px 5px;outline:none}.customStyle li:hover{color:#fff;background:#a274cc}.customStyle li[aria-selected=true]{background:#8a2be2;color:#fff}.listBox--sectionTitle{display:block;text-align:center;padding:3px;background:#eee}',"",{version:3,sources:["webpack://./src/Components/ListBox/styles.stories.scss"],names:[],mappings:"AAAA,aACE,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,6BACE,wEAAA,CAEF,gBACE,WAAA,CACA,cAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CACA,gBAAA,CACA,aAAA,CAGF,gBACE,eAAA,CACA,YAAA,CACA,sBACE,UAAA,CACA,kBAAA,CAIJ,oCACE,kBAAA,CACA,UAAA,CAIJ,uBACE,aAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA",sourcesContent:[".customStyle {\n  padding: 20px;\n  border: 1px solid blueviolet;\n  border-radius: 10px;\n  .listBox__label {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  }\n  ul {\n    padding: 0px;\n    margin: 5px 0px;\n    list-style: none;\n    border: 1px solid gray;\n    max-width: 250px;\n    max-height: 300px;\n    overflow: auto;\n  }\n\n  li {\n    padding: 2px 5px;\n    outline: none;\n    &:hover {\n      color: white;\n      background: lighten(desaturate(blueviolet, 30%), 10%);\n    }\n  }\n\n  li[aria-selected='true'] {\n    background: blueviolet;\n    color: white;\n  }\n}\n\n.listBox--sectionTitle {\n  display: block;\n  text-align: center;\n  padding: 3px;\n  background: #eee;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/inputs.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"::-webkit-input-placeholder,::-moz-placeholder,:-ms-input-placeholder,input:-moz-placeholder,::placeholder{color:#767676;font-family:Roboto,sans-serif;font-weight:500}:-ms-input-placeholder{color:#767676 !important}.CC-select-button{background:#fff}.CC-input{font-family:Roboto,sans-serif;font-weight:400;border:1px solid #c4c4c4;border-radius:0px;font-size:13px;padding:2px 4px;align-self:center}.CC-input:focus{border-radius:0px;outline-color:#f1b33c}.CC-input--textarea{width:100%;height:100px;resize:none}.CC-input--radio{display:flex}@media(min-width: 0)and (max-width: 480px){.CC-input--radio{flex-direction:column}}.CC-input--radio-row{flex-direction:row;align-items:center}@media(min-width: 0)and (max-width: 480px){.CC-input--radio-row{flex-direction:column;align-items:start}}.CC-input--radio-column{flex-direction:column;align-items:start}.CC-input--small{width:40px}.CC-input--medium{width:95px}.CC-input--large{width:174px}.CC-input--xlarge{width:280px}.CC-input--full{width:100%}.CC-indent-tiny{margin-left:20px}.CC-indent-small{margin-left:50px}.CC-indent-medium{margin-left:80px}.CC-indent-large{margin-left:115px}.CC-indent-xlarge{margin-left:160px}.CC-input-error-message{border-bottom:5px solid rgba(0,0,0,0);color:#c7270f;font-size:.75rem;font-family:Roboto,sans-serif;font-weight:400;text-align:end;display:block}.CC-input-error-message--checkbox{outline:#c7270f}.CC-input-error{border:1px solid #c7270f}.CC-input-error[type=checkbox]{box-shadow:0 0 0 1px #c7270f}.CC-input-wrapper{display:flex;flex-direction:column;margin-bottom:6px}.CC-input-wrapper--full>div{width:100%}.CC-input-align-right{align-items:flex-end}.CC-input-align-left{align-items:flex-start}.CC-input-align-center{align-items:center}.CC-label{display:inline-block;margin-right:5px;text-align:right;padding:3px 0}@media(min-width: 0)and (max-width: 480px){.CC-label{text-align:left;font-family:Roboto,sans-serif;font-weight:400}}","",{version:3,sources:["webpack://./src/styles/inputs.scss","webpack://./src/styles/variables.scss","webpack://./src/styles/mixins.scss"],names:[],mappings:"AAGA,2GAKE,aCGa,CCGb,6BAAA,CACA,eAAA,CFJF,uBACE,wBAAA,CAGF,kBACE,eCVY,CDad,UEfE,6BAAA,CACA,eAAA,CFgBA,wBAAA,CACA,iBCoBoB,CDnBpB,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBACE,iBCekB,CDdlB,qBCHa,CDKf,oBACE,UAAA,CACA,YAAA,CACA,WAAA,CAEF,iBACE,YAAA,CE6BF,2CF9BA,iBAGI,qBAAA,CAAA,CAEF,qBACE,kBAAA,CACA,kBAAA,CEuBJ,2CFzBE,qBAII,qBAAA,CACA,iBAAA,CAAA,CAGJ,wBACE,qBAAA,CACA,iBAAA,CAGJ,iBACE,UAAA,CAEF,kBACE,UAAA,CAEF,iBACE,WAAA,CAEF,kBACE,WAAA,CAEF,gBACE,UAAA,CAIJ,gBACE,gBAAA,CAEF,iBACE,gBAAA,CAEF,kBACE,gBAAA,CAEF,iBACE,iBAAA,CAEF,kBACE,iBAAA,CAGF,wBACE,qCAAA,CACA,aCjEU,CDkEV,gBAAA,CErFA,6BAAA,CACA,eAAA,CFsFA,cAAA,CACA,aAAA,CACA,kCACE,eCvEQ,CD2EZ,gBACE,wBAAA,CACA,+BACE,4BAAA,CAIJ,kBACE,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,4BACE,UAAA,CAIJ,sBACE,oBAAA,CAEF,qBACE,sBAAA,CAEF,uBACE,kBAAA,CAGF,UACE,oBAAA,CACA,gBAAA,CACA,gBAAA,CACA,aAAA,CE/DA,2CF2DF,UAMI,eAAA,CE9HF,6BAAA,CACA,eAAA,CAAA",sourcesContent:["@use './variables';\n@use './mixins';\n\n::-webkit-input-placeholder,\n::-moz-placeholder,\n:-ms-input-placeholder,\ninput:-moz-placeholder,\n::placeholder {\n  color: variables.$color-gray-2;\n  @include mixins.text-medium;\n}\n:-ms-input-placeholder {\n  color: variables.$color-gray-2 !important;\n}\n\n.CC-select-button {\n  background: variables.$color-white;\n}\n\n.CC-input {\n  @include mixins.text-regular;\n  border: 1px solid variables.$color-gray-3;\n  border-radius: variables.$border-radius-forms;\n  font-size: 13px;\n  padding: 2px 4px;\n  align-self: center;\n  &:focus {\n    border-radius: variables.$border-radius-forms;\n    outline-color: variables.$color-yellow-1;\n  }\n  &--textarea {\n    width: 100%;\n    height: 100px;\n    resize: none;\n  }\n  &--radio {\n    display: flex;\n    @include mixins.mq-phone {\n      flex-direction: column;\n    }\n    &-row {\n      flex-direction: row;\n      align-items: center;\n      @include mixins.mq-phone {\n        flex-direction: column;\n        align-items: start;\n      }\n    }\n    &-column {\n      flex-direction: column;\n      align-items: start;\n    }\n  }\n  &--small {\n    width: 40px;\n  }\n  &--medium {\n    width: 95px;\n  }\n  &--large {\n    width: 174px;\n  }\n  &--xlarge {\n    width: 280px;\n  }\n  &--full {\n    width: 100%;\n  }\n}\n\n.CC-indent-tiny {\n  margin-left: 20px;\n}\n.CC-indent-small {\n  margin-left: 50px;\n}\n.CC-indent-medium {\n  margin-left: 80px;\n}\n.CC-indent-large {\n  margin-left: 115px;\n}\n.CC-indent-xlarge {\n  margin-left: 160px;\n}\n\n.CC-input-error-message {\n  border-bottom: 5px solid transparent;\n  color: variables.$color-red;\n  font-size: 0.75rem;\n  @include mixins.text-regular;\n  text-align: end;\n  display: block;\n  &--checkbox {\n    outline: variables.$color-red;\n  }\n}\n\n.CC-input-error {\n  border: 1px solid variables.$color-red;\n  &[type='checkbox'] {\n    box-shadow: 0 0 0 1px variables.$color-red;\n  }\n}\n\n.CC-input-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 6px;\n  &--full > div {\n    width: 100%;\n  }\n}\n\n.CC-input-align-right {\n  align-items: flex-end;\n}\n.CC-input-align-left {\n  align-items: flex-start;\n}\n.CC-input-align-center {\n  align-items: center;\n}\n\n.CC-label {\n  display: inline-block;\n  margin-right: 5px;\n  text-align: right;\n  padding: 3px 0;\n  @include mixins.mq-phone {\n    text-align: left;\n    @include mixins.text-regular;\n  }\n}\n","// ********************* PATHS *********************\n$path-img: '/src/assets/images/';\n\n// ********************* COLORS *********************\n// lowest = darkest hue\n\n$color-white: #ffffff;\n$color-black: #000000;\n\n// Grays\n$color-gray-1: #333333; // Standard text color & color for all disabled text\n$color-gray-2: #767676; // Lightest allowable text; input placeholder text and helper text.\n$color-gray-3: #c4c4c4; // Form borders\n$color-gray-4: #ebebeb; // Disabled elements backgrounds\n$color-gray-5: #f6f7fb; // Page background & table zebra stripes\n$color-gray-6: #e0e6f2; // Alternative lighter color.\n\n// Blues\n$color-blue-1: #101168; // Darkerst blue\n$color-blue-2: #215295; // medium blue\n$color-blue-3: #286fa8; // lighest blue for header, footer, most headers, buttons, and links in text.\n\n// Other colors\n$color-red: #c7270f; // color for warnings, errors, or message notifications\n$color-green: #039d12; // color for finished / affirmative messages\n$color-yellow-1: #f1b33c; // active/rollover buttons or highlight location\n$color-yellow-2: #f6f0ea; // Highlight for selected rows in tables (accounting & ERVs pages)\n$color-yellow-3: #fae0aa; // tooltip bg color\n\n// the BG used for all modal overlays and the like\n$color-bg-modal: rgba(0, 0, 0, 0.75);\n\n// color for 508 focus around elements\n$color-focus: pink; // undecided. TODO: pick a color\n\n$color-divider: rgba(255, 255, 255, 0.25); //the semi-translucent dividers used in header & footer\n\n// ********************* BOX SHADOWS *********************\n$box-shadow-color-focus: 0px 0px 5px $color-focus;\n\n// ********************* BORDER RADIUS *********************\n$border-radius: 4px;\n$border-radius-forms: 0px;\n\n// ********************* STANDARD MARGINS *********************\n\n$margin-horz-desktop: 32px;\n$margin-horz-phone: 12px;\n\n$margin-vert-desktop: 24px;\n$margin-vert-phone: 12px;\n\n// ********************* VIEWPORTS FOR MEDIA QUERIES *********************\n$phone-width: 480px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n$giant-desktop-width: 1600px;\n\n// ********************* FONTS *********************\n$text-thin: 'roboto-thin', Roboto, sans-serif;\n$text-light: 'roboto-light', Roboto, sans-serif;\n$text-regular: 'roboto-regular', Roboto, sans-serif;\n$text-medium: 'roboto-medium', Roboto, sans-serif;\n$text-bold: 'roboto-bold', Roboto, sans-serif;\n\n// ********************* FORM ELEMENTS *********************\n$height-form-elements: 22px;\n","@use './variables';\n// ************************* FONT FAMILIES *******************\n// done this way so that if fonts don't load the will still look somewhat okay\n@mixin text-regular {\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n}\n\n@mixin text-thin {\n  font-family: Roboto, sans-serif;\n  font-weight: 100;\n}\n\n@mixin text-medium {\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n}\n\n@mixin text-light {\n  font-family: Roboto, sans-serif;\n  font-weight: 300;\n}\n\n@mixin text-bold {\n  font-family: Roboto, sans-serif;\n  font-weight: 700;\n}\n\n@mixin text-no-results {\n  @include text-regular();\n  text-align: center;\n  font-size: 1.2rem;\n  color: variables.$color-gray-2;\n}\n\n@mixin fontawesome {\n  display: inline-block;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: auto;\n  font-style: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-variant: normal;\n  font-family: 'Font Awesome 5 Free', 'FontAwesome', sans-serif;\n  line-height: 1;\n}\n\n// use this to de-ellipsis overflow an element\n@mixin ut-word-wrap {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n}\n\n@mixin ut-nowrap {\n  white-space: nowrap;\n}\n\n@mixin zebra {\n  background: variables.$color-gray-5;\n}\n\n// ************************* MEDIA QUERIES *******************\n@mixin mq-phone {\n  @media (min-width: 0 ) and (max-width: #{variables.$phone-width}) {\n    @content;\n  }\n}\n\n@mixin mq-tablet {\n  @media (min-width: #{variables.$phone-width (+1)}) and (max-width: #{variables.$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin mq-phone-and-tablet {\n  @media (min-width: 0 ) and (max-width: #{variables.$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin mq-desktop {\n  @media (min-width: #{variables.$tablet-width + 1}) {\n    @content;\n  }\n}\n\n// ************************* UTILITY MIXINS *******************\n@mixin ut-only-sr {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/styles/inputs.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inputs_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/inputs.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inputs_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inputs_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inputs_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_inputs_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);