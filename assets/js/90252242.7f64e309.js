"use strict";(self.webpackChunklemon_system_docs=self.webpackChunklemon_system_docs||[]).push([[883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1013:(e,t,n)=>{n.r(t),n.d(t,{BasicUsage:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(7462),r=n(7294),a=n(3905),l=n(9866);const s={id:"modal",category:"form",title:"Modal",description:"Modal component is used to trigger an action or event, such as submitting a form, opening a Modal, canceling an action, or performing a delete operation."},i=void 0,c={unversionedId:"components/modal",id:"components/modal",title:"Modal",description:"Modal component is used to trigger an action or event, such as submitting a form, opening a Modal, canceling an action, or performing a delete operation.",source:"@site/docs/components/modal.mdx",sourceDirName:"components",slug:"/components/modal",permalink:"/design-system-docs/docs/components/modal",draft:!1,tags:[],version:"current",frontMatter:{id:"modal",category:"form",title:"Modal",description:"Modal component is used to trigger an action or event, such as submitting a form, opening a Modal, canceling an action, or performing a delete operation."},sidebar:"tutorialSidebar",previous:{title:"Icon",permalink:"/design-system-docs/docs/components/icon"},next:{title:"Radio",permalink:"/design-system-docs/docs/components/radio"}},p={},d=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2}],u=()=>{const[e,t]=(0,r.useState)(!1);return(0,a.kt)(r.Fragment,null,(0,a.kt)(l.zx,{onClick:()=>t(!0),mdxType:"Button"},"Open Modal"),(0,a.kt)(l.u_,{isOpen:e,onClose:()=>t(!1),mdxType:"Modal"},(0,a.kt)(l.u_.Header,null,"Modal Header"),(0,a.kt)(l.u_.Body,null,"Modal Body"),(0,a.kt)(l.u_.Footer,null,(0,a.kt)(l.zx,{onClick:()=>t(!1),mdxType:"Button"},"Close"))))},m={toc:d,BasicUsage:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Modal } from "lemon-system";\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(u,{mdxType:"BasicUsage"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export const BasicUsage = () => {\n  const [isOpen, setIsOpen] = useState(false);\n  return (\n    <>\n      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\n      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>\n        <Modal.Header>Modal Header</Modal.Header>\n        <Modal.Body>Modal Body</Modal.Body>\n        <Modal.Footer>\n          <Button onClick={() => setIsOpen(false)}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    </>\n  );\n};\n")))}f.isMDXComponent=!0}}]);