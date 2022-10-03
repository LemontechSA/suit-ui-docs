"use strict";(self.webpackChunklemon_system_docs=self.webpackChunklemon_system_docs||[]).push([[606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Lemon System?",authors:["jose","renzo"]},i=void 0,s={permalink:"/design-system-docs/blog/how-we-built-it",source:"@site/blog/2022-03-10-como-contruimos-lemon-system/index.md",title:"\xbfC\xf3mo contruimos Lemon System?",description:"Para definir y desarrollar la librer\xeda UI de React de Lemon System hemos tomado diferentes decisiones t\xe9cnicas. En este blog planteamos las dificultades a las que nos vimos enfrentados y el c\xf3mo y por qu\xe9 optamos por solucionarlas.",date:"2022-03-10T00:00:00.000Z",formattedDate:"March 10, 2022",tags:[],readingTime:1.645,hasTruncateMarker:!0,authors:[{name:"Jos\xe9 N\xfa\xf1ez",title:"Lemon System Co-Creator",url:"https://github.com/josiext",imageURL:"https://avatars.githubusercontent.com/u/79015124?v=4",key:"jose"},{name:"Renzo Talenta",title:"Lemon System Co-Creator",url:"https://github.com/rtelenta",imageURL:"https://avatars.githubusercontent.com/u/13630376?s=48&v=4",key:"renzo"}],frontMatter:{slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Lemon System?",authors:["jose","renzo"]}},l={authorsImageUrls:[void 0,void 0]},u=[{value:"Estilos",id:"estilos",level:2},{value:"Definici\xf3n de Bundle",id:"definici\xf3n-de-bundle",level:2},{value:"Administrador de paquetes",id:"administrador-de-paquetes",level:2},{value:"Repositorio",id:"repositorio",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Para definir y desarrollar la librer\xeda UI de React de Lemon System hemos tomado diferentes decisiones t\xe9cnicas. En este blog planteamos las dificultades a las que nos vimos enfrentados y el c\xf3mo y por qu\xe9 optamos por solucionarlas."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 La librer\xeda sigue en desarrollo as\xed que pueden cambiar algunas cosas escritas aqu\xed con el tiempo.")),(0,r.kt)("h1",{id:"requerimientos"},"Requerimientos"),(0,r.kt)("p",null,"Los siguientes requerimientos fueron planteados para la librer\xeda UI del Design System de Lemontech:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debe ser consistente con el Design System."),(0,r.kt)("li",{parentName:"ul"},"Debe ser facilmente adaptable en los equipos de Lemontech, considerando la conformaci\xf3n de estos en su mayor\xeda por ingenieros Full-Stacks."),(0,r.kt)("li",{parentName:"ul"},"No debe crear mayores inconvenientes al implementarla en nuevas o en antiguas aplicaciones ya creadas.")),(0,r.kt)("h1",{id:"decisiones-de-implementaci\xf3n"},"Decisiones de implementaci\xf3n"),(0,r.kt)("h2",{id:"estilos"},"Estilos"),(0,r.kt)("p",null,"Dos formas de implementar la estilizaci\xf3n de los componentes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Style Props (style-system, xstyled, theme-ui)"),(0,r.kt)("li",{parentName:"ul"},"Tailwind como css-in-js (twind, twin.macro)")),(0,r.kt)("p",null,"Si bien la opci\xf3n de Style Props es comun en el mundo de las librer\xedas de componentes de Javascript, quisimos optar por la segunda opci\xf3n de css-in-js con la librer\xeda twind para permitir estilizar los componentes con Tailwind. "),(0,r.kt)("p",null,"Al probar prototipos con Style Props nos dimos cuenta que, si bien, es una forma com\xfan de hacer librer\xedas, sorpresivamente, no hay una librer\xeda en al comunidad que permita implementarlo facilmente, eso y que adem\xe1s involucrar\xeda un gran cambio en la forma de estilizar componentes por parte de los equipos internos de Lemontech nos hicieron decantarnos por la segunda opci\xf3n."),(0,r.kt)("p",null,"El hacer una librer\xeda basada en Tailwind con twind, es una forma novedosa de hacer una librer\xeda de UI, pero estabamos seguros de que iba a ser mejor recibida y por lo mismo iba a hacer m\xe1s facilmente adoptable por parte de los equipos internos de Lemontech ya que, en su mayor\xeda, estan familiarizados con el trabajar con Tailwind."),(0,r.kt)("h2",{id:"definici\xf3n-de-bundle"},"Definici\xf3n de Bundle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Webpack"),(0,r.kt)("li",{parentName:"ul"},"Rollup"),(0,r.kt)("li",{parentName:"ul"},"Esbuild")),(0,r.kt)("h2",{id:"administrador-de-paquetes"},"Administrador de paquetes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"npm"),(0,r.kt)("li",{parentName:"ul"},"yarn"),(0,r.kt)("li",{parentName:"ul"},"pnpm")),(0,r.kt)("h2",{id:"repositorio"},"Repositorio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monorepo (turborepo)"),(0,r.kt)("li",{parentName:"ul"},"Monolito")))}m.isMDXComponent=!0}}]);