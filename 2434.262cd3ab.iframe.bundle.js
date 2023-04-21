"use strict";(self.webpackChunkcommon_components=self.webpackChunkcommon_components||[]).push([[2434],{"./node_modules/@react-aria/label/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$d191a55c9702f145$export$8467354a121f1b9f,U:()=>$2baaea4c71418dea$export$294aa081a6c6f55d});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs");function $d191a55c9702f145$export$8467354a121f1b9f(props){let{id,label,"aria-labelledby":ariaLabelledby,"aria-label":ariaLabel,labelElementType="label"}=props;id=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(id);let labelId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(),labelProps={};return label?(ariaLabelledby=ariaLabelledby?`${ariaLabelledby} ${labelId}`:labelId,labelProps={id:labelId,htmlFor:"label"===labelElementType?id:void 0}):ariaLabelledby||ariaLabel||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps,fieldProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.bE)({id,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby})}}function $2baaea4c71418dea$export$294aa081a6c6f55d(props){let{description,errorMessage,validationState}=props,{labelProps,fieldProps}=$d191a55c9702f145$export$8467354a121f1b9f(props),descriptionId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)([Boolean(description),Boolean(errorMessage),validationState]),errorMessageId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)([Boolean(description),Boolean(errorMessage),validationState]);return fieldProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(fieldProps,{"aria-describedby":[descriptionId,errorMessageId,props["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps,fieldProps,descriptionProps:{id:descriptionId},errorMessageProps:{id:errorMessageId}}}},"./node_modules/@react-aria/listbox/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fv:()=>$293f70390ea03370$export$497855f14858aa34,Oj:()=>$b1f0cad8af73213b$export$3585ede4d035bf14,TV:()=>$af383d3bef1cfdc9$export$c3f9f39876e4bc7,co:()=>$c132121280ec012d$export$50eacbbf140a3141,x3:()=>$b1f0cad8af73213b$export$9145995848b05025});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs"),_react_aria_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-aria/label/dist/import.mjs"),_react_aria_selection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/selection/dist/import.mjs"),_react_stately_collections__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-stately/collections/dist/import.mjs");const $b1f0cad8af73213b$export$3585ede4d035bf14=new WeakMap;function $b1f0cad8af73213b$export$9145995848b05025(state,itemKey){let data=$b1f0cad8af73213b$export$3585ede4d035bf14.get(state);if(!data)throw new Error("Unknown list");return`${data.id}-option-${function $b1f0cad8af73213b$var$normalizeKey(key){return"string"==typeof key?key.replace(/\s*/g,""):""+key}(itemKey)}`}function $c132121280ec012d$export$50eacbbf140a3141(props,state,ref){let domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.zL)(props,{labelable:!0}),{listProps}=(0,_react_aria_selection__WEBPACK_IMPORTED_MODULE_1__._t)({...props,ref,selectionManager:state.selectionManager,collection:state.collection,disabledKeys:state.disabledKeys}),{focusWithinProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.L_)({onFocusWithin:props.onFocus,onBlurWithin:props.onBlur,onFocusWithinChange:props.onFocusChange}),id=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(props.id);$b1f0cad8af73213b$export$3585ede4d035bf14.set(state,{id,shouldUseVirtualFocus:props.shouldUseVirtualFocus,shouldSelectOnPressUp:props.shouldSelectOnPressUp,shouldFocusOnHover:props.shouldFocusOnHover,isVirtualized:props.isVirtualized,onAction:props.onAction});let{labelProps,fieldProps}=(0,_react_aria_label__WEBPACK_IMPORTED_MODULE_3__.N)({...props,id,labelElementType:"span"});return{labelProps,listBoxProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(domProps,focusWithinProps,"multiple"===state.selectionManager.selectionMode?{"aria-multiselectable":"true"}:{},{role:"listbox",...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(fieldProps,listProps)})}}function $293f70390ea03370$export$497855f14858aa34(props,state,ref){let{key}=props,data=$b1f0cad8af73213b$export$3585ede4d035bf14.get(state);var _props_isDisabled;let isDisabled=null!==(_props_isDisabled=props.isDisabled)&&void 0!==_props_isDisabled?_props_isDisabled:state.disabledKeys.has(key);var _props_isSelected;let isSelected=null!==(_props_isSelected=props.isSelected)&&void 0!==_props_isSelected?_props_isSelected:state.selectionManager.isSelected(key);var _props_shouldSelectOnPressUp;let shouldSelectOnPressUp=null!==(_props_shouldSelectOnPressUp=props.shouldSelectOnPressUp)&&void 0!==_props_shouldSelectOnPressUp?_props_shouldSelectOnPressUp:null==data?void 0:data.shouldSelectOnPressUp;var _props_shouldFocusOnHover;let shouldFocusOnHover=null!==(_props_shouldFocusOnHover=props.shouldFocusOnHover)&&void 0!==_props_shouldFocusOnHover?_props_shouldFocusOnHover:null==data?void 0:data.shouldFocusOnHover;var _props_shouldUseVirtualFocus;let shouldUseVirtualFocus=null!==(_props_shouldUseVirtualFocus=props.shouldUseVirtualFocus)&&void 0!==_props_shouldUseVirtualFocus?_props_shouldUseVirtualFocus:null==data?void 0:data.shouldUseVirtualFocus;var _props_isVirtualized;let isVirtualized=null!==(_props_isVirtualized=props.isVirtualized)&&void 0!==_props_isVirtualized?_props_isVirtualized:null==data?void 0:data.isVirtualized,labelId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)(),descriptionId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)(),optionProps={role:"option","aria-disabled":isDisabled||void 0,"aria-selected":"none"!==state.selectionManager.selectionMode?isSelected:void 0};if((0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.V5)()&&(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Pf)()||(optionProps["aria-label"]=props["aria-label"],optionProps["aria-labelledby"]=labelId,optionProps["aria-describedby"]=descriptionId),isVirtualized){var _state_collection_getItem;let index=Number(null===(_state_collection_getItem=state.collection.getItem(key))||void 0===_state_collection_getItem?void 0:_state_collection_getItem.index);optionProps["aria-posinset"]=Number.isNaN(index)?void 0:index+1,optionProps["aria-setsize"]=(0,_react_stately_collections__WEBPACK_IMPORTED_MODULE_4__.is)(state.collection)}let{itemProps,isPressed,isFocused,hasAction,allowsSelection}=(0,_react_aria_selection__WEBPACK_IMPORTED_MODULE_1__.Cs)({selectionManager:state.selectionManager,key,ref,shouldSelectOnPressUp,allowsDifferentPressOrigin:shouldSelectOnPressUp&&shouldFocusOnHover,isVirtualized,shouldUseVirtualFocus,isDisabled,onAction:(null==data?void 0:data.onAction)?()=>{var _data_onAction;return null==data||null===(_data_onAction=data.onAction)||void 0===_data_onAction?void 0:_data_onAction.call(data,key)}:void 0}),{hoverProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.XI)({isDisabled:isDisabled||!shouldFocusOnHover,onHoverStart(){(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.E)()||(state.selectionManager.setFocused(!0),state.selectionManager.setFocusedKey(key))}});return{optionProps:{...optionProps,...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(itemProps,hoverProps),id:$b1f0cad8af73213b$export$9145995848b05025(state,key)},labelProps:{id:labelId},descriptionProps:{id:descriptionId},isFocused,isFocusVisible:isFocused&&(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.E)(),isSelected,isDisabled,isPressed,allowsSelection,hasAction}}function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props){let{heading,"aria-label":ariaLabel}=props,headingId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)();return{itemProps:{role:"presentation"},headingProps:heading?{id:headingId,"aria-hidden":!0}:{},groupProps:{role:"group","aria-label":ariaLabel,"aria-labelledby":heading?headingId:void 0}}}},"./node_modules/@react-aria/separator/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>$f4b273590fab9f93$export$52210f68a14655d0});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs");function $f4b273590fab9f93$export$52210f68a14655d0(props){let ariaOrientation,domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.zL)(props,{labelable:!0});return"vertical"===props.orientation&&(ariaOrientation="vertical"),"hr"!==props.elementType?{separatorProps:{...domProps,role:"separator","aria-orientation":ariaOrientation}}:{separatorProps:domProps}}},"./node_modules/@react-stately/list/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BA:()=>$a0d645289fe9b86b$export$e7f05e985daf4b5f,DC:()=>$a02d57049d202695$export$d085fb9e920b5ca7,n_:()=>$e72dd72e1c76a225$export$2f645645f7bca764});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_stately_selection__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-stately/selection/dist/import.mjs"),_react_stately_collections__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-stately/collections/dist/import.mjs"),_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@swc/helpers/src/_define_property.mjs"),_react_stately_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");let $a02d57049d202695$var$_Symbol_iterator=Symbol.iterator;class $a02d57049d202695$export$d085fb9e920b5ca7{*[$a02d57049d202695$var$_Symbol_iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(key){let node=this.keyMap.get(key);return node?node.prevKey:null}getKeyAfter(key){let node=this.keyMap.get(key);return node?node.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(key){return this.keyMap.get(key)}at(idx){const keys=[...this.getKeys()];return this.getItem(keys[idx])}getChildren(key){let node=this.keyMap.get(key);return(null==node?void 0:node.childNodes)||[]}constructor(nodes){(0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_1__.Z)(this,"keyMap",new Map),this.iterable=nodes;let last,visit=node=>{if(this.keyMap.set(node.key,node),node.childNodes&&"section"===node.type)for(let child of node.childNodes)visit(child)};for(let node of nodes)visit(node);let index=0;for(let[key,node1]of this.keyMap)last?(last.nextKey=key,node1.prevKey=last.key):(this.firstKey=key,node1.prevKey=void 0),"item"===node1.type&&(node1.index=index++),last=node1,last.nextKey=void 0;this.lastKey=null==last?void 0:last.key}}function $e72dd72e1c76a225$export$2f645645f7bca764(props){let{filter}=props,selectionState=(0,_react_stately_selection__WEBPACK_IMPORTED_MODULE_2__.q)(props),disabledKeys=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>props.disabledKeys?new Set(props.disabledKeys):new Set),[props.disabledKeys]),context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({suppressTextValueWarning:props.suppressTextValueWarning})),[props.suppressTextValueWarning]),collection=(0,_react_stately_collections__WEBPACK_IMPORTED_MODULE_3__.Kx)(props,(nodes=>new $a02d57049d202695$export$d085fb9e920b5ca7(filter?filter(nodes):nodes)),context,[filter]),selectionManager=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new(0,_react_stately_selection__WEBPACK_IMPORTED_MODULE_2__.Z)(collection,selectionState)),[collection,selectionState]);const cachedCollection=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(null!=selectionState.focusedKey&&!collection.getItem(selectionState.focusedKey)){const startItem=cachedCollection.current.getItem(selectionState.focusedKey),cachedItemNodes=[...cachedCollection.current.getKeys()].map((key=>{const itemNode=cachedCollection.current.getItem(key);return"item"===itemNode.type?itemNode:null})).filter((node=>null!==node)),itemNodes=[...collection.getKeys()].map((key=>{const itemNode=collection.getItem(key);return"item"===itemNode.type?itemNode:null})).filter((node=>null!==node)),diff=cachedItemNodes.length-itemNodes.length;let newNode,index=Math.min(diff>1?Math.max(startItem.index-diff+1,0):startItem.index,itemNodes.length-1);for(;index>=0;){if(!selectionManager.isDisabled(itemNodes[index].key)){newNode=itemNodes[index];break}index<itemNodes.length-1?index++:(index>startItem.index&&(index=startItem.index),index--)}selectionState.setFocusedKey(newNode?newNode.key:null)}cachedCollection.current=collection}),[collection,selectionManager,selectionState,selectionState.focusedKey]),{collection,disabledKeys,selectionManager}}function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props){var _props_defaultSelectedKey;let[selectedKey,setSelectedKey]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_4__.zk)(props.selectedKey,null!==(_props_defaultSelectedKey=props.defaultSelectedKey)&&void 0!==_props_defaultSelectedKey?_props_defaultSelectedKey:null,props.onSelectionChange),selectedKeys=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>null!=selectedKey?[selectedKey]:[]),[selectedKey]),{collection,disabledKeys,selectionManager}=$e72dd72e1c76a225$export$2f645645f7bca764({...props,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys,onSelectionChange:keys=>{let key=keys.values().next().value;key===selectedKey&&props.onSelectionChange&&props.onSelectionChange(key),setSelectedKey(key)}}),selectedItem=null!=selectedKey?collection.getItem(selectedKey):null;return{collection,disabledKeys,selectionManager,selectedKey,setSelectedKey,selectedItem}}}}]);