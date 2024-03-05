/*! For license information please see Introduction-mdx.2cf9a188.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcommon_components=self.webpackChunkcommon_components||[]).push([[7509],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../epi-systems-frontend/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Introduction});__webpack_require__("../epi-systems-frontend/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../epi-systems-frontend/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const code_brackets_namespaceObject=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors_namespaceObject=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments_namespaceObject=__webpack_require__.p+"static/media/comments.a3859089.svg",direction_namespaceObject=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow_namespaceObject=__webpack_require__.p+"static/media/flow.edad2ac1.svg",plugin_namespaceObject=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo_namespaceObject=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt_namespaceObject=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",h2:"h2",h3:"h3",blockquote:"blockquote",strong:"strong"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Example/Introduction"}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"welcome-to-storybook-for-cpsc-common-components",children:"Welcome to Storybook for CPSC Common Components"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This library features react components built with the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://react-spectrum.adobe.com/react-aria/getting-started.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Aria"})," hooks library in order to ensure the highest level of accessibility compliance."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This library will be hosted and maintained in CPSC's Azure DevOps repository. The repository is located at ",(0,jsx_runtime.jsx)(_components.code,{children:"TBD"}),". To use the library in your CPSC project install with npm"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"npm install path-to-devops-repo-TBD\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"development",children:"Development"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When developing new components for this library, it's expected that developers will create their new components within the ",(0,jsx_runtime.jsx)(_components.code,{children:"/src/Components/<component-name>/"})," directory and provide ",(0,jsx_runtime.jsx)(_components.code,{children:"<component-name>.stories.js"})," files in order to document and preview their component. It is also necessary to ensure the compiled component is working as expected within an application. In order to preview the compiled component a few extra setup tasks are necessary in order to avoid loading multiple version of ",(0,jsx_runtime.jsx)(_components.code,{children:"react"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"react-dom"})," as ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/facebook/react/issues/13991",target:"_blank",rel:"nofollow noopener noreferrer",children:"documented in this issue"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"step-1---clone-and-install",children:"Step 1 - Clone and install"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["First, clone and ",(0,jsx_runtime.jsx)(_components.code,{children:"npm install"})," the repositories for both the application and the component library."]}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"step-2---create-global-links-of-react-and-react-dom-node-modules",children:["Step 2 - Create global links of ",(0,jsx_runtime.jsx)(_components.code,{children:"react"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"react-dom"})," node modules"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In the application, use ",(0,jsx_runtime.jsx)(_components.code,{children:"npm link"})," to create globally accessible link targets of the ",(0,jsx_runtime.jsx)(_components.code,{children:"react"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"react-dom"})," modules."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"~/projects/cpsc-application$ cd ./node_modules/react\n~/projects/cpsc-application$ npm link\n~/projects/cpsc-application$ cd ..\n~/projects/cpsc-application$ cd react-dom\n~/projects/cpsc-application$ npm link\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Now these modules are ready to be used in the component library"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"step-3---link-up-to-avoid-more-than-one-copy-of-react-in-the-same-app-issue",children:"Step 3 - Link up to avoid 'more than one copy of React in the same app' issue"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Now, from the common components library create the symlink to the global node modules."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"~/projects/common-components$ npm link react react-dom\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Note: It's important to include all the modules you want to link on one line. Any additional calls to ",(0,jsx_runtime.jsx)(_components.code,{children:"npm link"})," will remove previously establised links. Also, running ",(0,jsx_runtime.jsx)(_components.code,{children:"npm install"})," will clear all links. So if you have to add a new modules to a project (e.g. ",(0,jsx_runtime.jsx)(_components.code,{children:"npm install lodash"}),") you must then re-link modules again afterwards. ¯\\_(ツ)_/¯"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"step-4---link-the-component-library-to-the-app",children:"Step 4 - Link the component library to the app"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Now that the component library is using the same ",(0,jsx_runtime.jsx)(_components.code,{children:"react"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"react-dom"})," modules as your application, we're ready to link your component library to the app."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"From the component library path, create the global link reference"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"~/projects/common-components$ npm link\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"From the application path, create the symlink"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"~/projects/cpsc-application$ npm link common-components\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"step-5---build-the-component-library",children:"Step 5 - Build the component library"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["You can run the component library with Storybook (using ",(0,jsx_runtime.jsx)(_components.code,{children:"npm start"}),") for local component development, but the application is looking for the build folder specified by the 'main' property in the package.json file."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Run the build to create the library files."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"npm run build\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Now the latest changes from common-components will appear in the application. These changes will even make their way in with hot module replacement, meaning you don't have to restart the React server."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"step-6---profit",children:"Step 6 - Profit!"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["That's it. Now you should be able to ",(0,jsx_runtime.jsx)(_components.code,{children:"npm run storybook"})," to start up a local instace of Storybook, where you can see components and documentation updated in realtime. Whenever you ",(0,jsx_runtime.jsx)(_components.code,{children:"npm run build"})," this will update the compiled library used by your application, reflecting any updates you've made."]}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Note: Hot module replacement may inject duplicate copies of your style sheets. Sometimes it's good to refresh your application to clear out any possible duplicates."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"about-storybook",children:"About Storybook"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,jsx_runtime.jsx)(_components.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,jsx_runtime.jsx)(_components.code,{children:"stories"})," directory to learn how they work.\nWe recommend building UIs with a ",(0,jsx_runtime.jsx)(_components.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Configure"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:plugin_namespaceObject,alt:"plugin"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Presets for popular tools"}),"\nEasy setup for TypeScript, SCSS and more."]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:stackalt_namespaceObject,alt:"Build"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Build configuration"}),"\nHow to customize webpack and Babel"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:colors_namespaceObject,alt:"colors"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Styling"}),"\nHow to load and configure CSS libraries"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:flow_namespaceObject,alt:"flow"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Data"}),"\nProviders and mocking for data libraries"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Learn"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:repo_namespaceObject,alt:"repo"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Storybook documentation"}),"\nConfigure, customize, and extend"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:direction_namespaceObject,alt:"direction"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"In-depth guides"}),"\nBest practices from leading teams"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:code_brackets_namespaceObject,alt:"code"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"GitHub project"}),"\nView the source and add issues"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:comments_namespaceObject,alt:"comments"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Discord chat"}),"\nChat with maintainers and the community"]})})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"tip-wrapper",children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"}),"Edit the Markdown in ",(0,jsx_runtime.jsx)("code",{children:"stories/Introduction.stories.mdx"})]})})]})}const Introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../epi-systems-frontend/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../epi-systems-frontend/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../epi-systems-frontend/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../epi-systems-frontend/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);