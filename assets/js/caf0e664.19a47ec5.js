"use strict";(self.webpackChunklemon_system_docs=self.webpackChunklemon_system_docs||[]).push([[258],{2377:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"how-we-built-it","metadata":{"permalink":"/design-system-docs/blog/how-we-built-it","source":"@site/blog/2022-03-10-como-contruimos-lemon-system/index.mdx","title":"\xbfC\xf3mo contruimos Lemon System?","description":"Para el desarrollo de Lemon System, la librer\xeda UI del design system de Lemontech, hemos tomado diferentes decisiones en lo que respecta a implementaciones t\xe9cnicas. En este blog planteamos las dificultades t\xe9cnicas a las que nos vimos enfrentados y el c\xf3mo y por qu\xe9 optamos por solucionarlas.","date":"2022-03-10T00:00:00.000Z","formattedDate":"March 10, 2022","tags":[],"readingTime":5.795,"hasTruncateMarker":true,"authors":[{"name":"Jos\xe9 N\xfa\xf1ez","title":"Lemon System Co-Creator","url":"https://github.com/josiext","imageURL":"https://avatars.githubusercontent.com/u/79015124?v=4","key":"jose"},{"name":"Renzo Talenta","title":"Lemon System Co-Creator","url":"https://github.com/rtelenta","imageURL":"https://avatars.githubusercontent.com/u/13630376?s=48&v=4","key":"renzo"}],"frontMatter":{"slug":"how-we-built-it","title":"\xbfC\xf3mo contruimos Lemon System?","authors":["jose","renzo"]}},"content":"import UI_LIBRARIES_IMAGE from \\"./ui-libraries.png\\";\\nimport LIBRARY_SUB_CATEGORIES_IMAGE from \\"./librarie-subcategories.png\\";\\n\\nPara el desarrollo de Lemon System, la librer\xeda UI del design system de Lemontech, hemos tomado diferentes decisiones en lo que respecta a implementaciones t\xe9cnicas. En este blog planteamos las dificultades t\xe9cnicas a las que nos vimos enfrentados y el c\xf3mo y por qu\xe9 optamos por solucionarlas.\\n\\n\x3c!--truncate--\x3e\\n\\n> \ud83d\udea7 La librer\xeda sigue en desarrollo, debido a esto puede que algunos topicos escritos aqu\xed con el tiempo cambien o esten desactualizados.\\n\\n# Requerimientos\\n\\nLos siguientes requerimientos fueron planteados para Lemon System:\\n\\n- Debe ser consistente con el Design System de Lemontech.\\n- Debe ser facilmente adaptable en los equipos de Lemontech.\\n- No debe crear mayores inconvenientes al ser implemenado en nuevas o ya creadas aplicaciones.\\n\\n# Decisiones de implementaci\xf3n\\n\\n## Enfoque\\n\\n<br />\\n\\n<img\\n  src={UI_LIBRARIES_IMAGE}\\n  width=\\"600\\"\\n  alt=\\"Clasificaci\xf3n de Librer\xedas m\xe1s populares de UI\\"\\n/>\\n\\n_Clasificaci\xf3n de Librer\xedas m\xe1s populares de UI._\\n\\n<br />\\n\\nExisten variados enfoques para definir una librer\xeda de interfaces, las cuales las podemos dividir en tres grandes grupos: Las librer\xedas que entregan un CSS potenciado con nuevas funcionalidades (CSS++), librer\xedas que solamente brindan estilos a los componentes (Style Systems) y librer\xedas que ofrecen un manejo del comportamiento de los componentes (Behavior Libraries).\\n\\nLa necesidad principales que se quer\xeda cubrir era la de acelerar los desarrollos internos y crear una forma de que estos sean consistentes con el Design System de Lemontech en las diferentes aplicaciones que se desarrollasen, por esto, la mejor opci\xf3n era optar por una librer\xeda que cubriese las 3 categor\xedas mencionadas, tal como lo hace [MUI](https://mui.com), la librer\xeda UI de React de Google, que brinda tanto nuevas opciones de implementaci\xf3n de CSS, estilos por defecto y un ya implementado comportamiento para los componentes de la librer\xeda.\\n\\n<br />\\n\\n<img\\n  src={LIBRARY_SUB_CATEGORIES_IMAGE}\\n  width=\\"400\\"\\n  alt=\\"Sub-categorias de librer\xedas\\"\\n/>\\n\\n_Sub-categorias de librer\xedas._\\n\\n<br />\\n\\nUna de los puntos a considerar para que la librer\xeda fuese facilmente adoptada\\nera que su estilizaci\xf3n no fuese dificil y preferiblemente que no se tuviese que\\ncrear CSS StyleSheets sino que fuese simplemente con clases de Tailwind CSS, que\\nera algo que en ciertos equipos ya estaban acostumbrados y les facilitiba el\\ndesarrollo.\\n\\nEn las librer\xedas investigadas: Chakra UI, MUI y Mantine. La estilizaci\xf3n es mediante estilos como propiedad (Style Props) usando/inspirandose en librer\xedas como [Styled System](https://styled-system.com) y [Theme UI](https://theme-ui.com)\\n\\n![Esbuild comparation](./code-comparation.png)\\n_Sub-categorias de librer\xedas._\\n\\nEste enfoque de crear una librer\xeda la cual, aparte de brindar estilos y comportamiento, se pudiese estilizar con Tailwind CSS es novedoso y no teniamos presedentes en los cuales inspirarnos, por lo cual hicimos una investigaci\xf3n al respecto para probar su factibilidad t\xe9cnica.\\n\\n- Tailwind CSS\\n- Twin.macro\\n- Twind\\n\\nLo primero que se puede pensar es: \xbfpor qu\xe9 no usar simplemente Tailwind CSS?. Es una pregunta totalmente valida pero que lastitamente resulta dificil el implementarlo.\\n\\n[Tailwind CSS](https://tailwindcss.com) en una aplicaci\xf3n de React funciona con los post-procesador de CSS: [Autoprefixer](https://autoprefixer.github.io) y [PurgeCSS](https://purgecss.com) . Juntos pueden inyectar css a un fichero CSS StyleSheet con las clases de Tailwind CSS que son usadas en la app.\\n\\nLa principal complicaci\xf3n t\xe9cnica que tiene el implementar Tailwind CSS en la librer\xeda directamente es que es imperioso para Tailwind inyectar CSS en un CSS StyleSheet ya que este trabaja con un postCSS.\\n\\nDebido a lo anterior, este proceso ya no se le puede encargar a la librer\xeda sino que la responsabilidad de configurar Tailwind CSS es traspasada al que implementa la librer\xeda en su aplicaci\xf3n, y lo mismo con respecto a su configuraci\xf3n, que depender\xeda del framework que este ocupando (create-react-app, Next.js, Vite, etc...).\\n\\nOtro punto a considerar es en el ambiente desarrollo, en este se tendr\xeda que implementar una configuraci\xf3n en la empaquetaci\xf3n del c\xf3digo fuente para poder userse junto con Storybook, luego, su propia configuraci\xf3n en la empaquetaci\xf3n para el bundle que ser\xeda distribuido en npm y, por \xfaltimo, se tendr\xeda que tener en cuenta el purge que hace Tailwind.\\n\\nEl conjunto de estas problematicos nos hizo decantarnos por las opciones de Tailwind css-in-js como [Twind](https://twind.dev) y [Twin.macro](https://github.com/ben-rogerson/twin.macro).\\n\\n![Esbuild comparation](./twind-twin-comparation.png)\\n_Comparaci\xf3n entre Twin.macro y Twind._\\n\\nTwin.macro es una librer\xeda que funciona con una [Macro](https://github.com/kentcdodds/babel-plugin-macros) de Babel que permite crear componentes css-in-js usando clases de Tailwdin CSS, esta transformaci\xf3n es hecha en la compilaci\xf3n.\\n\\nEsta alternativa si bien es interesante para ser implementada en aplicaciones no lo es tanto para librer\xedas. Si se implementa en una librer\xeda y luego esta es instalada en una app, como la transformaci\xf3n de Babel es en build time, la estilizaci\xf3n con clases de Tailwind CSS que se haga en los componentes no se ver\xedan reflejados.\\n\\nEn **Twind** es diferente, no es necesario una compilaci\xf3n previa y en comparaci\xf3n de otras librer\xedas css-in-js su inyecci\xf3n de CSS es [m\xe1s optima](https://twind.dev/handbook/introduction.html#benchmarks). Por lo que usar Twind facilmente permitir\xeda estilizar los componentes de Lemon System con clases de Tailwind CSS y es por la opcion por la que optamos.\\n\\nimport { Button } from \\"lemon-system\\";\\n\\n<Button className=\\"uppercase p-10\\" onClick={() => alert(\\"Made with Twind! \ud83d\ude03\\")}>\\n  Press me!\\n</Button>\\n\\n<br />\\n<br />\\n\\n```js\\nimport { Button } from \\"lemon-system\\";\\n\\n<Button className=\\"uppercase p-10\\">Press me!</Button>;\\n```\\n\\n## Definici\xf3n de Bundle\\n\\nPara empaquetar el codigo fuente y poder distribuir la librer\xeda en npm teniamos diferentes opciones:\\n\\n- Webpack\\n- Rollup\\n- Esbuild\\n\\nUno de los principios que tomamos al optar por soluciones son la simplicidad y la eficienca.\\n\\nWebpack es la soluci\xf3n m\xe1s comun actualmente para las aplicaciones web, lo usa **create-react-app** y **next.js** (por el momento) sin embargo la libertad que da para ser configurado complejiza su implementaci\xf3n en una librer\xeda donde debe ser configurado de cero, por otro lado, no es el empaquetador m\xe1s rapido por lo que la agilidad del deploy del proyecto se ver\xeda afectado.\\n\\nRollup y Esbuild son dos soluciones m\xe1s contemporaneas que webpack, en ambas su implementaci\xf3n es m\xe1s sencilla y directa, sin embargo, por lejos, era mucho mayor la eficiencia en el tiempo de empaquetado que nos daba Esbuild, que por detras usa el lenguaje Go y compila a lenguaje maquina.\\n\\n![Esbuild comparation](./esbuild-comparation.png)\\n_Benchmark https://esbuild.github.io_\\n\\n## Administrador de paquetes\\n\\nComo administrador de librer\xedas se tomaron en cuenta las siguientes:\\n\\n- npm\\n- yarn\\n- pnpm\\n\\nUno de los principios t\xe9cnicos por lo que nos guiamos para la contrucci\xf3n de Lemon System fue la simplicidad, el evitar implementaci\xf3nes que no contuviesen mayores beneficios.\\n\\nCon respecto a Yarn, si bien, tiempo atras, era optada por usarse en vez de npm debido a que era m\xe1s eficiente como administrador de paquetes, actualmente no hay gran diferenc\xeda entre estas, y sumandole el hecho de que yarn sea algo externo a Node y no viniese con este instalado como si lo hace npm es por lo cual que lo descartamos.\\n\\nPnpm nos ofrecia una mayor eficiencia que npm, pero decidimos optar por esta ultima sin embargo, esto debido a que con pnpm nos encontramos con problemas de compatibilidad con otras librer\xedas debido a su forma de organizar _node_modules_.\\n\\n![Esbuild comparation](./packages-comparation.png)\\n_Benchmark https://pnpm.io/benchmarks_\\n\\n## Repositorio\\n\\n- Monorepo (turborepo)\\n- Monolito\\n\\n_En contrucci\xf3n..._"}]}')}}]);