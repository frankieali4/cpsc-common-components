"use strict";(self.webpackChunkcommon_components=self.webpackChunkcommon_components||[]).push([[241],{"./node_modules/@react-aria/button/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>$701a24aa0da5b062$export$ea18c227d4417cc3});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs");function $701a24aa0da5b062$export$ea18c227d4417cc3(props,ref){let additionalProps,{elementType="button",isDisabled,onPress,onPressStart,onPressEnd,onPressChange,preventFocusOnPress,allowFocusWhenDisabled,onClick:deprecatedOnClick,href,target,rel,type="button"}=props;additionalProps="button"===elementType?{type,disabled:isDisabled}:{role:"button",tabIndex:isDisabled?void 0:0,href:"a"===elementType&&isDisabled?void 0:href,target:"a"===elementType?target:void 0,type:"input"===elementType?type:void 0,disabled:"input"===elementType?isDisabled:void 0,"aria-disabled":isDisabled&&"input"!==elementType?isDisabled:void 0,rel:"a"===elementType?rel:void 0};let{pressProps,isPressed}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__.r7)({onPressStart,onPressEnd,onPressChange,onPress,isDisabled,preventFocusOnPress,ref}),{focusableProps}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__.kc)(props,ref);allowFocusWhenDisabled&&(focusableProps.tabIndex=isDisabled?-1:focusableProps.tabIndex);let buttonProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(focusableProps,pressProps,(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.zL)(props,{labelable:!0}));return{isPressed,buttonProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(additionalProps,buttonProps,{"aria-haspopup":props["aria-haspopup"],"aria-expanded":props["aria-expanded"],"aria-controls":props["aria-controls"],"aria-pressed":props["aria-pressed"],onClick:e=>{deprecatedOnClick&&(deprecatedOnClick(e),console.warn("onClick is deprecated, please use onPress"))}})}}},"./node_modules/@react-aria/tooltip/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>$4e1b34546679e357$export$a6da6c504e4bba8b,l:()=>$326e436e94273fe1$export$1c4b08e0eca38426});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_aria_focus__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs");function $326e436e94273fe1$export$1c4b08e0eca38426(props,state){let domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.zL)(props,{labelable:!0}),{hoverProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.XI)({onHoverStart:()=>null==state?void 0:state.open(!0),onHoverEnd:()=>null==state?void 0:state.close()});return{tooltipProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.dG)(domProps,hoverProps,{role:"tooltip"})}}function $4e1b34546679e357$export$a6da6c504e4bba8b(props,state,ref){let{isDisabled,trigger}=props,tooltipId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.Me)(),isHovered=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),isFocused=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),handleShow=()=>{(isHovered.current||isFocused.current)&&state.open(isFocused.current)},handleHide=immediate=>{isHovered.current||isFocused.current||state.close(immediate)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let onKeyDown=e=>{ref&&ref.current&&"Escape"===e.key&&(e.stopPropagation(),state.close(!0))};if(state.isOpen)return document.addEventListener("keydown",onKeyDown,!0),()=>{document.removeEventListener("keydown",onKeyDown,!0)}}),[ref,state]);let{hoverProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.XI)({isDisabled,onHoverStart:()=>{"focus"!==trigger&&("pointer"===(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.Jz)()?isHovered.current=!0:isHovered.current=!1,handleShow())},onHoverEnd:()=>{"focus"!==trigger&&(isFocused.current=!1,isHovered.current=!1,handleHide())}}),{pressProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.r7)({onPressStart:()=>{isFocused.current=!1,isHovered.current=!1,handleHide(!0)}}),{focusableProps}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_3__.kc)({isDisabled,onFocus:()=>{(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.E)()&&(isFocused.current=!0,handleShow())},onBlur:()=>{isFocused.current=!1,isHovered.current=!1,handleHide(!0)}},ref);return{triggerProps:{"aria-describedby":state.isOpen?tooltipId:void 0,...(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.dG)(focusableProps,hoverProps,pressProps)},tooltipProps:{id:tooltipId}}}},"./node_modules/@react-stately/overlays/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>$fc909762b330b746$export$61c6a8c84e605fb6});var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");function $fc909762b330b746$export$61c6a8c84e605fb6(props){let[isOpen,setOpen]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_0__.zk)(props.isOpen,props.defaultOpen||!1,props.onOpenChange);return{isOpen,setOpen,open(){setOpen(!0)},close(){setOpen(!1)},toggle(){setOpen(!isOpen)}}}},"./node_modules/@react-stately/tooltip/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>$8796f90736e175cb$export$4d40659c25ecb50b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_stately_overlays__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-stately/overlays/dist/import.mjs");const $8796f90736e175cb$var$TOOLTIP_DELAY=1500,$8796f90736e175cb$var$TOOLTIP_COOLDOWN=500;let $8796f90736e175cb$var$tooltips={},$8796f90736e175cb$var$tooltipId=0,$8796f90736e175cb$var$globalWarmedUp=!1,$8796f90736e175cb$var$globalWarmUpTimeout=null,$8796f90736e175cb$var$globalCooldownTimeout=null;function $8796f90736e175cb$export$4d40659c25ecb50b(props={}){let{delay=$8796f90736e175cb$var$TOOLTIP_DELAY,closeDelay=$8796f90736e175cb$var$TOOLTIP_COOLDOWN}=props,{isOpen,open,close}=(0,_react_stately_overlays__WEBPACK_IMPORTED_MODULE_1__.d)(props),id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>""+ ++$8796f90736e175cb$var$tooltipId),[]),closeTimeout=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),ensureTooltipEntry=()=>{$8796f90736e175cb$var$tooltips[id]=hideTooltip},closeOpenTooltips=()=>{for(let hideTooltipId in $8796f90736e175cb$var$tooltips)hideTooltipId!==id&&($8796f90736e175cb$var$tooltips[hideTooltipId](!0),delete $8796f90736e175cb$var$tooltips[hideTooltipId])},showTooltip=()=>{clearTimeout(closeTimeout.current),closeTimeout.current=null,closeOpenTooltips(),ensureTooltipEntry(),$8796f90736e175cb$var$globalWarmedUp=!0,open(),$8796f90736e175cb$var$globalWarmUpTimeout&&(clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout),$8796f90736e175cb$var$globalWarmUpTimeout=null),$8796f90736e175cb$var$globalCooldownTimeout&&(clearTimeout($8796f90736e175cb$var$globalCooldownTimeout),$8796f90736e175cb$var$globalCooldownTimeout=null)},hideTooltip=immediate=>{immediate||closeDelay<=0?(clearTimeout(closeTimeout.current),closeTimeout.current=null,close()):closeTimeout.current||(closeTimeout.current=setTimeout((()=>{closeTimeout.current=null,close()}),closeDelay)),$8796f90736e175cb$var$globalWarmUpTimeout&&(clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout),$8796f90736e175cb$var$globalWarmUpTimeout=null),$8796f90736e175cb$var$globalWarmedUp&&($8796f90736e175cb$var$globalCooldownTimeout&&clearTimeout($8796f90736e175cb$var$globalCooldownTimeout),$8796f90736e175cb$var$globalCooldownTimeout=setTimeout((()=>{delete $8796f90736e175cb$var$tooltips[id],$8796f90736e175cb$var$globalCooldownTimeout=null,$8796f90736e175cb$var$globalWarmedUp=!1}),Math.max($8796f90736e175cb$var$TOOLTIP_COOLDOWN,closeDelay)))};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{clearTimeout(closeTimeout.current),$8796f90736e175cb$var$tooltips[id]&&delete $8796f90736e175cb$var$tooltips[id]}),[id]),{isOpen,open:immediate=>{!immediate&&delay>0&&!closeTimeout.current?(closeOpenTooltips(),ensureTooltipEntry(),isOpen||$8796f90736e175cb$var$globalWarmUpTimeout||$8796f90736e175cb$var$globalWarmedUp?isOpen||showTooltip():$8796f90736e175cb$var$globalWarmUpTimeout=setTimeout((()=>{$8796f90736e175cb$var$globalWarmUpTimeout=null,$8796f90736e175cb$var$globalWarmedUp=!0,showTooltip()}),delay)):showTooltip()},close:hideTooltip}}},"./node_modules/@react-stately/utils/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uZ:()=>$9446cca9a3875146$export$7d15b64cf5a3a4c4,zk:()=>$458b0a5536c1a7cf$export$40bfa8c7b0832715});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value,defaultValue,onChange){let[stateValue,setStateValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||defaultValue),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0!==value),wasControlled=ref.current,isControlled=void 0!==value,stateRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateValue);wasControlled!==isControlled&&console.warn(`WARN: A component changed from ${wasControlled?"controlled":"uncontrolled"} to ${isControlled?"controlled":"uncontrolled"}.`),ref.current=isControlled;let setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,...args)=>{let onChangeCaller=(value,...onChangeArgs)=>{onChange&&(Object.is(stateRef.current,value)||onChange(value,...onChangeArgs)),isControlled||(stateRef.current=value)};if("function"==typeof value){console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),setStateValue(((oldValue,...functionArgs)=>{let interceptedValue=value(isControlled?stateRef.current:oldValue,...functionArgs);return onChangeCaller(interceptedValue,...args),isControlled?oldValue:interceptedValue}))}else isControlled||setStateValue(value),onChangeCaller(value,...args)}),[isControlled,onChange]);return isControlled?stateRef.current=value:value=stateValue,[value,setValue]}function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value,min=-1/0,max=1/0){return Math.min(Math.max(value,min),max)}}}]);