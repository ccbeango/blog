(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{412:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react中的样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react中的样式"}},[t._v("#")]),t._v(" React中的样式")]),t._v(" "),s("h2",{attrs:{id:"react中的css方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react中的css方案"}},[t._v("#")]),t._v(" React中的css方案")]),t._v(" "),s("h3",{attrs:{id:"_1-1-react中的css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-react中的css"}},[t._v("#")]),t._v(" 1.1. react中的css")]),t._v(" "),s("p",[t._v("事实上，css一直是React的痛点，也是被很多开发者吐槽、诟病的一个点。")]),t._v(" "),s("p",[t._v("在组件化中选择合适的CSS解决方案应该符合以下条件：")]),t._v(" "),s("ul",[s("li",[t._v("可以编写局部css：css具备自己的局部作用域，不会随意污染其他组件内的原生；")]),t._v(" "),s("li",[t._v("可以编写动态的css：可以获取当前组件的一些状态，根据状态的变化生成不同的css样式；")]),t._v(" "),s("li",[t._v("支持所有的css特性：伪类、动画、媒体查询等；")]),t._v(" "),s("li",[t._v("编写起来简洁方便、最好符合一贯的css风格特点；")]),t._v(" "),s("li",[t._v("等等...")])]),t._v(" "),s("p",[t._v("在这一点上，Vue做的要远远好于React：")]),t._v(" "),s("ul",[s("li",[t._v("Vue通过在.vue文件中编写 "),s("code",[t._v("<style><style>")]),t._v(" 标签来编写自己的样式；")]),t._v(" "),s("li",[t._v("通过是否添加 "),s("code",[t._v("scoped")]),t._v(" 属性来决定编写的样式是全局有效还是局部有效；")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("lang")]),t._v(" 属性来设置你喜欢的 "),s("code",[t._v("less")]),t._v("、"),s("code",[t._v("sass")]),t._v("等预处理器；")]),t._v(" "),s("li",[t._v("通过内联样式风格的方式来根据最新状态设置和改变css；")]),t._v(" "),s("li",[t._v("等等...")])]),t._v(" "),s("p",[t._v("Vue在CSS上虽然不能称之为完美，但是已经足够简洁、自然、方便了，至少统一的样式风格不会出现多个开发人员、多个项目采用不一样的样式风格。")]),t._v(" "),s("p",[t._v("相比而言，React官方并没有给出在React中统一的样式风格：")]),t._v(" "),s("ul",[s("li",[t._v("由此，从普通的css，到css modules，再到css in js，有几十种不同的解决方案，上百个不同的库；")]),t._v(" "),s("li",[t._v("大家一致在寻找最好的或者说最适合自己的CSS方案，但是到目前为止也没有统一的方案；")])]),t._v(" "),s("p",[t._v("在这篇文章中，会介绍挑选四种解决方案来介绍：")]),t._v(" "),s("ul",[s("li",[t._v("方案一：内联样式的写法；")]),t._v(" "),s("li",[t._v("方案二：普通的css写法；")]),t._v(" "),s("li",[t._v("方案三：css modules；")]),t._v(" "),s("li",[t._v("方案四：css in js（styled-components）；")])]),t._v(" "),s("h3",{attrs:{id:"普通的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通的解决方案"}},[t._v("#")]),t._v(" 普通的解决方案")]),t._v(" "),s("h4",{attrs:{id:"内联样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联样式"}},[t._v("#")]),t._v(" 内联样式")]),t._v(" "),s("p",[t._v("内联样式是官方推荐的一种css样式的写法：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("style")]),t._v(" 接受一个采用小驼峰命名属性的 JavaScript 对象，，而不是 CSS 字符串；")]),t._v(" "),s("li",[t._v("并且可以引用state中的状态来设置相关的样式；")])]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('export default class App extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      titleColor: "red"\n    }\n  }\n\n  render() {\n    return (\n      <div>\n        <h2 style={{color: this.state.titleColor, fontSize: "20px"}}>我是App标题</h2>\n        <p style={{color: "green", textDecoration: "underline"}}>我是一段文字描述</p>\n      </div>\n    )\n  }\n}\n')])])]),s("p",[t._v("内联样式的优点:")]),t._v(" "),s("ul",[s("li",[t._v("1.内联样式, 样式之间不会有冲突")]),t._v(" "),s("li",[t._v("2.可以动态获取当前state中的状态")])]),t._v(" "),s("p",[t._v("内联样式的缺点：")]),t._v(" "),s("ul",[s("li",[t._v("1.写法上都需要使用驼峰标识")]),t._v(" "),s("li",[t._v("2.某些样式没有提示")]),t._v(" "),s("li",[t._v("3.大量的样式, 代码混乱")]),t._v(" "),s("li",[t._v("4.某些样式无法编写(比如伪类/伪元素)")])]),t._v(" "),s("p",[t._v("所以官方依然是希望内联合适和普通的css来结合编写；")]),t._v(" "),s("h4",{attrs:{id:"普通的css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通的css"}},[t._v("#")]),t._v(" 普通的css")]),t._v(" "),s("p",[t._v("普通的css我们通常会编写到一个单独的文件。")]),t._v(" "),s("p",[t._v("App.js中编写React逻辑代码：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import React, { PureComponent } from 'react';\n\nimport Home from './Home';\n\nimport './App.css';\n\nexport default class App extends PureComponent {\n  render() {\n    return (\n      <div className=\"app\">\n        <h2 className=\"title\">我是App的标题</h2>\n        <p className=\"desc\">我是App中的一段文字描述</p>\n        <Home/>\n      </div>\n    )\n  }\n}\n")])])]),s("p",[t._v("App.css中编写React样式代码：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".desc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-decoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" underline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样的编写方式和普通的网页开发中编写方式是一致的：")]),t._v(" "),s("ul",[s("li",[t._v("如果我们按照普通的网页标准去编写，那么也不会有太大的问题；")]),t._v(" "),s("li",[t._v("但是组件化开发中我们总是希望组件是一个独立的模块，即便是样式也只是在自己内部生效，不会相互影响；")]),t._v(" "),s("li",[t._v("但是普通的css都属于全局的css，样式之间会相互影响；")])]),t._v(" "),s("p",[t._v("比如编写Home.js的逻辑代码：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('import React, { PureComponent } from \'react\';\n\nimport \'./Home.css\';\n\nexport default class Home extends PureComponent {\n  render() {\n    return (\n      <div className="home">\n        <h2 className="title">我是Home标题</h2>\n        <span className="desc">我是Home中的span段落</span>\n      </div>\n    )\n  }\n}\n')])])]),s("p",[t._v("又编写了Home.css的样式代码：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".desc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" purple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("最终样式之间会相互层叠，只有一个样式会生效；")]),t._v(" "),s("h4",{attrs:{id:"css-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[t._v("#")]),t._v(" css modules")]),t._v(" "),s("p",[t._v("css modules并不是React特有的解决方案，而是所有使用了类似于webpack配置的环境下都可以使用的。")]),t._v(" "),s("p",[t._v("但是，如果在其他项目中使用，那么我们需要自己来进行配置，比如配置webpack.config.js中的"),s("code",[t._v("modules: true")]),t._v("等。")]),t._v(" "),s("p",[t._v("但是React的脚手架已经内置了css modules的配置：")]),t._v(" "),s("ul",[s("li",[t._v(".css/.less/.scss 等样式文件都修改成 .module.css/.module.less/.module.scss 等；")]),t._v(" "),s("li",[t._v("之后就可以引用并且进行使用了；")]),t._v(" "),s("li",[t._v("使用代码如下")])]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import React, { PureComponent } from 'react';\nimport style from './style.module.css';\n\nexport default class Home extends PureComponent {\n  render() {\n    return (\n      <div className=\"home\">\n        <h2 className={style.title}>我是Home标题</h2>\n        <span className={style.desc}>我是Home中的span段落</span>\n      </div>\n    )\n  }\n}\n")])])]),s("p",[t._v("这种css使用方式最终生成的class名称会全局唯一：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B528.png",alt:"image-20210625104537278"}})]),t._v(" "),s("p",[t._v("css modules确实解决了局部作用域的问题，也是很多人喜欢在React中使用的一种方案。")]),t._v(" "),s("p",[t._v("但是这种方案也有自己的缺陷：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("引用的类名，不能使用连接符(.home-title)，在JavaScript中是不识别的；")])]),t._v(" "),s("li",[s("p",[t._v("所有的className都必须使用"),s("code",[t._v("{style.className}")]),t._v(" 的形式来编写；")])]),t._v(" "),s("li",[s("p",[t._v("不方便动态来修改某些样式，依然需要使用内联样式的方式；")]),t._v(" "),s("p",[t._v("如使用state中的颜色设置，就要使用内联样式")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import React, { PureComponent } from 'react';\nimport style from './style.module.css';\n\nexport default class Home extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      color: 'purple'\n    };\n  }\n\n  render() {\n    return (\n      <div className=\"home\">\n        <h2 className={style.title} style={{ color: this.state.color }} >我是Home标题</h2>\n        <span className={style.desc}>我是Home中的span段落</span>\n      </div>\n    )\n  }\n}\n")])])])])]),t._v(" "),s("p",[t._v("如果觉得上面的缺陷还算OK，那么你在开发中完全可以选择使用css modules来编写，并且也是在React中很受欢迎的一种方式。")]),t._v(" "),s("h2",{attrs:{id:"css-in-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-in-js"}},[t._v("#")]),t._v(" CSS in JS")]),t._v(" "),s("h3",{attrs:{id:"认识css-in-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识css-in-js"}},[t._v("#")]),t._v(" 认识CSS in JS")]),t._v(" "),s("p",[t._v("实际上，官方文档也有提到过CSS in JS这种方案：")]),t._v(" "),s("ul",[s("li",[t._v("“CSS-in-JS” 是指一种模式，其中 CSS 由 JavaScript 生成而不是在外部文件中定义；")]),t._v(" "),s("li",[s("em",[t._v("注意此功能并不是 React 的一部分，而是由第三方库提供。")]),t._v(" React 对样式如何定义并没有明确态度；")])]),t._v(" "),s("p",[t._v("在传统的前端开发中，我们通常会将结构（HTML）、样式（CSS）、逻辑（JavaScript）进行分离。")]),t._v(" "),s("ul",[s("li",[t._v("但是在前面的学习中，我们就提到过，React的思想中认为逻辑本身和UI是无法分离的，所以才会有了JSX的语法。")]),t._v(" "),s("li",[t._v("样式呢？样式也是属于UI的一部分；")]),t._v(" "),s("li",[t._v("事实上CSS-in-JS的模式就是一种将样式（CSS）也写入到JavaScript中的方式，并且可以方便的使用JavaScript的状态；")]),t._v(" "),s("li",[t._v("所以React有被人称之为 "),s("code",[t._v("All in JS")]),t._v("；")])]),t._v(" "),s("p",[t._v("当然，这种开发的方式也受到了很多的批评：")]),t._v(" "),s("ul",[s("li",[t._v("Stop using CSS in JavaScript for web development")]),t._v(" "),s("li",[t._v("https://hackernoon.com/stop-using-css-in-javascript-for-web-development-fa32fb873dcc")])]),t._v(" "),s("p",[t._v("不同的声音虽然有，但是在我们看来很多优秀的CSS-in-JS的库依然非常强大、方便：")]),t._v(" "),s("ul",[s("li",[t._v("CSS-in-JS通过JavaScript来为CSS赋予一些能力，包括类似于CSS预处理器一样的样式嵌套、函数定义、逻辑复用、动态修改状态等等；")]),t._v(" "),s("li",[t._v("依然CSS预处理器也具备某些能力，但是获取动态状态依然是一个不好处理的点；")]),t._v(" "),s("li",[t._v("所以，目前可以说CSS-in-JS是React编写CSS最为受欢迎的一种解决方案；")])]),t._v(" "),s("p",[t._v("目前比较流行的CSS-in-JS的库有哪些呢？")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/styled-components/styled-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("styled-components"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/emotion-js/emotion",target:"_blank",rel:"noopener noreferrer"}},[t._v("emotion"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/paypal/glamorous",target:"_blank",rel:"noopener noreferrer"}},[t._v("glamorous DEPRECATED "),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("目前可以说styled-components依然是社区最流行的CSS-in-JS库，所以以styled-components的讲解为主；")]),t._v(" "),s("h4",{attrs:{id:"标签模板字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签模板字符串"}},[t._v("#")]),t._v(" 标签模板字符串")]),t._v(" "),s("p",[t._v("ES6中增加了"),s("code",[t._v("模板字符串")]),t._v("的语法，这个对于很多人来说都会使用。")]),t._v(" "),s("p",[t._v("但是模板字符串还有另外一种用法：标签模板字符串（Tagged Template Literals）。")]),t._v(" "),s("p",[t._v("我们一起来看一个普通的JavaScript的函数：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("正常情况下，我们都是通过 "),s("code",[t._v("函数名()")]),t._v(" 方式来进行调用的，其实函数还有另外一种调用方式：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("foo"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello World")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// [["Hello World"]]')]),t._v("\n")])])]),s("p",[t._v("如果我们在调用的时候插入其他的变量：")]),t._v(" "),s("ul",[s("li",[t._v("模板字符串被拆分了；")]),t._v(" "),s("li",[t._v("第一个元素是数组，是被模块字符串拆分的字符串组合；")]),t._v(" "),s("li",[t._v("后面的元素是一个个模块字符串传入的内容；")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("foo"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// [["Hello ", ""], "tom"];')]),t._v("\n")])])]),s("p",[t._v("在styled component中，就是通过这种方式来解析模块字符串，最终生成我们想要的样式的。")]),t._v(" "),s("h4",{attrs:{id:"styled基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styled基本使用"}},[t._v("#")]),t._v(" styled基本使用")]),t._v(" "),s("p",[t._v("styled-components的本质是通过函数的调用，最终创建出一个"),s("code",[t._v("组件")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("这个组件会被自动添加上一个不重复的class；")]),t._v(" "),s("li",[t._v("styled-components会给该class添加相关的样式；")])]),t._v(" "),s("p",[t._v("比如我们正常开发出来的Home组件是这样的格式：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('import React, { PureComponent } from \'react\';\nimport styled from \'styled-components\';\n\nconst HomeWrapper = styled.div`\n  font-size: 50px;\n  color: red;\n\n  .banner {\n    background: gray;\n    li {\n      color: chartreuse;\n      &.active {\n        color: red;\n      }\n\n      &:hover {\n        color: white;\n      }\n\n      &::after {\n        content: "a";\n      }\n    }\n  }\n`;\n\nconst TitleWrapper = styled.h2`\n  text-decoration: underline;\n`;\n\nexport default class Home extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      color: \'purple\'\n    };\n  }\n\n  render() {\n    return (\n      <HomeWrapper className="home">\n        <TitleWrapper>我是Home标题</TitleWrapper>\n        <ul className="banner">\n          <li>我是Home中的span段落2</li>\n          <li className="active">我是Home中的span段落3</li>\n          <li>我是Home中的span段落4</li>\n        </ul>\n      </HomeWrapper>\n    )\n  }\n}\n')])])]),s("p",[t._v("我们希望给外层的div添加一个特殊的class，并且添加相关的样式。")]),t._v(" "),s("p",[t._v("它支持类似于CSS预处理器一样的样式嵌套：")]),t._v(" "),s("ul",[s("li",[t._v("支持直接子代选择器或后代选择器，并且直接编写样式；")]),t._v(" "),s("li",[t._v("可以通过&符号获取当前元素；")]),t._v(" "),s("li",[t._v("直接伪类选择器、伪元素等；")])]),t._v(" "),s("p",[t._v("可以看到效果如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B529.png",alt:"image-20210625114818760"}})]),t._v(" "),s("h4",{attrs:{id:"props、attrs属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props、attrs属性"}},[t._v("#")]),t._v(" props、attrs属性")]),t._v(" "),s("p",[s("strong",[t._v("props可以穿透")])]),t._v(" "),s("p",[t._v("定义一个styled组件：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const HYInput = styled.input`\n  border-color: red;\n\n  &:focus {\n    outline-color: orange;\n  }\n`\n")])])]),s("p",[t._v("使用styled的组件：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<HYInput type="password"/>\n')])])]),s("p",[s("strong",[t._v("props可以被传递给styled组件")])]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<HomeWrapper color="blue">\n</HomeWrapper>\n')])])]),s("p",[t._v("使用时可以获取到传入的color：")]),t._v(" "),s("ul",[s("li",[t._v("获取props需要通过${}传入一个插值函数，props会作为该函数的参数；")]),t._v(" "),s("li",[t._v("这种方式可以有效的解决动态样式的问题；")])]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const HomeWrapper = styled.div`\n  color: ${props => props.color};\n}\n")])])]),s("p",[s("strong",[t._v("添加attrs属性")])]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('const HYInput = styled.input.attrs({\n  placeholder: "请填写密码",\n  paddingLeft: props => props.left || "5px"\n})`\n  border-color: red;\n  padding-left: ${props => props.paddingLeft};\n\n  &:focus {\n    outline-color: orange;\n  }\n`\n')])])]),s("p",[t._v("一个完整的例子")]),t._v(" "),s("ul",[s("li",[t._v("特点")]),t._v(" "),s("li",[t._v("1.props穿透")]),t._v(" "),s("li",[t._v("2.attrs的使用")]),t._v(" "),s("li",[t._v("3.传入state作为props属性")])]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import React, { PureComponent } from 'react';\nimport styled from 'styled-components';\n\n/**\n * 特点\n *  1.props穿透\n *  2.attrs的使用\n *  3.传入state作为props属性\n */\n\nconst MyInput = styled.input.attrs({\n  placeholder: '请输入密码',\n  bColor: 'green'\n})`\n  background-color: lightblue;\n  border-color: ${props => props.bColor};\n  color: ${props => props.color};\n`;\n\nexport default class Home extends PureComponent {\n  constructor(props) {\n    super(props);\n    \n    this.state = {\n      color: 'red'\n    };\n  }\n\n  render() {\n    return (\n      <div className=\"home\">\n        <MyInput type=\"password\" color={this.state.color} />\n        <h2>我是Profile标题</h2>\n        <span>我是Profile中的span段落</span>\n      </div>\n    )\n  }\n}\n")])])]),s("h4",{attrs:{id:"styled高级特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styled高级特性"}},[t._v("#")]),t._v(" styled高级特性")]),t._v(" "),s("p",[s("strong",[t._v("支持样式的继承")])]),t._v(" "),s("p",[t._v("编写styled组件")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const HYButton = styled.button`\n  padding: 8px 30px;\n  border-radius: 5px;\n`\n\nconst HYWarnButton = styled(HYButton)`\n  background-color: red;\n  color: #fff;\n`\n\nconst HYPrimaryButton = styled(HYButton)`\n  background-color: green;\n  color: #fff;\n`\n")])])]),s("p",[t._v("按钮的使用")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<HYButton>我是普通按钮</HYButton>\n<HYWarnButton>我是警告按钮</HYWarnButton>\n<HYPrimaryButton>我是主要按钮</HYPrimaryButton>\n")])])]),s("p",[t._v("完整代码")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import React, { PureComponent } from 'react';\nimport styled from 'styled-components';\n\nconst HYButton = styled.button`\n  padding: 8px 30px;\n  border-radius: 5px;\n`\n\nconst HYWarnButton = styled(HYButton)`\n  background-color: red;\n  color: #fff;\n`\n\nconst HYPrimaryButton = styled(HYButton)`\n  background-color: green;\n  color: #fff;\n`\n\nexport default class App extends PureComponent {\n  render() {\n    return (\n      <div>\n        <HYButton>我是普通按钮</HYButton>\n        <HYWarnButton>我是警告按钮</HYWarnButton>\n        <HYPrimaryButton>我是主要按钮</HYPrimaryButton>\n      </div>\n    )\n  }\n}\n")])])]),s("p",[s("strong",[t._v("styled设置主题")])]),t._v(" "),s("p",[t._v("在全局定制自己的主题，通过Provider进行共享：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('import { ThemeProvider } from \'styled-components\';\n\n<ThemeProvider theme={{color: "red", fontSize: "30px"}}>\n  <Home />\n  <Profile />\n</ThemeProvider>\n')])])]),s("p",[t._v("在styled组件中可以获取到主题的内容：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const ProfileWrapper = styled.div`\n  color: ${props => props.theme.color};\n  font-size: ${props => props.theme.fontSize};\n`\n")])])]),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import React, { PureComponent } from 'react';\nimport Home from './home';\nimport Profile from './profile';\nimport styled, { ThemeProvider } from 'styled-components';\n\nconst HYButton = styled.button`\n  padding: 8px 30px;\n  border-radius: 5px;\n`\n\nconst HYWarnButton = styled(HYButton)`\n  background-color: red;\n  color: #fff;\n`\n\nconst HYPrimaryButton = styled(HYButton)`\n  background-color: green;\n  color: #fff;\n  // 使用主题\n  border-color: ${props => props.theme.themeColor};\n`\n\nexport default class App extends PureComponent {\n  render() {\n    return (\n      <ThemeProvider theme={{ themeColor: 'blue', fontSize: '30px' }}>\n        <Home/>\n        <Profile/>\n        <HYButton>我是普通按钮</HYButton>\n        <HYWarnButton>我是警告按钮</HYWarnButton>\n        <HYPrimaryButton>我是主要按钮</HYPrimaryButton>\n      </ThemeProvider>\n    )\n  }\n}\n")])])]),s("h3",{attrs:{id:"classnames"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classnames"}},[t._v("#")]),t._v(" classnames")]),t._v(" "),s("p",[s("strong",[t._v("vue中添加class")])]),t._v(" "),s("p",[t._v("在vue中给一个元素添加动态的class是一件非常简单的事情：")]),t._v(" "),s("p",[t._v("你可以通过传入一个对象：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div\n  class="static"\n  v-bind:class="{ active: isActive, \'text-danger\': hasError }"\n></div>\n')])])]),s("p",[t._v("你也可以传入一个数组：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div v-bind:class="[activeClass, errorClass]"></div>\n')])])]),s("p",[t._v("甚至是对象和数组混合使用：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div v-bind:class="[{ active: isActive }, errorClass]"></div>\n')])])]),s("p",[s("strong",[t._v("react中添加class")])]),t._v(" "),s("p",[t._v("React在JSX给了我们开发者足够多的灵活性，你可以像编写JavaScript代码一样，通过一些逻辑来决定是否添加某些class：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('import React, { PureComponent } from \'react\'\n\nexport default class App extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isActive: true\n    }\n  }\n\n  render() {\n    const {isActive} = this.state; \n\n    return (\n      <div>\n        <h2 className={"title " + (isActive ? "active": "")}>我是标题</h2>\n        <h2 className={["title", (isActive ? "active": "")].join(" ")}>我是标题</h2>\n      </div>\n    )\n  }\n}\n')])])]),s("p",[t._v("这个时候我们可以借助于一个第三方的库："),s("a",{attrs:{href:"https://github.com/JedWatson/classnames",target:"_blank",rel:"noopener noreferrer"}},[t._v("classnames"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("很明显，这是一个用于动态添加classnames的一个库。")])]),t._v(" "),s("p",[t._v("我们来使用一下最常见的使用案例：")]),t._v(" "),s("div",{staticClass:"language-react extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("classNames('foo', 'bar'); // => 'foo bar'\nclassNames('foo', { bar: true }); // => 'foo bar'\nclassNames({ 'foo-bar': true }); // => 'foo-bar'\nclassNames({ 'foo-bar': false }); // => ''\nclassNames({ foo: true }, { bar: true }); // => 'foo bar'\nclassNames({ foo: true, bar: true }); // => 'foo bar'\nclassNames(['foo', 'bar']); // => 'foo bar'\nclassNames(['foo', { bar: true }]); // => 'foo bar'\n\n// lots of arguments of various types\nclassNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'\n\n// other falsy values are just ignored\nclassNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);