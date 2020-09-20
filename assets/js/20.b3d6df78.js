(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{522:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("img",{attrs:{src:"/images/bibao.png",width:"100%",height:"100%"}})]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("作为一名前端开发者，提起JavaScript中的语言特性，我们常常会想起闭包、Event Loop以及原型链等其他特性。最近为了彻底理清闭包，我翻开了一本黄色的JS武林秘籍——《你不知道的JavaScript（上卷）》。")]),t._v(" "),s("h2",{attrs:{id:"为什么需要闭包？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要闭包？"}},[t._v("#")]),t._v(" 为什么需要闭包？")]),t._v(" "),s("p",[t._v("首先我先来思考一个问题，那么闭包到底有什么用呢？知道了它的用处，我才会有更多的动力去学习它。")]),t._v(" "),s("p",[t._v("闭包的左右有以下几点：")]),t._v(" "),s("ul",[s("li",[t._v("变量长期驻扎在内存中")]),t._v(" "),s("li",[t._v("避免全局变量的污染")]),t._v(" "),s("li",[t._v("私有成员的存在")]),t._v(" "),s("li",[t._v("模块化封装,以及HOC等")])]),t._v(" "),s("h2",{attrs:{id:"什么是闭包？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包？"}},[t._v("#")]),t._v(" 什么是闭包？")]),t._v(" "),s("p",[t._v("根据书中所讲，一句话概括闭包的话就是：“"),s("strong",[t._v("当函数在当前词法作用域之外执行")]),t._v("。"),s("strong",[t._v("但可以记住并访问所在的词法作用域时，就产生了闭包")]),t._v("”。那么什么是“词法作用域”呢？什么又是“作用域”呢？别慌，且听我一一道来。")]),t._v(" "),s("h2",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),s("p",[s("strong",[t._v("负责收集并维护由所有声明的标识符（变量）组成的一系列查询")]),t._v("，**并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问。**作用域又分为词法作用域（静态作用域）和动态作用域两种，"),s("strong",[t._v("两者最重要的区别在于作用域规则是在什么时候确定的？在函数定义时就确定的被称为静态作用域（词法作用域），相对的，在函数调用时就确定的则被称为动态作用域")]),t._v("。JavaScript的作用域（包括大多数主流的语言如C、C++、Java等）就是词法作用域。")]),t._v(" "),s("h2",{attrs:{id:"静态作用域为什么又叫词法作用域呢？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态作用域为什么又叫词法作用域呢？"}},[t._v("#")]),t._v(" 静态作用域为什么又叫词法作用域呢？")]),t._v(" "),s("p",[t._v("大部分标准语言编译器的第一个工作阶段叫作词法化（也叫单词化）。词法化的过程会对源代码中的字符进行检查，如果是有状态的解析过程，还会赋予单词语义。静态作用域是由你在写代码时将变量和块作用域写在哪里来决定的，"),s("strong",[t._v("它是定义在词法阶段的作用域")]),t._v("。当词法分析器处理代码时会保持作用域不变（大部分情况下是这样的），因此静态作用域也被称为词法作用域。")]),t._v(" "),s("h2",{attrs:{id:"闭包是怎样产生的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包是怎样产生的？"}},[t._v("#")]),t._v(" 闭包是怎样产生的？")]),t._v(" "),s("p",[t._v("明白了词法作用域之后，我们知道词法作用域是"),s("strong",[t._v("在函数定义时就基本能够知道全部标识符在哪里以及是如何声明的")]),t._v("。那么我们还需要满足书中所说的另外一个必要条件——"),s("strong",[t._v("“在当前词法作用域之外执行”")]),t._v("。这个执行过程到底是什么样的呢？接下来，我门来介绍一下，执行过程中六个重要的角色。")]),t._v(" "),s("h3",{attrs:{id:"_1、ec（execution-context-执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、ec（execution-context-执行上下文"}},[t._v("#")]),t._v(" "),s("strong",[t._v("1、EC（Execution Context)执行上下文")])]),t._v(" "),s("p",[t._v("先上一波官方的抽象概念：执行上下文是ECMA-262规范用来对可执行代码进行类型化和区分的抽象概念。")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("Execution context (abbreviated form — EC)")]),t._v(" is the abstract concept used by ECMA-262 specification for typification and differentiation of an executable code.")])]),t._v(" "),s("p",[t._v("更通俗地将，当我们的代码执行时，会进入到不同的上下文环境（Context）。在不同的环境中，有着不同的 作用域链、this指向，代码所能访问到的资源也就不同。在JS中，执行环境有如下三种情况：")]),t._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"全局环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局环境"}},[t._v("#")]),t._v(" 全局环境")]),t._v(" "),s("p",[t._v("代码默认运行的环境，代码执行时会首先进入全局环境。它是最外围的一个执行环境，根据 ECMAScript 实现所在的宿主环境的不同，表示全局环境的对象也不一样。在 web 浏览器中，全局环境就是 window 对象。全局变量和函数都是作为全局对象 window 的变量和方法来创建的。在Node环境中，全局环境则为global对象。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"函数环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数环境"}},[t._v("#")]),t._v(" 函数环境")]),t._v(" "),s("p",[t._v("函数被调用执行时，所创建的执行环境。")])]),t._v(" "),s("li",[s("h4",{attrs:{id:"eval环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eval环境"}},[t._v("#")]),t._v(" eval环境")]),t._v(" "),s("p",[t._v("使用 eval 会进入一个新的执行环境，它的变量对象为全局变量对象或调用者的变量对象。由于 eval 的毒瘤属性，一般不推荐使用，可忽略。")]),t._v(" "),s("p",[t._v("一个执行上下文的生命周期可以分为两个阶段：")]),t._v(" "),s("p",[t._v("1、"),s("strong",[t._v("创建阶段")]),t._v(" 在这个阶段中，执行上下文会分别")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("创建变量对象")])]),t._v(" "),s("li",[s("strong",[t._v("建立作用域链")])]),t._v(" "),s("li",[s("strong",[t._v("以及确定this的指向")])])])])]),t._v(" "),s("p",[t._v("2、"),s("strong",[t._v("代码执行阶段")]),t._v(" 创建完成之后，就会开始执行代码，这个时候，"),s("strong",[t._v("会完成变量赋值，函数引用")]),t._v("，以及执行其他代码。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("![ec](\\images\\ec.png)\n")])])]),s("p",[t._v("​")]),t._v(" "),s("p",[t._v("有了执行上下文，则需要需要一个空间来存放并执行它，这个时候就需要用到我的"),s("code",[t._v("ECStack执行上下文环境栈")]),t._v(",顾名思义"),s("code",[t._v("执行上下文环境栈")]),t._v("是一个栈内存空间，当我们执行不同的函数时，都会创造新的执行上下文，同时需要压入"),s("code",[t._v("执行上下文环境栈")]),t._v("。执行完毕后，则需要进行出栈操作（全局执行上下文，始终都在栈底部，一般情况下，只有浏览器关闭时，才会出栈）。")]),t._v(" "),s("p",[t._v("下一节将详细介绍ECStack执行上下文环境栈 （Execution Context Stack）。")]),t._v(" "),s("h3",{attrs:{id:"_2、ecstack执行上下文环境栈-（execution-context-stack）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、ecstack执行上下文环境栈-（execution-context-stack）"}},[t._v("#")]),t._v(" 2、ECStack执行上下文环境栈 （Execution Context Stack）")]),t._v(" "),s("p",[t._v("浏览器在内存中专门开辟了一块"),s("strong",[t._v("栈")]),t._v("内存为JS提供了代码执行环境，这个环境被称作 ECStack执行上下文环境栈 。 浏览器中的JavaScript解释器是单线程实现的，这意味着在浏览器中一次只能发生一件事情，其它动作或事件在所谓的"),s("code",[t._v("执行上下文环境栈")]),t._v("中排队。")]),t._v(" "),s("blockquote",[s("p",[t._v("在debugger的过程中，我可以在开发者工具—sources这一栏中看到Call Stack，它会显示ECStack执行上下文环境栈的函数调用栈信息")]),t._v(" "),s("p",[s("img",{attrs:{src:"%5Cimages%5Ccallstack.png",alt:"callstack"}})])]),t._v(" "),s("p",[s("strong",[t._v("关于"),s("code",[t._v("执行上下文环境栈")]),t._v("有五个关键点：")])]),t._v(" "),s("ol",[s("li",[t._v("单线程")]),t._v(" "),s("li",[t._v("同步执行，只有栈顶的上下文处于执行中，其他上下文需要等待")]),t._v(" "),s("li",[t._v("1个全局上下文，它在浏览器关闭时出栈")]),t._v(" "),s("li",[t._v("无限的函数上下文")]),t._v(" "),s("li",[t._v("每个函数调用都会创建一个新的"),s("code",[t._v("执行上下文")]),t._v("，甚至是调用自身")])]),t._v(" "),s("h3",{attrs:{id:"_3、变量对象vo（varibale-object）和-活动对象ao（activation-object）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、变量对象vo（varibale-object）和-活动对象ao（activation-object）"}},[t._v("#")]),t._v(" "),s("strong",[t._v("3、变量对象VO（Varibale Object）和 活动对象AO（Activation Object）")])]),t._v(" "),s("p",[s("strong",[t._v("在当前的上下文中，用来存放创建变量的和值的地方。就被称作变量对象VO（Varibale Object）")]),t._v("。 AO（Activation Object）是特殊的VO（Varibale Object），它存在于函数的上下文中，当该函数被执行也就是出于调用栈栈顶时，函数中的变量对象VO就会被激活成为活动对象AO。")]),t._v(" "),s("p",[t._v("变量对象的创建，依次经历了以下几个过程。")]),t._v(" "),s("ol",[s("li",[t._v("**建立arguments对象。**检查当前上下文中的参数，建立该对象下的属性与属性值。")]),t._v(" "),s("li",[s("strong",[t._v("检查当前上下文的函数声明")]),t._v("，也就是使用function关键字声明的函数。在变量对象中以函数名建立一个属性，属性值为指向该函数所在内存地址的引用。如果函数名的属性已经存在，那么该属性将会被新的引用所覆盖。")]),t._v(" "),s("li",[s("strong",[t._v("检查当前上下文中的变量声明")]),t._v("，每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为undefined。如果该变量名的属性已经存在，"),s("strong",[t._v("为了防止同名的函数被修改为undefined，则会直接跳过，原属性值不会被修改。")])])]),t._v(" "),s("h3",{attrs:{id:"_4、全局对象go（global-object）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、全局对象go（global-object）"}},[t._v("#")]),t._v(" "),s("strong",[t._v("4、全局对象GO（Global Object）")])]),t._v(" "),s("p",[t._v("除了上述两个对象外，还存在一个特殊的全局对象GO（Global Object），浏览器会把一些内置的方法单独地存放在其中。用伪代码可以进行如下的表示：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" globaObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Math"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Strign"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5、作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、作用域"}},[t._v("#")]),t._v(" "),s("strong",[t._v("5、作用域")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JavaScript中只有全局作用域和函数作用域以及ES6中添加的块级作用域(因为eval我们平时开发中几乎不会用到它，这里不讨论)。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("作用域与执行上下文是完全不同的两个概念。我知道很多人会混淆他们，但是一定要仔细区分。")])]),t._v(" "),s("p",[t._v("JavaScript代码的整个执行过程，分为两个阶段，代码编译阶段与代码执行阶段。"),s("strong",[t._v("编译阶段****由编译器完成")]),t._v("，将代码翻译成可执行代码，"),s("strong",[t._v("这个阶段作用域规则会确定。"),s("strong",[t._v("执行阶段由引擎完成")]),t._v("，主要任务是执行可执行代码，执行上下文在这个阶段创建")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"%5Cimages%5Cscope_ec.png",alt:"scope_ec"}})])])]),t._v(" "),s("blockquote",[s("p",[t._v("我们可以在debugger时，在控制台中查看到这个[[Scope]]属性。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5Cscope.png",alt:"scope"}})])]),t._v(" "),s("h3",{attrs:{id:"_6、作用域链（scope-chain）-和-scopes-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、作用域链（scope-chain）-和-scopes-属性"}},[t._v("#")]),t._v(" **6、作用域链（Scope Chain）**和[[Scopes]]属性")]),t._v(" "),s("p",[t._v("执行上下文中的词法环境中含有外部词法环境的引用，我们可以通过这个引用获取外部词法环境的变量、声明等，这些引用串联起来一直指向全局的词法环境，因此形成了作用域链。"),s("strong",[t._v("它是由当前环境与上层环境的一系列变量对象组成，它保证了当前执行环境对符合访问权限的变量和函数的有序访问。")])]),t._v(" "),s("p",[t._v("实际上JS中的函数都存在一个虚拟出来的[[Scope]]属性，这个属性保存着函数在执行上下文时创建的变量对象和函数的自身的变量对象，在创建函数的时候，就会赋予其[[Scope]]属性,它可以显示当函数的作用域链。")]),t._v(" "),s("h3",{attrs:{id:"示例："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例："}},[t._v("#")]),t._v(" 示例：")]),t._v(" "),s("p",[t._v("介绍完了六个重要的角色,我们再来通过详细的例子结合Chrome的开发者工具，来一步步介绍闭包产生的过程：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("1、首先在调用所有的函数执行前，我们可以看到这是Call Stack存在一个匿名的函数，我可以把我们正在执行的全局代码，看作一个大的匿名函数。同时，我们可以看到在Scope中存在一个"),s("strong",[t._v("Global全局执行上下文")]),t._v("，它始终存在ECStack执行上下文环境栈的栈底，当进入浏览器的JS代码执行环境，它就存在了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5CChrome(1).png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5CChrome(3).png",alt:""}})]),t._v(" "),s("p",[t._v("2、在执行到"),s("code",[t._v("var bar = foo();")]),t._v("之前，我们"),s("strong",[t._v("声明并创建了"),s("code",[t._v("foo")]),t._v("函数")]),t._v(",此时"),s("code",[t._v("foo")]),t._v("函数就会被添加到全局作用域中。如图所示，我们可以在"),s("code",[t._v("foo")]),t._v("函数中找它的[[Scopes]]属性，"),s("strong",[t._v("由于JS的作用域是词法作用域，函数的作用域和作用域链在定义时就被确定，"),s("code",[t._v("foo")]),t._v("函数是在全局作用域中创建的，所以此时他[[Scopes]]中存放了一个Global对象，即上文提到的GO")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5CChrome(4).png",alt:""}})]),t._v(" "),s("p",[t._v("3、在下图中，我们可以看到当我们"),s("strong",[t._v("执行")]),s("code",[t._v("foo")]),t._v("函数时，创建了执行上下文，并被压入栈顶。由于"),s("strong",[t._v("变量提升")]),t._v("的原因，"),s("code",[t._v("bar")]),t._v("函数被提前声明和创建。和上面"),s("code",[t._v("foo")]),t._v("函数一样，我们在"),s("code",[t._v("bar")]),t._v("函数创建时，我就可以确定它的[[Scopes]]，此时我们可以看到"),s("code",[t._v("bar")]),t._v("函数的[[Scopes]]已经存在了存在了一个Closure对象，也就是本文所说的闭包。Closure对象中存放了"),s("code",[t._v("foo")]),t._v("函数中的变量a和b以及它们的值。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5CChrome(5).png",alt:"image-20200908141648504"}})]),t._v(" "),s("p",[t._v("4、当"),s("code",[t._v("foo")]),t._v("函数执行完成之后，执行上下文会被弹出栈顶。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5CChrome(6).png",alt:"image-20200908144121830"}})]),t._v(" "),s("p",[t._v("5、此时"),s("code",[t._v("bar")]),t._v("变量会指向"),s("code",[t._v("foo")]),t._v("函数中返回的"),s("code",[t._v("bar函数")]),t._v("的内存地址,我们接着执行这个函数。bar函数需要返回变量a和变量b的和，但是此时本来声明变量a和变量b的"),s("code",[t._v("foo")]),t._v("函数的可执行上下文已经出栈了。但是神奇的闭包在此时就发挥了它的作用，并成功返回了正确的结果。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5CChrome(7).png",alt:"image-20200908145242498"}})]),t._v(" "),s("p",[t._v("6、foo函数完毕之后按照常理，其执行环境生命周期会结束，所占内存被垃圾收集器释放。但是由于全局上下文中的bar变量被赋予了指向bar函数的指针，bar函数仍然在被引用，所以它并不会被释放。此时，如果bar函数需要用到变量a和变量b，那么它就会到自身的作用链中去寻找它们的值，那么在[[Scopes]]的closure中bar函数就能得到它想要的结果。")]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5CChrome(8).png",alt:"image-20200908144245201"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"images%5CChrome(8).png",alt:"image-20200908144402741"}})]),t._v(" "),s("h2",{attrs:{id:"闭包的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包的应用"}},[t._v("#")]),t._v(" 闭包的应用")]),t._v(" "),s("p",[t._v("好了，到了这里我们已经一步步地了解了闭包产生的经过和原理。既然我们有了闭包这样的工具，那我们应该怎么去应用它呢？下面介绍两个闭包常用的应用场景：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("柯里化")]),t._v(" "),s("p",[t._v("柯里化"),s("strong",[t._v("利用了闭包的功能绑定了参数的作用域，使得每次调用函数时可以访问上次所传入的参数。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//柯里化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//闭包中包含了对a,b的引用")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("模块")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CoolModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" something "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" another "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" something "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAnother")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" another"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ! "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\ndoSomething"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ndoAnother"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" doAnother\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CoolModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cool")]),t._v("\nfoo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAnother")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 ! 2 ! 3")]),t._v("\n")])])]),s("p",[t._v("CoolModule() 返回一个用对象字面量语法 { key: value, ... } 来表示的对象。"),s("strong",[t._v("这个返回的对象中含有对内部函数而不是内部数据变量的引用")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"附录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),s("img",{attrs:{src:"/images/bibao.png",width:"100%",height:"100%"}}),t._v(" "),s("h2",{attrs:{id:"参考链接："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接："}},[t._v("#")]),t._v(" 参考链接：")]),t._v(" "),s("p",[t._v("《你不知道的JavaScript（上卷）》")])])}),[],!1,null,null,null);a.default=e.exports}}]);