"use strict";(self.webpackChunkcommon_components=self.webpackChunkcommon_components||[]).push([[1945],{"./node_modules/@react-aria/label/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$d191a55c9702f145$export$8467354a121f1b9f,U:()=>$2baaea4c71418dea$export$294aa081a6c6f55d});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs");function $d191a55c9702f145$export$8467354a121f1b9f(props){let{id,label,"aria-labelledby":ariaLabelledby,"aria-label":ariaLabel,labelElementType="label"}=props;id=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(id);let labelId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(),labelProps={};return label?(ariaLabelledby=ariaLabelledby?`${ariaLabelledby} ${labelId}`:labelId,labelProps={id:labelId,htmlFor:"label"===labelElementType?id:void 0}):ariaLabelledby||ariaLabel||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps,fieldProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.bE)({id,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby})}}function $2baaea4c71418dea$export$294aa081a6c6f55d(props){let{description,errorMessage,validationState}=props,{labelProps,fieldProps}=$d191a55c9702f145$export$8467354a121f1b9f(props),descriptionId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)([Boolean(description),Boolean(errorMessage),validationState]),errorMessageId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)([Boolean(description),Boolean(errorMessage),validationState]);return fieldProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(fieldProps,{"aria-describedby":[descriptionId,errorMessageId,props["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps,fieldProps,descriptionProps:{id:descriptionId},errorMessageProps:{id:errorMessageId}}}},"./node_modules/@react-aria/radio/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>$430f30ed08ec25fa$export$62b9571f283ff5c2,x:()=>$0d5c49892c1215da$export$37b0961d2f4751e2});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs"),_react_aria_label__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@react-aria/label/dist/import.mjs"),_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-aria/i18n/dist/real-module.mjs");const $884aeceb3d67f00f$export$3b7b268d09480394=new WeakMap,$884aeceb3d67f00f$export$8e8b214e06dd397d=new WeakMap,$884aeceb3d67f00f$export$61c8d3f0151e21b2=new WeakMap;function $0d5c49892c1215da$export$37b0961d2f4751e2(props,state,ref){let{value,children,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby}=props;const isDisabled=props.isDisabled||state.isDisabled;null!=children||(null!=ariaLabel||null!=ariaLabelledby)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let checked=state.selectedValue===value,{pressProps,isPressed}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__.r7)({isDisabled}),{focusableProps}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__.kc)((0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(props,{onFocus:()=>state.setLastFocusedValue(value)}),ref),interactions=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(pressProps,focusableProps),domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.zL)(props,{labelable:!0}),tabIndex=state.lastFocusedValue===value||null==state.lastFocusedValue?0:-1;return isDisabled&&(tabIndex=void 0),{inputProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(domProps,{...interactions,type:"radio",name:$884aeceb3d67f00f$export$3b7b268d09480394.get(state),tabIndex,disabled:isDisabled,checked,value,onChange:e=>{e.stopPropagation(),state.setSelectedValue(value)},"aria-describedby":["invalid"===state.validationState?$884aeceb3d67f00f$export$61c8d3f0151e21b2.get(state):null,$884aeceb3d67f00f$export$8e8b214e06dd397d.get(state)].filter(Boolean).join(" ")||void 0}),isDisabled,isSelected:checked,isPressed}}function $430f30ed08ec25fa$export$62b9571f283ff5c2(props,state){let{name,validationState,isReadOnly,isRequired,isDisabled,orientation="vertical"}=props,{direction}=(0,_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.bU)(),{labelProps,fieldProps,descriptionProps,errorMessageProps}=(0,_react_aria_label__WEBPACK_IMPORTED_MODULE_4__.U)({...props,labelElementType:"span"});$884aeceb3d67f00f$export$8e8b214e06dd397d.set(state,descriptionProps.id),$884aeceb3d67f00f$export$61c8d3f0151e21b2.set(state,errorMessageProps.id);let domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.zL)(props,{labelable:!0}),{focusWithinProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__.L_)({onBlurWithin(){state.selectedValue||state.setLastFocusedValue(null)}}),groupName=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.Me)(name);return $884aeceb3d67f00f$export$3b7b268d09480394.set(state,groupName),{radioGroupProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(domProps,{role:"radiogroup",onKeyDown:e=>{let nextDir;switch(e.key){case"ArrowRight":nextDir="rtl"===direction&&"vertical"!==orientation?"prev":"next";break;case"ArrowLeft":nextDir="rtl"===direction&&"vertical"!==orientation?"next":"prev";break;case"ArrowDown":nextDir="next";break;case"ArrowUp":nextDir="prev";break;default:return}e.preventDefault();let nextElem,walker=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__.QL)(e.currentTarget,{from:e.target});"next"===nextDir?(nextElem=walker.nextNode(),nextElem||(walker.currentNode=e.currentTarget,nextElem=walker.firstChild())):(nextElem=walker.previousNode(),nextElem||(walker.currentNode=e.currentTarget,nextElem=walker.lastChild())),nextElem&&(nextElem.focus(),state.setSelectedValue(nextElem.value))},"aria-invalid":"invalid"===validationState||void 0,"aria-errormessage":props["aria-errormessage"],"aria-readonly":isReadOnly||void 0,"aria-required":isRequired||void 0,"aria-disabled":isDisabled||void 0,"aria-orientation":orientation,...fieldProps,...focusWithinProps}),labelProps,descriptionProps,errorMessageProps}}},"./node_modules/@react-aria/visually-hidden/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>$5c3e21d68f1c4674$export$439d29a4e110a164});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs");const $5c3e21d68f1c4674$var$styles={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function $5c3e21d68f1c4674$export$439d29a4e110a164(props){let{children,elementType:Element="div",isFocusable,style,...otherProps}=props,{visuallyHiddenProps}=function $5c3e21d68f1c4674$export$a966af930f325cab(props={}){let{style,isFocusable}=props,[isFocused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{focusWithinProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.L_)({isDisabled:!isFocusable,onFocusWithinChange:val=>setFocused(val)});return{visuallyHiddenProps:{...focusWithinProps,style:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>isFocused?style:style?{...$5c3e21d68f1c4674$var$styles,...style}:$5c3e21d68f1c4674$var$styles),[isFocused])}}}(props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element,(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(otherProps,visuallyHiddenProps),children)}},"./node_modules/@react-stately/radio/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>$a54cdc5c1942b639$export$bca9d026f8e704eb});var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let $a54cdc5c1942b639$var$instance=Math.round(1e10*Math.random()),$a54cdc5c1942b639$var$i=0;function $a54cdc5c1942b639$export$bca9d026f8e704eb(props){let name=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>props.name||`radio-group-${$a54cdc5c1942b639$var$instance}-${++$a54cdc5c1942b639$var$i}`),[props.name]),[selectedValue,setSelected]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.zk)(props.value,props.defaultValue,props.onChange),[lastFocusedValue,setLastFocusedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return{name,selectedValue,setSelectedValue:value=>{props.isReadOnly||props.isDisabled||setSelected(value)},lastFocusedValue,setLastFocusedValue,isDisabled:props.isDisabled||!1,isReadOnly:props.isReadOnly||!1,isRequired:props.isRequired||!1,validationState:props.validationState||null}}},"./node_modules/@react-stately/utils/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uZ:()=>$9446cca9a3875146$export$7d15b64cf5a3a4c4,zk:()=>$458b0a5536c1a7cf$export$40bfa8c7b0832715});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value,defaultValue,onChange){let[stateValue,setStateValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||defaultValue),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0!==value),wasControlled=ref.current,isControlled=void 0!==value,stateRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateValue);wasControlled!==isControlled&&console.warn(`WARN: A component changed from ${wasControlled?"controlled":"uncontrolled"} to ${isControlled?"controlled":"uncontrolled"}.`),ref.current=isControlled;let setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,...args)=>{let onChangeCaller=(value,...onChangeArgs)=>{onChange&&(Object.is(stateRef.current,value)||onChange(value,...onChangeArgs)),isControlled||(stateRef.current=value)};if("function"==typeof value){console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),setStateValue(((oldValue,...functionArgs)=>{let interceptedValue=value(isControlled?stateRef.current:oldValue,...functionArgs);return onChangeCaller(interceptedValue,...args),isControlled?oldValue:interceptedValue}))}else isControlled||setStateValue(value),onChangeCaller(value,...args)}),[isControlled,onChange]);return isControlled?stateRef.current=value:value=stateValue,[value,setValue]}function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value,min=-1/0,max=1/0){return Math.min(Math.max(value,min),max)}}}]);