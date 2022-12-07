"use strict";(self.webpackChunksuit_ui_docs=self.webpackChunksuit_ui_docs||[]).push([[2576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(7462),o=r(7294),i=r(3905),l=r(6178),a=r(2389);function p(e){let{children:t,fallback:r}=e;return(0,a.Z)()?o.createElement(o.Fragment,null,null==t?void 0:t()):r??null}const c={id:"Tooltip",title:"Tooltip"},u=void 0,s={unversionedId:"components/Tooltip",id:"components/Tooltip",title:"Tooltip",description:"Import",source:"@site/docs/components/tooltip.mdx",sourceDirName:"components",slug:"/components/Tooltip",permalink:"/suit-ui-docs/docs/components/Tooltip",draft:!1,tags:[],version:"current",frontMatter:{id:"Tooltip",title:"Tooltip"},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/suit-ui-docs/docs/components/Text"},next:{title:"Icons",permalink:"/suit-ui-docs/docs/icons"}},m={},d=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2}],f={toc:d};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Tooltip } from "@suit-ui/react";\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(p,{mdxType:"BrowserOnly"},(()=>(0,i.kt)(l.u,{label:"Lorem ipsum dolor sit...",shouldWrapChildren:!0,mdxType:"Tooltip"},"Hover me!"))),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="Lorem ipsum dolor sit..." shouldWrapChildren={true}>\n  Hover me!\n</Tooltip>\n')))}y.isMDXComponent=!0}}]);