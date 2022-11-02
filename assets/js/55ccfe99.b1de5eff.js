"use strict";(self.webpackChunksuit_ui_docs=self.webpackChunksuit_ui_docs||[]).push([[562],{1597:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"how-we-built-it","metadata":{"permalink":"/suit-ui-docs/blog/how-we-built-it","source":"@site/blog/2022-03-10-como-contruimos-lemon-system/index.mdx","title":"\xbfC\xf3mo contruimos Suit UI?","description":"Para el desarrollo de Suit UI, la librer\xeda de componentes del Design System de Lemontech, hemos tomado distintas decisiones con respecto a implementaciones t\xe9cnicas. En este blog planteamos las diferentes dificultades t\xe9cnicas a las que nos hemos visto enfrentados y el c\xf3mo optamos por solucionarlas.","date":"2022-03-10T00:00:00.000Z","formattedDate":"March 10, 2022","tags":[],"readingTime":6.32,"hasTruncateMarker":true,"authors":[{"name":"Jos\xe9 N\xfa\xf1ez","title":"Suit UI Co-Creator","url":"https://github.com/josiext","imageURL":"https://avatars.githubusercontent.com/u/79015124?v=4","key":"jose"},{"name":"Renzo Talenta","title":"Suit UI Co-Creator","url":"https://github.com/rtelenta","imageURL":"https://avatars.githubusercontent.com/u/13630376?s=48&v=4","key":"renzo"}],"frontMatter":{"slug":"how-we-built-it","title":"\xbfC\xf3mo contruimos Suit UI?","authors":["jose","renzo"]}},"content":"import { Box } from \\"lemon-system\\";\\nimport UI_LIBRARIES_IMAGE from \\"./ui-libraries.png\\";\\nimport LIBRARY_SUB_CATEGORIES_IMAGE from \\"./librarie-subcategories.png\\";\\nimport CODE_COMPARATION_IMAGE from \\"./code-comparation.png\\";\\nimport ESBUILD_COMPARATION_IMAGE from \\"./esbuild-comparation.png\\";\\nimport TWIND_TWIN_COMPARATION_IMAGE from \\"./twind-twin-comparation.png\\";\\nimport PACKAGE_COMPARATION_IMAGE from \\"./packages-comparation.png\\";\\n\\n<br />\\n\\nPara el desarrollo de **Suit UI**, la librer\xeda de componentes del Design System de [Lemontech](https://www.lemontech.com), hemos tomado distintas decisiones con respecto a implementaciones t\xe9cnicas. En este blog planteamos las diferentes dificultades t\xe9cnicas a las que nos hemos visto enfrentados y el c\xf3mo optamos por solucionarlas.\\n\\n\x3c!--truncate--\x3e\\n\\n<br />\\n\\n> \ud83d\udea7 Suit UI sigue en desarrollo, debido a esto puede que algunos elementos escritos aqu\xed con el tiempo cambien o est\xe9n desactualizados.\\n\\n<br />\\n\\n# Requerimientos\\n\\nLos siguientes requerimientos fueron planteados para Suit UI:\\n\\n- Debe ser consistente con el Design System de Lemontech.\\n- Debe ser facilmente adaptable en los equipos de Lemontech.\\n- No debe generar mayores inconvenientes al ser implementado en nuevas o en ya creadas aplicaciones.\\n\\n# Decisiones de implementaci\xf3n\\n\\n## Enfoque\\n\\n<br />\\n\\n<Box className=\\"flex flex-col items-center\\">\\n<img\\n  src={UI_LIBRARIES_IMAGE}\\n  width=\\"500\\"\\n  alt=\\"Categorias de las Librer\xedas UI\\"\\n/>\\n\\n_Categorias de Librer\xedas UI._\\n\\n</Box>\\n\\n<br />\\n\\nPodemos dividir las librer\xedas de componentes en tres grandes categor\xedas:\\n\\n- **CSS++**: Librer\xedas que solo entregan un CSS potenciado.\\n- **Style Systems**: Librer\xedas que solo brindan estilos.\\n- **Behavior Libraries**: Librer\xedas que solo ofrecen un manejo del comportamiento.\\n\\nTambi\xe9n existen librer\xedas que estan entre las intersecciones de estas categor\xedas y que a\xf1aden un conjunto de funcionalidades.\\n\\nCon Suit UI quer\xedamos que el [DX](https://medium.com/swlh/what-is-dx-developer-experience-401a0e44a9d9) (exp. del desarrollador) fuera igual o mejor que trabajando con[MUI](https://mui.com), [Chakra UI](https://chakra-ui.com) y [Mantine](https://mantine.dev). Por lo tanto, implementamos la misma flexibilidad que estos tienen al ser part\xedcipe de las 3 categor\xedas mencionadas.\\n\\n<br />\\n\\n<Box className=\\"flex flex-col items-center\\">\\n\\n<img\\n  src={LIBRARY_SUB_CATEGORIES_IMAGE}\\n  width=\\"350\\"\\n  alt=\\"Sub-categorias de librer\xedas UI\\"\\n/>\\n\\n_Sub-categorias de librer\xedas UI._\\n\\n</Box>\\n\\n<br />\\n\\nPara que Suit UI fuese facilmente adoptable, era necesario que su estilizaci\xf3n no fuese compleja y que no se tuviese que lograr hacer con CSS StyleSheets.\\n\\nEs por este motivo que decidimos que la estilizaci\xf3n fuese con clases de [Tailwind CSS](https://tailwindcss.com), que era algo que, en algunos equipos de Lemontech, ya estaba siendo aplicado y les facilitiba el desarrollo.\\n\\nEn Chakra UI, MUI y Mantine la estilizaci\xf3n es mediante **Style Props** (estilos como propiedad) y/o usando la convenci\xf3n **sx**, usando e inspirandose en librer\xedas como [Styled System](https://styled-system.com) y [Theme UI](https://theme-ui.com).\\n\\n<br />\\n\\n<Box className=\\"flex flex-col items-center\\">\\n\\n<img\\n  src={CODE_COMPARATION_IMAGE}\\n  width=\\"500\\"\\n  alt=\\"Las 3 formas de estilizar un componente.\\"\\n/>\\n\\n</Box>\\n\\n<br />\\n\\nEste enfoque de crear una librer\xeda la cual, aparte de brindar estilos y comportamiento, se pudiese estilizar con Tailwind CSS es novedoso y no ten\xedamos precedentes en los cuales inspirarnos.\\n\\nPor lo cual investigamos su factibilidad t\xe9cnica, probando las tres siguientes opciones como librer\xeda base de Suit UI:\\n\\n- [Tailwind CSS](https://tailwindcss.com)\\n- [Twin.macro](https://github.com/ben-rogerson/twin.macro)\\n- [Twind](https://twind.dev)\\n\\nLo primero que uno se puede preguntar es: \xbfpor qu\xe9 no usar Tailwind CSS en Suit UI? Ser\xeda la opci\xf3n ideal, pero no es algo factible de poder realizarse.\\n\\nTailwind CSS funciona con los post-procesador de CSS: [Autoprefixer](https://autoprefixer.github.io) y [PurgeCSS](https://purgecss.com), estos en conjunto pueden inyectar CSS a un fichero CSS StyleSheet para estilizar los componentes con clases de Tailwind CSS.\\n\\nDebido a lo anterior, es que usando Tailwind CSS no se le podr\xeda encargar a Suit UI la responsabilidad de configurar Tailwind CSS, sino que esta es traspasada al que implementa la librer\xeda en su aplicaci\xf3n, y lo mismo pasar\xeda con respecto a su configuraci\xf3n, que depender\xeda del framework que est\xe9 ocupando (create-react-app, Next.js, Vite, etc...)\\n\\nOtro punto a considerar es en el ambiente desarrollo de Suit UI. Para que fuese posible desarrollar con Tailwind CSS se tendr\xeda que implementar una configuraci\xf3n en la empaquetaci\xf3n del c\xf3digo fuente para poder usarse junto con Storybook, luego, crear otra configuraci\xf3n en la empaquetaci\xf3n para el bundle que ser\xeda distribuido en npm y, por \xfaltimo, se tendr\xeda que tener en cuenta el purge al implementar la librer\xeda en alguna app.\\n\\nEl conjunto de estas problem\xe1ticas nos hizo decantarnos por las opciones de Tailwind css-in-js probando Twind y Twin.macro.\\n\\n<br />\\n\\n<Box className=\\"flex flex-col items-center\\">\\n\\n<img\\n  src={TWIND_TWIN_COMPARATION_IMAGE}\\n  width=\\"600\\"\\n  alt=\\"Comparaci\xf3n entre Twin.macro y Twind\\"\\n/>\\n\\n_Comparaci\xf3n entre Twin.macro y Twind._\\n\\n</Box>\\n\\n<br />\\n\\n**Twin.macro** es una librer\xeda que funciona con una [Macro](https://github.com/kentcdodds/babel-plugin-macros) de Babel que permite estilizar componentes css-in-js usando clases de Tailwdin CSS y cuya transformaci\xf3n es hecha en la compilaci\xf3n.\\n\\nEsta alternativa, si bien es interesante para ser implementada en aplicaciones, no lo es tanto para librer\xedas. Si se implementa en una librer\xeda, como en Suit UI, y luego esta es instalada en una app, como la transformaci\xf3n de Babel es en build time, la estilizaci\xf3n con clases de Tailwind CSS que se haga en los componentes no se ver\xedan reflejados en la app.\\n\\nEn **Twind** es diferente, no es necesario una compilaci\xf3n previa y en comparaci\xf3n de otras librer\xedas css-in-js su inyecci\xf3n de CSS es [m\xe1s \xf3ptima](https://twind.dev/handbook/introduction.html#benchmarks). Por lo que usar Twind como librer\xeda base para Suit UI ser\xeda lo m\xe1s sencillo y \xf3ptimo, y es por lo cual optamos por utilizarla.\\n\\nimport { Button } from \\"lemon-system\\";\\n\\n<Button className=\\"uppercase p-10\\" onClick={() => alert(\\"Made with Twind! \ud83d\ude03\\")}>\\n  Press me!\\n</Button>\\n\\n<br />\\n<br />\\n\\n```js\\nimport { Button } from \\"lemon-system\\";\\n\\n<Button className=\\"uppercase p-10\\">Press me!</Button>;\\n```\\n\\n## Definici\xf3n de Bundle\\n\\n<br />\\n\\n<Box className=\\"flex flex-col items-center\\">\\n\\n<img src={ESBUILD_COMPARATION_IMAGE} width=\\"600\\" alt=\\"ESBuild benchmark\\" />\\n\\n_Benchmark https://esbuild.github.io_\\n\\n</Box>\\n\\n<br />\\n\\nPara empaquetar el c\xf3digo fuente y poder distribuir la librer\xeda en npm ten\xedamos diferentes opciones:\\n\\n- [Webpack](https://webpack.js.org)\\n- [Rollup](https://rollupjs.org/guide/en)\\n- [Esbuild](https://esbuild.github.io)\\n\\nWebpack es la soluci\xf3n m\xe1s com\xfan en la actualidad para empaquetar aplicaciones web, pero de poco ESBuild y Rollup han ido tomando m\xe1s espacio por su mayor eficiencia de empaquetaci\xf3n y su simplicidad al ser configurados.\\n\\nEn comparaci\xf3n con Rollup y Webpack, la alternativa de Esbuild viene listo, desde su instalaci\xf3n, para empaquetar jsx y typescript sin necesidad de configurar nada y adem\xe1s de que su rapidez para empaquetar las apps es mucho mayor que las dos alternativas previas hizo que nos decant\xe1ramos por esta opci\xf3n.\\n\\n## Administrador de paquetes\\n\\n<br />\\n\\n<Box className=\\"flex flex-col items-center\\">\\n\\n<img src={PACKAGE_COMPARATION_IMAGE} width=\\"600\\" alt=\\"Packages benchmark\\" />\\n\\n_Benchmark https://pnpm.io/benchmarks._\\n\\n</Box>\\n\\n<br />\\n\\nComo administrador de librer\xedas se tomaron en cuenta las siguientes:\\n\\n- [Npm](https://www.npmjs.com)\\n- [Yarn](https://yarnpkg.com)\\n- [Pnpm](https://pnpm.io/es)\\n\\nUno de los principios t\xe9cnicos por lo que nos guiamos para la construcci\xf3n de Suit UI fue la simplicidad, el evitar implementaciones que no contuviesen mayores beneficios.\\n\\nCon respecto a Yarn, si bien, sol\xeda optarse debido a que era m\xe1s r\xe1pido como administrador de paquetes que npm. En la actualidad no hay gran diferencia entre estas, y a\xf1adiendo el hecho de que Yarn sea externo a Node y no viniese con este instalado como si lo hace Npm es por lo cual que lo descartamos como administradorr de paquetes.\\n\\nPnpm nos ofrec\xeda una mayor eficiencia que Npm pero nos encontramos con problemas de compatibilidad con otras librer\xedas debido a su forma de organizar _node_modules_.\\n\\nLuego de haber probado las diferentes opciones, decidimos usar npm.\\n\\n## Repositorio\\n\\nPara organizar el repositorio se evaluaron dos opciones:\\n\\n- Monorepo multipaquete usando _turborepo_ [Repositorio de pruebas](https://github.com/rtelenta/test-monorepo-design-system)\\n- Unica librer\xeda [Repositorio de pruebas](https://github.com/josiext/react-library-esbuild)\\n\\nElegimos tener una _unica librer\xeda_ debido a lo simple que es de mantener y al tama\xf1o del proyecto actualmente. Por otro lado si bien un _monorepo multipaquete_ ofrece ventajas a nivel de organizaci\xf3n de paquetes y ayuda a evitar problemas entre las dependencias, el setup y el proceso de publicaci\xf3n es complejo.\\n\\nPor estas razones creemos que un _monorepo multipaquete_ es una buena opci\xf3n cuando el proyecto es muy grande, debido a lo f\xe1cil de su organizaci\xf3n. No se descarta optar por esta opci\xf3n en un futuro."}]}')}}]);