"use strict";(self.webpackChunkcommon_components=self.webpackChunkcommon_components||[]).push([[8599],{"./node_modules/@react-aria/listbox/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HP:()=>$b1f0cad8af73213b$export$9145995848b05025,Xv:()=>$c132121280ec012d$export$50eacbbf140a3141,bB:()=>$b1f0cad8af73213b$export$3585ede4d035bf14,u4:()=>$af383d3bef1cfdc9$export$c3f9f39876e4bc7,xW:()=>$293f70390ea03370$export$497855f14858aa34});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs"),_react_aria_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-aria/label/dist/import.mjs"),_react_aria_selection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/selection/dist/import.mjs"),_react_stately_collections__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-stately/collections/dist/import.mjs");const $b1f0cad8af73213b$export$3585ede4d035bf14=new WeakMap;function $b1f0cad8af73213b$export$9145995848b05025(state,itemKey){let data=$b1f0cad8af73213b$export$3585ede4d035bf14.get(state);if(!data)throw new Error("Unknown list");return`${data.id}-option-${function $b1f0cad8af73213b$var$normalizeKey(key){return"string"==typeof key?key.replace(/\s*/g,""):""+key}(itemKey)}`}function $c132121280ec012d$export$50eacbbf140a3141(props,state,ref){let domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.$X)(props,{labelable:!0}),selectionBehavior=props.selectionBehavior||"toggle",linkBehavior=props.linkBehavior||("replace"===selectionBehavior?"action":"override");"toggle"===selectionBehavior&&"action"===linkBehavior&&(linkBehavior="override");let{listProps}=(0,_react_aria_selection__WEBPACK_IMPORTED_MODULE_1__.yI)({...props,ref,selectionManager:state.selectionManager,collection:state.collection,disabledKeys:state.disabledKeys,linkBehavior}),{focusWithinProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.Rb)({onFocusWithin:props.onFocus,onBlurWithin:props.onBlur,onFocusWithinChange:props.onFocusChange}),id=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Bi)(props.id);$b1f0cad8af73213b$export$3585ede4d035bf14.set(state,{id,shouldUseVirtualFocus:props.shouldUseVirtualFocus,shouldSelectOnPressUp:props.shouldSelectOnPressUp,shouldFocusOnHover:props.shouldFocusOnHover,isVirtualized:props.isVirtualized,onAction:props.onAction,linkBehavior});let{labelProps,fieldProps}=(0,_react_aria_label__WEBPACK_IMPORTED_MODULE_3__.t)({...props,id,labelElementType:"span"});return{labelProps,listBoxProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.v6)(domProps,focusWithinProps,"multiple"===state.selectionManager.selectionMode?{"aria-multiselectable":"true"}:{},{role:"listbox",...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.v6)(fieldProps,listProps)})}}function $293f70390ea03370$export$497855f14858aa34(props,state,ref){var _item_props;let{key}=props,data=$b1f0cad8af73213b$export$3585ede4d035bf14.get(state);var _props_isDisabled;let isDisabled=null!==(_props_isDisabled=props.isDisabled)&&void 0!==_props_isDisabled?_props_isDisabled:state.disabledKeys.has(key);var _props_isSelected;let isSelected=null!==(_props_isSelected=props.isSelected)&&void 0!==_props_isSelected?_props_isSelected:state.selectionManager.isSelected(key);var _props_shouldSelectOnPressUp;let shouldSelectOnPressUp=null!==(_props_shouldSelectOnPressUp=props.shouldSelectOnPressUp)&&void 0!==_props_shouldSelectOnPressUp?_props_shouldSelectOnPressUp:null==data?void 0:data.shouldSelectOnPressUp;var _props_shouldFocusOnHover;let shouldFocusOnHover=null!==(_props_shouldFocusOnHover=props.shouldFocusOnHover)&&void 0!==_props_shouldFocusOnHover?_props_shouldFocusOnHover:null==data?void 0:data.shouldFocusOnHover;var _props_shouldUseVirtualFocus;let shouldUseVirtualFocus=null!==(_props_shouldUseVirtualFocus=props.shouldUseVirtualFocus)&&void 0!==_props_shouldUseVirtualFocus?_props_shouldUseVirtualFocus:null==data?void 0:data.shouldUseVirtualFocus;var _props_isVirtualized;let isVirtualized=null!==(_props_isVirtualized=props.isVirtualized)&&void 0!==_props_isVirtualized?_props_isVirtualized:null==data?void 0:data.isVirtualized,labelId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.X1)(),descriptionId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.X1)(),optionProps={role:"option","aria-disabled":isDisabled||void 0,"aria-selected":"none"!==state.selectionManager.selectionMode?isSelected:void 0};(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.cX)()&&(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Tc)()||(optionProps["aria-label"]=props["aria-label"],optionProps["aria-labelledby"]=labelId,optionProps["aria-describedby"]=descriptionId);let item=state.collection.getItem(key);if(isVirtualized){let index=Number(null==item?void 0:item.index);optionProps["aria-posinset"]=Number.isNaN(index)?void 0:index+1,optionProps["aria-setsize"]=(0,_react_stately_collections__WEBPACK_IMPORTED_MODULE_4__.vS)(state.collection)}let{itemProps,isPressed,isFocused,hasAction,allowsSelection}=(0,_react_aria_selection__WEBPACK_IMPORTED_MODULE_1__.pB)({selectionManager:state.selectionManager,key,ref,shouldSelectOnPressUp,allowsDifferentPressOrigin:shouldSelectOnPressUp&&shouldFocusOnHover,isVirtualized,shouldUseVirtualFocus,isDisabled,onAction:(null==data?void 0:data.onAction)?()=>{var _data_onAction;return null==data||null===(_data_onAction=data.onAction)||void 0===_data_onAction?void 0:_data_onAction.call(data,key)}:void 0,linkBehavior:null==data?void 0:data.linkBehavior}),{hoverProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.Mk)({isDisabled:isDisabled||!shouldFocusOnHover,onHoverStart(){(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.pP)()||(state.selectionManager.setFocused(!0),state.selectionManager.setFocusedKey(key))}}),domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.$X)(null==item?void 0:item.props,{isLink:!!(null==item||null===(_item_props=item.props)||void 0===_item_props?void 0:_item_props.href)});return delete domProps.id,{optionProps:{...optionProps,...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.v6)(domProps,itemProps,hoverProps),id:$b1f0cad8af73213b$export$9145995848b05025(state,key)},labelProps:{id:labelId},descriptionProps:{id:descriptionId},isFocused,isFocusVisible:isFocused&&(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.pP)(),isSelected,isDisabled,isPressed,allowsSelection,hasAction}}function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props){let{heading,"aria-label":ariaLabel}=props,headingId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Bi)();return{itemProps:{role:"presentation"},headingProps:heading?{id:headingId,role:"presentation"}:{},groupProps:{role:"group","aria-label":ariaLabel,"aria-labelledby":heading?headingId:void 0}}}},"./node_modules/@react-aria/separator/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>$f4b273590fab9f93$export$52210f68a14655d0});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs");function $f4b273590fab9f93$export$52210f68a14655d0(props){let ariaOrientation,domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.$X)(props,{labelable:!0});return"vertical"===props.orientation&&(ariaOrientation="vertical"),"hr"!==props.elementType?{separatorProps:{...domProps,role:"separator","aria-orientation":ariaOrientation}}:{separatorProps:domProps}}},"./node_modules/@react-stately/list/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jk:()=>$a02d57049d202695$export$d085fb9e920b5ca7,Vi:()=>$a0d645289fe9b86b$export$e7f05e985daf4b5f,pE:()=>$e72dd72e1c76a225$export$2f645645f7bca764});var _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-stately/selection/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../epi-systems-frontend/node_modules/react/index.js"),_react_stately_collections__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-stately/collections/dist/import.mjs"),_react_stately_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");class $a02d57049d202695$export$d085fb9e920b5ca7{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(key){let node=this.keyMap.get(key);return node?node.prevKey:null}getKeyAfter(key){let node=this.keyMap.get(key);return node?node.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(key){return this.keyMap.get(key)}at(idx){const keys=[...this.getKeys()];return this.getItem(keys[idx])}getChildren(key){let node=this.keyMap.get(key);return(null==node?void 0:node.childNodes)||[]}constructor(nodes){this.keyMap=new Map,this.iterable=nodes;let last,visit=node=>{if(this.keyMap.set(node.key,node),node.childNodes&&"section"===node.type)for(let child of node.childNodes)visit(child)};for(let node of nodes)visit(node);let index=0;for(let[key,node]of this.keyMap)last?(last.nextKey=key,node.prevKey=last.key):(this.firstKey=key,node.prevKey=void 0),"item"===node.type&&(node.index=index++),last=node,last.nextKey=void 0;this.lastKey=null==last?void 0:last.key}}function $e72dd72e1c76a225$export$2f645645f7bca764(props){let{filter}=props,selectionState=(0,_react_stately_selection__WEBPACK_IMPORTED_MODULE_1__.R)(props),disabledKeys=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>props.disabledKeys?new Set(props.disabledKeys):new Set),[props.disabledKeys]),factory=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nodes=>new $a02d57049d202695$export$d085fb9e920b5ca7(filter?filter(nodes):nodes)),[filter]),context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({suppressTextValueWarning:props.suppressTextValueWarning})),[props.suppressTextValueWarning]),collection=(0,_react_stately_collections__WEBPACK_IMPORTED_MODULE_2__.Ge)(props,factory,context),selectionManager=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new(0,_react_stately_selection__WEBPACK_IMPORTED_MODULE_1__.Y)(collection,selectionState)),[collection,selectionState]);const cachedCollection=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(null!=selectionState.focusedKey&&!collection.getItem(selectionState.focusedKey)){const startItem=cachedCollection.current.getItem(selectionState.focusedKey),cachedItemNodes=[...cachedCollection.current.getKeys()].map((key=>{const itemNode=cachedCollection.current.getItem(key);return"item"===itemNode.type?itemNode:null})).filter((node=>null!==node)),itemNodes=[...collection.getKeys()].map((key=>{const itemNode=collection.getItem(key);return"item"===itemNode.type?itemNode:null})).filter((node=>null!==node)),diff=cachedItemNodes.length-itemNodes.length;let newNode,index=Math.min(diff>1?Math.max(startItem.index-diff+1,0):startItem.index,itemNodes.length-1);for(;index>=0;){if(!selectionManager.isDisabled(itemNodes[index].key)){newNode=itemNodes[index];break}index<itemNodes.length-1?index++:(index>startItem.index&&(index=startItem.index),index--)}selectionState.setFocusedKey(newNode?newNode.key:null)}cachedCollection.current=collection}),[collection,selectionManager,selectionState,selectionState.focusedKey]),{collection,disabledKeys,selectionManager}}function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props){var _props_defaultSelectedKey;let[selectedKey,setSelectedKey]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_3__.PW)(props.selectedKey,null!==(_props_defaultSelectedKey=props.defaultSelectedKey)&&void 0!==_props_defaultSelectedKey?_props_defaultSelectedKey:null,props.onSelectionChange),selectedKeys=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>null!=selectedKey?[selectedKey]:[]),[selectedKey]),{collection,disabledKeys,selectionManager}=$e72dd72e1c76a225$export$2f645645f7bca764({...props,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys,onSelectionChange:keys=>{var _keys_values_next_value;let key=null!==(_keys_values_next_value=keys.values().next().value)&&void 0!==_keys_values_next_value?_keys_values_next_value:null;key===selectedKey&&props.onSelectionChange&&props.onSelectionChange(key),setSelectedKey(key)}}),selectedItem=null!=selectedKey?collection.getItem(selectedKey):null;return{collection,disabledKeys,selectionManager,selectedKey,setSelectedKey,selectedItem}}}}]);