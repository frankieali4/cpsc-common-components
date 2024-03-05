"use strict";(self.webpackChunkcommon_components=self.webpackChunkcommon_components||[]).push([[2054],{"./src/Components/Select/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Components_Select});var react=__webpack_require__("../epi-systems-frontend/node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./src/styles/inputs.scss"),__webpack_require__("./src/styles/flex.scss"),__webpack_require__("./src/styles/utilities.scss"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Select/styles.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;var jsx_runtime=__webpack_require__("../epi-systems-frontend/node_modules/react/jsx-runtime.js");const Select=props=>{const{options,errorMessage,indent="none",label,showLabel=!0,onChange,size="medium",align="left",value="",className,...restProps}=props,[selected,setSelected]=(0,react.useState)(value);(0,react.useEffect)((()=>{setSelected(value)}),[value]);return(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(["CC-input-wrapper",className,`CC-input-align-${align}`,{"CC-input-wrapper--full":"full"===size}]),children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("label",{className:`CC-flex CC-indent-${indent}`,children:[(0,jsx_runtime.jsx)("span",{className:(0,clsx.A)(["CC-label","CC-ut-nowrap",{"CC-ut-only-sr":!showLabel}]),children:label}),(0,jsx_runtime.jsx)("select",{className:(0,clsx.A)([`CC-input CC-input--${size}`,{"CC-input--error":errorMessage}]),onChange:e=>{setSelected(e.target.value),onChange&&onChange(e.target.value)},...restProps,value:selected,children:options?options.map(((option,i)=>(0,jsx_runtime.jsx)("option",{value:option.value,children:option.name},i))):(0,jsx_runtime.jsx)("option",{value:""})})]}),errorMessage&&(0,jsx_runtime.jsx)("div",{className:"CC-input-error-message",children:errorMessage})]})})};Select.displayName="Select",Select.propTypes={errorMessage:prop_types_default().string,indent:prop_types_default().oneOf(["none","tiny","small","medium","large","xlarge"]),label:prop_types_default().string.isRequired,showLabel:prop_types_default().bool,onChange:prop_types_default().func,options:prop_types_default().array.isRequired,size:prop_types_default().oneOf(["small","medium","large","xlarge","full"]),align:prop_types_default().oneOf(["left","right","center"]),className:prop_types_default().string},Select.defaultProps={indent:"none",size:"medium",align:"left",showLabel:!0};const Components_Select=Select;Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{indent:{defaultValue:{value:"'none'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'tiny'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1},{value:"'full'",computed:!1}]},required:!1},align:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'center'",computed:!1}]},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},errorMessage:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!0},onChange:{description:"",type:{name:"func"},required:!1},options:{description:"",type:{name:"array"},required:!0},className:{description:"",type:{name:"string"},required:!1}}}},"./src/Components/Table/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Components_Table});var react=__webpack_require__("../epi-systems-frontend/node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-aria/table/dist/import.mjs"),focus_dist_import=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),utils_dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),checkbox_dist_import=__webpack_require__("./node_modules/@react-aria/checkbox/dist/import.mjs"),visually_hidden_dist_import=__webpack_require__("./node_modules/@react-aria/visually-hidden/dist/import.mjs"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),table_dist_import=__webpack_require__("./node_modules/@react-stately/table/dist/import.mjs"),toggle_dist_import=__webpack_require__("./node_modules/@react-stately/toggle/dist/import.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=(__webpack_require__("./src/styles/utilities.scss"),__webpack_require__("./src/styles/icons.scss"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/styles.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;var jsx_runtime=__webpack_require__("../epi-systems-frontend/node_modules/react/jsx-runtime.js");const Table=props=>{let onRowAction,newProps={...props};props.onRowAction?._isMockFunction&&({onRowAction,...newProps}=props),props.onRowClick&&!0!==props.onRowClick?._isMockFunction&&(newProps={...newProps,selectionMode:"none"});const{children}=props;let footer;"tfoot"===children.at(-1)?.type&&(newProps.children=children.slice(0,-1),footer=children.at(-1));const{className,headerClassName,selectionMode,onClick,onRowClick,caption,hasInputElements=!1}=newProps,showSelectionCheckboxes="multiple"===selectionMode&&"replace"!==newProps.selectionBehavior,state=(0,table_dist_import.jn)({...newProps,showSelectionCheckboxes}),ref=(0,react.useRef)(),{collection}=state;let{gridProps}=(0,dist_import.K2)(newProps,state,ref);"none"===selectionMode&&delete gridProps.onKeyDownCapture;return hasInputElements&&(gridProps={}),(0,jsx_runtime.jsxs)("table",{...gridProps,ref,className:(0,clsx.A)(["CC-table",className]),onClick:e=>{onClick&&onClick(e)},children:[caption&&(0,jsx_runtime.jsx)("caption",{children:caption}),"multiple"===selectionMode&&(0,jsx_runtime.jsx)("colgroup",{children:(0,jsx_runtime.jsx)("col",{style:{width:"22px"}})}),(0,jsx_runtime.jsx)(TableRowGroup,{type:"thead",className:headerClassName,children:collection.headerRows.map((headerRow=>(0,jsx_runtime.jsx)(TableHeaderRow,{item:headerRow,state,children:[...headerRow.childNodes].map((column=>column.props?.isSelectionCell?(0,jsx_runtime.jsx)(TableSelectAllCell,{column,state},column.key):(0,jsx_runtime.jsx)(TableColumnHeader,{column,state},column.key)))},headerRow.key)))}),(0,jsx_runtime.jsx)(TableRowGroup,{type:"tbody",className:collection.body?.props?.className,children:[...collection.body.childNodes].map(((row,i)=>(0,jsx_runtime.jsx)(TableRow,{item:row,state,index:i,onClick:onRowClick,children:[...row.childNodes].map((cell=>{const columnKey=cell.column.key,column=collection.headerRows[collection.headerRows.length-1].childNodes.filter((node=>node.key===columnKey))[0],{allowsSorting,isSelectionCell,children,...options}=column?.props;return cell.props.isSelectionCell?(0,jsx_runtime.jsx)(TableCheckboxCell,{cell,state,...options},cell.key):(0,jsx_runtime.jsx)(TableCell,{cell,row:row.value,state,...options,hasInputElements},cell.key)}))},row.key)))}),footer&&(0,jsx_runtime.jsx)(TableFooter,{footer,showSelectionCheckboxes})]})};Table.displayName="Table";const TableRowGroup=props=>{const{type:Element,style,children,className}=props,{rowGroupProps}=(0,dist_import.rs)();return(0,jsx_runtime.jsx)(Element,{...rowGroupProps,style,className,children})};TableRowGroup.displayName="TableRowGroup";const TableFooter=({footer,showSelectionCheckboxes=!1})=>{const{props,...tfoot}=footer,{props:rowProps,...row}=props.children,cells=rowProps.children.map((cell=>{const{children,className,...props}=cell.props;return(0,jsx_runtime.jsx)("td",{role:"gridcell",className:(0,clsx.A)([className,"CC-table__cell"]),...props,children})}));if(showSelectionCheckboxes){const EmptyCell=()=>(0,jsx_runtime.jsx)("td",{role:"gridcell"});cells.unshift((0,jsx_runtime.jsx)(EmptyCell,{}))}return{...tfoot,props:{...props,role:"rowgroup",children:{...row,props:{...rowProps,role:"row",children:[...cells]}}}}},TableHeaderRow=props=>{const{item,state,children,className}=props,ref=(0,react.useRef)(),{rowProps}=(0,dist_import.xl)({node:item},state,ref);return(0,jsx_runtime.jsx)("tr",{...rowProps,ref,className:(0,clsx.A)(["CC-table__head",className]),children})};TableHeaderRow.displayName="TableHeaderRow";const TableColumnHeader=props=>{const{column,state}=props,ref=(0,react.useRef)();column.props||(column.props={});const{columnHeaderProps}=(0,dist_import.fA)({node:column},state,ref),{isFocusVisible,focusProps}=(0,focus_dist_import.og)();return(0,jsx_runtime.jsxs)("th",{...(0,utils_dist_import.v6)(columnHeaderProps,focusProps),colSpan:column.colspan,ref,className:(0,clsx.A)([column.props.className,"CC-table__heading",{"CC-table--highlight":isFocusVisible},{"CC-ut-align-center":column.colspan>1},{"CC-ut-align-right":"right"===column.props.align},{"CC-ut-align-center":"center"===column.props.align}]),children:[column.rendered,column.props?.allowsSorting&&(0,jsx_runtime.jsx)("i",{"aria-hidden":"true",className:(0,clsx.A)(["fa fa-sort",{"fa-sort-ascending":state.sortDescriptor&&state.sortDescriptor.column===column.key&&"ascending"===state.sortDescriptor?.direction},{"fa-sort-descending":state.sortDescriptor&&state.sortDescriptor.column===column.key&&"ascending"!==state.sortDescriptor?.direction}])})]})};TableColumnHeader.displayName="TableColumnHeader";const TableRow=props=>{const{item,children,state,index,onClick}=props,ref=(0,react.useRef)(),{rowProps,isPressed}=(0,dist_import.A3)({node:item},state,ref),{isFocusVisible,focusProps}=(0,focus_dist_import.og)();return(0,jsx_runtime.jsx)("tr",{...(0,utils_dist_import.v6)(rowProps,focusProps),ref,"data-index":index,className:(0,clsx.A)([item.props.className,"CC-table__row",{"CC-table--highlight":isFocusVisible}]),onClick:function handleClick(e){onClick&&"none"===state.selectionManager.state.selectionMode&&onClick(e,item,index)},children})};TableRow.displayName="TableRow";const TableCell=props=>{const{cell,row,state,formatter,nowrap,align,hasInputElements=!1}=props,ref=(0,react.useRef)(),{gridCellProps}=(0,dist_import.aI)({node:cell},state,ref),{isFocusVisible,focusProps}=(0,focus_dist_import.og)();let formattedText=cell.rendered;formatter&&"function"==typeof formatter&&(formattedText=formatter(formattedText,cell,row));let cellProps={tabIndex:"string"==typeof formattedText?0:gridCellProps.tabIndex};return hasInputElements||(cellProps=(0,utils_dist_import.v6)(gridCellProps,focusProps)),(0,jsx_runtime.jsx)("td",{...cellProps,ref,className:(0,clsx.A)([cell.props.className,"CC-table__cell",{"CC-table--highlight":isFocusVisible},{"CC-ut-nowrap":nowrap},{"CC-ut-align-right":"right"===align},{"CC-ut-align-center":"center"===align}]),children:formattedText})};function Checkbox(props){const ref=(0,react.useRef)(),state=(0,toggle_dist_import.H)(props),{inputProps}=(0,checkbox_dist_import.vp)(props,state,ref);return(0,jsx_runtime.jsx)("input",{...inputProps,ref})}TableCell.displayName="TableCell",Checkbox.displayName="Checkbox";const TableSelectAllCell=props=>{const{column,state}=props,ref=(0,react.useRef)(),{columnHeaderProps}=(0,dist_import.fA)({node:column},state,ref),{checkboxProps}=(0,dist_import.qj)(state);return(0,jsx_runtime.jsx)("th",{...columnHeaderProps,ref,className:(0,clsx.A)(["CC-table__heading","CC-table__heading-checkbox"]),children:"single"===state.selectionManager.selectionMode?(0,jsx_runtime.jsx)(visually_hidden_dist_import.s,{children:checkboxProps["aria-label"]}):(0,jsx_runtime.jsx)(Checkbox,{...checkboxProps})})};function TableCheckboxCell(props){const{cell,state}=props,ref=(0,react.useRef)(),{gridCellProps}=(0,dist_import.aI)({node:cell},state,ref),{checkboxProps}=(0,dist_import.BD)({key:cell.parentKey},state);return(0,jsx_runtime.jsx)("td",{...gridCellProps,ref,className:(0,clsx.A)(["CC-table__cell","CC-table__cell-checkbox"]),children:(0,jsx_runtime.jsx)(Checkbox,{...checkboxProps})})}TableSelectAllCell.displayName="TableSelectAllCell",TableCheckboxCell.displayName="TableCheckboxCell";const Components_Table=Table;Table.propTypes={className:prop_types_default().string,headerClassName:prop_types_default().string,selectionMode:prop_types_default().oneOf(["none","single","multiple"]),onSelectionChange:prop_types_default().func,onSelection:prop_types_default().func,onRowClick:prop_types_default().func,caption:prop_types_default().string,hasInputElements:prop_types_default().bool},Table.defaultProps={selectionMode:"single",hasInputElements:!1},Table.__docgenInfo={description:"This component uses react-aria `useTable` hook. Any props that can be used with `useTable` can also be used here. See https://react-spectrum.adobe.com/react-aria/useTable.html for more details.",methods:[],displayName:"Table",props:{selectionMode:{defaultValue:{value:"'single'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'single'",computed:!1},{value:"'multiple'",computed:!1}]},required:!1},hasInputElements:{defaultValue:{value:"false",computed:!1},description:"Input elements within table cells create keyboard navigation conflicts. Set this flag to `true` to turn off keyboard event listeners on the table component. Tabbed navigation will continue to work as expected.",type:{name:"bool"},required:!1},className:{description:"applied to the '&lt;table&gt;' element",type:{name:"string"},required:!1},headerClassName:{description:"applied to the '&lt;thead&gt;' element",type:{name:"string"},required:!1},onSelectionChange:{description:"",type:{name:"func"},required:!1},onSelection:{description:"",type:{name:"func"},required:!1},onRowClick:{description:"Assigning a function here will force `selectionMode: 'none'`. Callback function arguments are (e: `Event`, row: `Object`, index: `int`). _onRowClick_ should not be confused with _onRowAction_ which is built into the `react-aria` `useTable` hook for row clicks when `selectionMode: 'multiple'` is set.",type:{name:"func"},required:!1},caption:{description:"Table `<caption>` element can be used instead of the label. Useful when you want the caption to be different from the 'aria-label'",type:{name:"string"},required:!1}}}},"./src/Components/TextField/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Components_TextField});var dist_import=__webpack_require__("./node_modules/@react-aria/textfield/dist/import.mjs"),react=__webpack_require__("../epi-systems-frontend/node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./src/styles/inputs.scss"),__webpack_require__("./src/styles/utilities.scss"),__webpack_require__("./src/styles/flex.scss"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/TextField/styles.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;var jsx_runtime=__webpack_require__("../epi-systems-frontend/node_modules/react/jsx-runtime.js");const TextField=props=>{const{indent="none",type="text",size="medium",align="left",textAlign="left",label,showLabel=!0,errorMessage,className,spinner=!1,disabled}=props;let ref=(0,react.useRef)(),{labelProps,inputProps,errorMessageProps}=(0,dist_import.v)(props,ref);return(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(["CC-input-wrapper",className,`CC-input-align-${align}`,{"CC-input-wrapper--full":"full"===size}]),children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("label",{className:`CC-flex CC-indent-${indent}`,...labelProps,children:[(0,jsx_runtime.jsx)("span",{className:(0,clsx.A)(["CC-label","CC-ut-nowrap",{"CC-ut-only-sr":!showLabel}]),children:label}),(0,jsx_runtime.jsx)("input",{className:(0,clsx.A)([`CC-input CC-input--${size}`,{"CC-input-error":errorMessage},{"CC-input--no-spinner":"number"===type&&!spinner},{[`CC-ut-align-${textAlign}`]:textAlign}]),...inputProps,ref,disabled})]}),errorMessage&&(0,jsx_runtime.jsx)("div",{className:"CC-input-error-message",...errorMessageProps,children:errorMessage})]})})};TextField.displayName="TextField",TextField.propTypes={errorMessage:prop_types_default().string,indent:prop_types_default().oneOf(["none","tiny","small","medium","large","xlarge"]),label:prop_types_default().string.isRequired,size:prop_types_default().oneOf(["small","medium","large","xlarge","full"]),type:prop_types_default().oneOf(["text","password","number"]),align:prop_types_default().oneOf(["left","right","center"]),textAlign:prop_types_default().oneOf(["left","right","center"]),showLabel:prop_types_default().bool,spinner:prop_types_default().bool,className:prop_types_default().string,disabled:prop_types_default().bool},TextField.defaultProps={indent:"none",size:"medium",type:"text",align:"left",textAlign:"left",showLabel:!0,spinner:!1};const Components_TextField=TextField;TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{indent:{defaultValue:{value:"'none'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'tiny'",computed:!1},{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1},{value:"'full'",computed:!1}]},required:!1},type:{defaultValue:{value:"'text'",computed:!1},description:"",type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1},{value:"'number'",computed:!1}]},required:!1},align:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'center'",computed:!1}]},required:!1},textAlign:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'center'",computed:!1}]},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},spinner:{defaultValue:{value:"false",computed:!1},description:"Only appied when type='number'",type:{name:"bool"},required:!1},errorMessage:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!0},className:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Select/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTQgOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBzdHlsZT0iZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpOyBzdHJva2U6IHJnYigwLCAwLCAwKTsiIGQ9Ik0gMS4yIDEuNjI1IEwgNi43IDcuMTI1IEMgNi45IDcuMzI1IDcuMiA3LjMyNSA3LjQgNy4xMjUgTCAxMi45IDEuNjI1IEMgMTMuMTMxIDEuMzE4IDEyLjk0MiAwLjg3NSAxMi41NiAwLjgyOSBDIDEyLjQzMiAwLjgxNCAxMi4zMDMgMC44NDggMTIuMiAwLjkyNSBMIDcuMDUgNi4wNjUgTCAxLjkgMC45MjUgQyAxLjY2OSAwLjYxOCAxLjE5MSAwLjY3NSAxLjA0IDEuMDI5IEMgMC45NSAxLjI0MSAxLjAxNiAxLjQ4NyAxLjIgMS42MjUgWiIvPgo8L3N2Zz4="),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,`select.input{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:normal;background-position:right 6px top 50%;background-size:10px 10px;background-repeat:no-repeat;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});padding-right:20px}select.input::-ms-expand{display:none}`,"",{version:3,sources:["webpack://./src/Components/Select/styles.scss"],names:[],mappings:"AACA,aACE,uBAAA,CACA,oBAAA,CACA,eAAA,CACA,kBAAA,CACA,qCAAA,CACA,yBAAA,CACA,2BAAA,CACA,wDAAA,CACA,kBAAA,CACA,yBACE,YAAA",sourcesContent:["@use '../../styles/mixins';\nselect.input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  line-height: normal;\n  background-position: right 6px top 50%;\n  background-size: 10px 10px;\n  background-repeat: no-repeat;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTQgOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBzdHlsZT0iZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpOyBzdHJva2U6IHJnYigwLCAwLCAwKTsiIGQ9Ik0gMS4yIDEuNjI1IEwgNi43IDcuMTI1IEMgNi45IDcuMzI1IDcuMiA3LjMyNSA3LjQgNy4xMjUgTCAxMi45IDEuNjI1IEMgMTMuMTMxIDEuMzE4IDEyLjk0MiAwLjg3NSAxMi41NiAwLjgyOSBDIDEyLjQzMiAwLjgxNCAxMi4zMDMgMC44NDggMTIuMiAwLjkyNSBMIDcuMDUgNi4wNjUgTCAxLjkgMC45MjUgQyAxLjY2OSAwLjYxOCAxLjE5MSAwLjY3NSAxLjA0IDEuMDI5IEMgMC45NSAxLjI0MSAxLjAxNiAxLjQ4NyAxLjIgMS42MjUgWiIvPgo8L3N2Zz4=);\n  padding-right: 20px;\n  &::-ms-expand {\n    display: none;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/Table/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CC-table{width:100%;text-align:left;border-collapse:collapse;border:none;table-layout:auto;padding:1em}.CC-table caption{font-family:Roboto,sans-serif;font-weight:400;font-size:14px;padding-bottom:4px}.CC-table tfoot tr{border-top:1px solid #c4c4c4}.CC-table tfoot td{font-family:Roboto,sans-serif;font-weight:700}.CC-table__head{background:#ebebeb}.CC-table__heading{font-size:12px;padding:5px 10px;white-space:nowrap}.CC-table__heading[aria-sort]{cursor:pointer}.CC-table__heading i{margin-left:5px}.CC-table__row{background:#fff}.CC-table__row:nth-child(even){background:#f6f7fb}.CC-table__row:hover{background-color:#f6f0ea}.CC-table__row[aria-selected=true]{background-color:rgba(250,224,170,.5);outline:solid 1px #f6f0ea}.CC-table__row input[type=checkbox],.CC-table__row input[type=radio]{cursor:pointer}.CC-table__cell{position:relative;cursor:default;font-family:Roboto,sans-serif;font-weight:400;font-size:12px;padding:5px 10px;word-break:break-word}.CC-table--highlight,.CC-table :focus-visible{outline:2px solid #f1b33c !important}","",{version:3,sources:["webpack://./src/Components/Table/styles.scss","webpack://./src/styles/mixins.scss","webpack://./src/styles/variables.scss"],names:[],mappings:"AAMA,UACE,UAAA,CACA,eAAA,CACA,wBAAA,CACA,WAAA,CACA,iBAAA,CACA,WAAA,CAEA,kBCVA,6BAAA,CACA,eAAA,CDWE,cAAA,CACA,kBAAA,CAGF,mBACE,4BAAA,CAEF,mBCCA,6BAAA,CACA,eAAA,CDEA,gBACE,kBEfW,CFiBb,mBACE,cAAA,CACA,gBAAA,CCwBF,kBAAA,CDtBE,8BACE,cAAA,CAGF,qBACE,eAAA,CAGJ,eACE,eErCU,CFuCV,+BCeF,kBC9Ca,CFkCX,qBACE,wBEvBW,CFyBb,mCACE,qCAhDW,CAiDX,yBAAA,CAEF,qEAEE,cAAA,CAGJ,gBACE,iBAAA,CACA,cAAA,CC1DF,6BAAA,CACA,eAAA,CD2DE,cAAA,CACA,gBAAA,CACA,qBAAA,CAIF,8CAEE,oCAAA",sourcesContent:["@use 'sass:color';\n@use '../../styles/variables';\n@use '../../styles/mixins';\n\n$color-yellow-4: color.adjust(variables.$color-yellow-3, $alpha: -0.5);\n\n.CC-table {\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n  border: none;\n  table-layout: auto;\n  padding: 1em;\n\n  caption {\n    @include mixins.text-regular;\n    font-size: 14px;\n    padding-bottom: 4px;\n  }\n\n  tfoot tr {\n    border-top: 1px solid variables.$color-gray-3;\n  }\n  tfoot td {\n    @include mixins.text-bold;\n  }\n\n  &__head {\n    background: variables.$color-gray-4;\n  }\n  &__heading {\n    font-size: 12px;\n    padding: 5px 10px;\n    @include mixins.ut-nowrap;\n    &[aria-sort] {\n      cursor: pointer;\n    }\n    // the sort icons at the top of tables\n    i {\n      margin-left: 5px;\n    }\n  }\n  &__row {\n    background: variables.$color-white;\n\n    &:nth-child(even) {\n      @include mixins.zebra;\n    }\n    &:hover {\n      background-color: variables.$color-yellow-2;\n    }\n    &[aria-selected='true'] {\n      background-color: $color-yellow-4;\n      outline: solid 1px variables.$color-yellow-2;\n    }\n    input[type='checkbox'],\n    input[type='radio'] {\n      cursor: pointer;\n    }\n  }\n  &__cell {\n    position: relative;\n    cursor: default;\n    @include mixins.text-regular;\n    font-size: 12px;\n    padding: 5px 10px;\n    word-break: break-word;\n  }\n\n  // highlight selected on focus\n  &--highlight,\n  :focus-visible {\n    outline: 2px solid variables.$color-yellow-1 !important;\n  }\n}\n","@use './variables';\n// ************************* FONT FAMILIES *******************\n// done this way so that if fonts don't load the will still look somewhat okay\n@mixin text-regular {\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n}\n\n@mixin text-thin {\n  font-family: Roboto, sans-serif;\n  font-weight: 100;\n}\n\n@mixin text-medium {\n  font-family: Roboto, sans-serif;\n  font-weight: 500;\n}\n\n@mixin text-light {\n  font-family: Roboto, sans-serif;\n  font-weight: 300;\n}\n\n@mixin text-bold {\n  font-family: Roboto, sans-serif;\n  font-weight: 700;\n}\n\n@mixin text-no-results {\n  @include text-regular();\n  text-align: center;\n  font-size: 1.2rem;\n  color: variables.$color-gray-2;\n}\n\n@mixin fontawesome {\n  display: inline-block;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: auto;\n  font-style: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-variant: normal;\n  font-family: 'Font Awesome 5 Free', 'FontAwesome', sans-serif;\n  line-height: 1;\n}\n\n// use this to de-ellipsis overflow an element\n@mixin ut-word-wrap {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n}\n\n@mixin ut-nowrap {\n  white-space: nowrap;\n}\n\n@mixin zebra {\n  background: variables.$color-gray-5;\n}\n\n// ************************* MEDIA QUERIES *******************\n@mixin mq-phone {\n  @media (min-width: 0 ) and (max-width: #{variables.$phone-width}) {\n    @content;\n  }\n}\n\n@mixin mq-tablet {\n  @media (min-width: #{variables.$phone-width (+1)}) and (max-width: #{variables.$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin mq-phone-and-tablet {\n  @media (min-width: 0 ) and (max-width: #{variables.$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin mq-desktop {\n  @media (min-width: #{variables.$tablet-width + 1}) {\n    @content;\n  }\n}\n\n// ************************* UTILITY MIXINS *******************\n@mixin ut-only-sr {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n","// ********************* PATHS *********************\n$path-img: '/src/assets/images/';\n\n// ********************* COLORS *********************\n// lowest = darkest hue\n\n$color-white: #ffffff;\n$color-black: #000000;\n\n// Grays\n$color-gray-1: #333333; // Standard text color & color for all disabled text\n$color-gray-2: #767676; // Lightest allowable text; input placeholder text and helper text.\n$color-gray-3: #c4c4c4; // Form borders\n$color-gray-4: #ebebeb; // Disabled elements backgrounds\n$color-gray-5: #f6f7fb; // Page background & table zebra stripes\n$color-gray-6: #e0e6f2; // Alternative lighter color.\n\n// Blues\n$color-blue-1: #101168; // Darkerst blue\n$color-blue-2: #215295; // medium blue\n$color-blue-3: #286fa8; // lighest blue for header, footer, most headers, buttons, and links in text.\n\n// Other colors\n$color-red: #c7270f; // color for warnings, errors, or message notifications\n$color-green: #039d12; // color for finished / affirmative messages\n$color-yellow-1: #f1b33c; // active/rollover buttons or highlight location\n$color-yellow-2: #f6f0ea; // Highlight for selected rows in tables (accounting & ERVs pages)\n$color-yellow-3: #fae0aa; // tooltip bg color\n\n// the BG used for all modal overlays and the like\n$color-bg-modal: rgba(0, 0, 0, 0.75);\n\n// color for 508 focus around elements\n$color-focus: pink; // undecided. TODO: pick a color\n\n$color-divider: rgba(255, 255, 255, 0.25); //the semi-translucent dividers used in header & footer\n\n// ********************* BOX SHADOWS *********************\n$box-shadow-color-focus: 0px 0px 5px $color-focus;\n\n// ********************* BORDER RADIUS *********************\n$border-radius: 4px;\n$border-radius-forms: 0px;\n\n// ********************* STANDARD MARGINS *********************\n\n$margin-horz-desktop: 32px;\n$margin-horz-phone: 12px;\n\n$margin-vert-desktop: 24px;\n$margin-vert-phone: 12px;\n\n// ********************* VIEWPORTS FOR MEDIA QUERIES *********************\n$phone-width: 480px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n$giant-desktop-width: 1600px;\n\n// ********************* FONTS *********************\n$text-thin: 'roboto-thin', Roboto, sans-serif;\n$text-light: 'roboto-light', Roboto, sans-serif;\n$text-regular: 'roboto-regular', Roboto, sans-serif;\n$text-medium: 'roboto-medium', Roboto, sans-serif;\n$text-bold: 'roboto-bold', Roboto, sans-serif;\n\n// ********************* FORM ELEMENTS *********************\n$height-form-elements: 22px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Components/TextField/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CC-input--no-spinner::-webkit-outer-spin-button,.CC-input--no-spinner::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.CC-input--no-spinner[type=number]{-moz-appearance:textfield}","",{version:3,sources:["webpack://./src/Components/TextField/styles.scss"],names:[],mappings:"AAEA,kGAEE,uBAAA,CACA,QAAA,CAIF,mCACE,yBAAA",sourcesContent:["@use '../../styles/mixins';\n/* Chrome, Safari, Edge, Opera */\n.CC-input--no-spinner::-webkit-outer-spin-button,\n.CC-input--no-spinner::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\n.CC-input--no-spinner[type='number'] {\n  -moz-appearance: textfield;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTQgOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBzdHlsZT0iZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpOyBzdHJva2U6IHJnYigwLCAwLCAwKTsiIGQ9Ik0gMS4yIDEuNjI1IEwgNi43IDcuMTI1IEMgNi45IDcuMzI1IDcuMiA3LjMyNSA3LjQgNy4xMjUgTCAxMi45IDEuNjI1IEMgMTMuMTMxIDEuMzE4IDEyLjk0MiAwLjg3NSAxMi41NiAwLjgyOSBDIDEyLjQzMiAwLjgxNCAxMi4zMDMgMC44NDggMTIuMiAwLjkyNSBMIDcuMDUgNi4wNjUgTCAxLjkgMC45MjUgQyAxLjY2OSAwLjYxOCAxLjE5MSAwLjY3NSAxLjA0IDEuMDI5IEMgMC45NSAxLjI0MSAxLjAxNiAxLjQ4NyAxLjIgMS42MjUgWiIvPgo8L3N2Zz4=":module=>{module.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTQgOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBzdHlsZT0iZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpOyBzdHJva2U6IHJnYigwLCAwLCAwKTsiIGQ9Ik0gMS4yIDEuNjI1IEwgNi43IDcuMTI1IEMgNi45IDcuMzI1IDcuMiA3LjMyNSA3LjQgNy4xMjUgTCAxMi45IDEuNjI1IEMgMTMuMTMxIDEuMzE4IDEyLjk0MiAwLjg3NSAxMi41NiAwLjgyOSBDIDEyLjQzMiAwLjgxNCAxMi4zMDMgMC44NDggMTIuMiAwLjkyNSBMIDcuMDUgNi4wNjUgTCAxLjkgMC45MjUgQyAxLjY2OSAwLjYxOCAxLjE5MSAwLjY3NSAxLjA0IDEuMDI5IEMgMC45NSAxLjI0MSAxLjAxNiAxLjQ4NyAxLjIgMS42MjUgWiIvPgo8L3N2Zz4="}}]);