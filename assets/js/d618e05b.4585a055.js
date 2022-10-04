"use strict";(self.webpackChunklemon_system_docs=self.webpackChunklemon_system_docs||[]).push([[606],{3905:(e,o,a)=>{a.d(o,{Zo:()=>c,kt:()=>d});var n=a(7294);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=n.createContext({}),m=function(e){var o=n.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},c=function(e){var o=m(e.components);return n.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(a),d=t,b=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(b,i(i({ref:o},c),{},{components:a})):n.createElement(b,i({ref:o},c))}));function d(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9758:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(7462),t=(a(7294),a(3905));const r={slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Lemon System?",authors:["jose","renzo"]},i=void 0,s={permalink:"/design-system-docs/blog/how-we-built-it",source:"@site/blog/2022-03-10-como-contruimos-lemon-system/index.md",title:"\xbfC\xf3mo contruimos Lemon System?",description:"Para el desarrollo de Lemon System, la librer\xeda UI del design system de Lemontech, hemos tomado diferentes decisiones en lo que respecta a implementaciones t\xe9cnicas. En este blog planteamos las dificultades t\xe9cnicas a las que nos vimos enfrentados y el c\xf3mo y por qu\xe9 optamos por solucionarlas.",date:"2022-03-10T00:00:00.000Z",formattedDate:"March 10, 2022",tags:[],readingTime:3.24,hasTruncateMarker:!0,authors:[{name:"Jos\xe9 N\xfa\xf1ez",title:"Lemon System Co-Creator",url:"https://github.com/josiext",imageURL:"https://avatars.githubusercontent.com/u/79015124?v=4",key:"jose"},{name:"Renzo Talenta",title:"Lemon System Co-Creator",url:"https://github.com/rtelenta",imageURL:"https://avatars.githubusercontent.com/u/13630376?s=48&v=4",key:"renzo"}],frontMatter:{slug:"how-we-built-it",title:"\xbfC\xf3mo contruimos Lemon System?",authors:["jose","renzo"]}},l={authorsImageUrls:[void 0,void 0]},m=[{value:"Estilos",id:"estilos",level:2},{value:"Definici\xf3n de Bundle",id:"definici\xf3n-de-bundle",level:2},{value:"Administrador de paquetes",id:"administrador-de-paquetes",level:2},{value:"Repositorio",id:"repositorio",level:2}],c={toc:m};function p(e){let{components:o,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Para el desarrollo de Lemon System, la librer\xeda UI del design system de Lemontech, hemos tomado diferentes decisiones en lo que respecta a implementaciones t\xe9cnicas. En este blog planteamos las dificultades t\xe9cnicas a las que nos vimos enfrentados y el c\xf3mo y por qu\xe9 optamos por solucionarlas."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 La librer\xeda sigue en desarrollo, debido a esto puede que algunos topicos escritos aqu\xed con el tiempo cambien o esten desactualizados.")),(0,t.kt)("h1",{id:"requerimientos"},"Requerimientos"),(0,t.kt)("p",null,"Los siguientes requerimientos fueron planteados para Lemon System:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Debe ser consistente con el Design System de Lemontech."),(0,t.kt)("li",{parentName:"ul"},"Debe ser facilmente adaptable en los equipos de Lemontech, considerando la conformaci\xf3n de estos en su mayor\xeda por ingenieros Full-Stacks."),(0,t.kt)("li",{parentName:"ul"},"No debe crear mayores inconvenientes al implementarla en nuevas o en aplicaciones ya creadas.")),(0,t.kt)("h1",{id:"decisiones-de-implementaci\xf3n"},"Decisiones de implementaci\xf3n"),(0,t.kt)("h2",{id:"estilos"},"Estilos"),(0,t.kt)("p",null,"Investigamos dos formas viables de implementar la estilizaci\xf3n de los componentes:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Style Props (style-system, xstyled, theme-ui)"),(0,t.kt)("li",{parentName:"ul"},"Tailwind como css-in-js (twind, twin.macro)")),(0,t.kt)("p",null,"Si bien la opci\xf3n de Style Props es comun en las librer\xedas de componentes de Javascript, quisimos optar por la opci\xf3n de css-in-js usando Twind para permitir a los desarrolladores estilizar los componentes con Tailwind mediante clases. "),(0,t.kt)("p",null,"Al probar prototipos con diferentes librer\xedas de Style Props nos dimos cuenta que, si bien, es una forma com\xfan de hacer librer\xedas, sorpresivamente, no hay librer\xeda en al comunidad open source que permita implementarlo facilmente, eso y que adem\xe1s involucrar\xeda que los equipos tuviesen que tener un mayor conocimiento en CSS es por lo cual nos decantamos por la opci\xf3n de estilizar como Tailwind."),(0,t.kt)("p",null,"El hacer una librer\xeda basada en Tailwind con Twind, es una forma novedosa e interesante de hacer una librer\xeda de UI ya que permitir\xeda a los usuarios estilizar los componentes de Lemon System tal como si hubiesen instalado Tailwind en sus aplicaciones y estuviesen estilizando sus propios componentes haciendo que tuviese un mejor recibimiento por parte de los desarrolladores internos y una mejor familiarizaci\xf3n por parte de los equipos que ya usan Tailwind en sus aplicaciones frontends."),(0,t.kt)("h2",{id:"definici\xf3n-de-bundle"},"Definici\xf3n de Bundle"),(0,t.kt)("p",null,"Para empaquetar el codigo fuente y poder distribuir la librer\xeda en npm teniamos diferentes opciones:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Webpack"),(0,t.kt)("li",{parentName:"ul"},"Rollup"),(0,t.kt)("li",{parentName:"ul"},"Esbuild")),(0,t.kt)("p",null,"Uno de los principios que tomamos al optar por soluciones son la simplicidad y la eficienca. "),(0,t.kt)("p",null,"Webpack es la soluci\xf3n m\xe1s comun actualmente para las aplicaciones web, lo usa ",(0,t.kt)("strong",{parentName:"p"},"create-react-app")," y ",(0,t.kt)("strong",{parentName:"p"},"next.js")," (por el momento) sin embargo la libertad que da para ser configurado complejiza su implementaci\xf3n en una librer\xeda donde debe ser configurado de cero, por otro lado, no es el empaquetador m\xe1s rapido por lo que la agilidad del deploy del proyecto se ver\xeda afectado. "),(0,t.kt)("p",null,"Rollup y Esbuild son dos soluciones m\xe1s contemporaneas que webpack, en ambas su implementaci\xf3n es m\xe1s sencilla y directa, sin embargo, por lejos, era mucho mayor la eficiencia en el tiempo de empaquetado que nos daba Esbuild, que por detras usa el lenguaje Go y compila a lenguaje maquina."),(0,t.kt)("p",null," ",(0,t.kt)("img",{alt:"Esbuild comparation",src:a(1529).Z,width:"853",height:"407"}),"\n",(0,t.kt)("em",{parentName:"p"},"Benchmark ",(0,t.kt)("a",{parentName:"em",href:"https://esbuild.github.io"},"https://esbuild.github.io"))),(0,t.kt)("h2",{id:"administrador-de-paquetes"},"Administrador de paquetes"),(0,t.kt)("p",null,"Como administrador de librer\xedas se tomaron en cuenta las siguientes:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"npm"),(0,t.kt)("li",{parentName:"ul"},"yarn"),(0,t.kt)("li",{parentName:"ul"},"pnpm")),(0,t.kt)("p",null,"Uno de los principios t\xe9cnicos por lo que nos guiamos para la contrucci\xf3n de Lemon System fue la simplicidad, el evitar implementaci\xf3nes que no contuviesen mayores beneficios."),(0,t.kt)("p",null,"Con respecto a Yarn, si bien, tiempo atras, era optada por usarse en vez de npm debido a que era m\xe1s eficiente como administrador de paquetes, actualmente no hay gran diferenc\xeda entre estas, y sumandole el hecho de que yarn sea algo externo a Node y no viniese con este instalado como si lo hace npm es por lo cual que lo descartamos."),(0,t.kt)("p",null,"Pnpm nos ofrecia una mayor eficiencia que npm, pero decidimos optar por esta ultima sin embargo, esto debido a que con pnpm nos encontramos con problemas de compatibilidad con otras librer\xedas debido a su forma de organizar ",(0,t.kt)("em",{parentName:"p"},"node_modules"),"."),(0,t.kt)("p",null," ",(0,t.kt)("img",{alt:"Esbuild comparation",src:a(2534).Z,width:"657",height:"270"}),"\n",(0,t.kt)("em",{parentName:"p"},"Benchmark ",(0,t.kt)("a",{parentName:"em",href:"https://pnpm.io/benchmarks"},"https://pnpm.io/benchmarks"))),(0,t.kt)("h2",{id:"repositorio"},"Repositorio"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Monorepo (turborepo)"),(0,t.kt)("li",{parentName:"ul"},"Monolito")))}p.isMDXComponent=!0},1529:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/esbuild-comparation-036e7957bf72ae4404b08a54cf545b7c.png"},2534:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/packages-comparation-ef2026a6804528eefa586fbf10d48c66.png"}}]);