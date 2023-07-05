(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{407:function(v,_,t){"use strict";t.r(_);var e=t(1),E=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"react学习-五-什么是组件化开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#react学习-五-什么是组件化开发"}},[v._v("#")]),v._v(" React学习（五）—— 什么是组件化开发")]),v._v(" "),_("blockquote",[_("p",[v._v("我们总是高估自己每天可以完成的量，低估五年可以做成的事。")])]),v._v(" "),_("p",[v._v("组件化的思想是一种分而治之的思想。")]),v._v(" "),_("p",[v._v("分而治之的思想：任何一个人处理信息的逻辑能力都是有限的，所以，当面对一个非常复杂的问题时，我们不太可能一次性搞定一大堆的内容，但是，我们人有一种天生的能力，就是将问题进行拆解。如果将一个复杂的问题，拆分成很多个可以处理的小问题，再将其放在整体当中，你会发现大的问题也会迎刃而解。")]),v._v(" "),_("p",[v._v("分而治之是软件工程的重要思想，是复杂系统开发和维护的基石；而前端目前的模块化和组件化都是基于分而治之的思想。")]),v._v(" "),_("h2",{attrs:{id:"传统开发模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传统开发模式"}},[v._v("#")]),v._v(" 传统开发模式")]),v._v(" "),_("p",[v._v("在了解组件化开发之前，我们先回顾下传统的开发模式。")]),v._v(" "),_("p",[v._v("在三大框架出现之前，我们常见的开发模式是"),_("code",[v._v("MVC")]),v._v("模式与客户端"),_("code",[v._v("Ajax")]),v._v("开发的结合。")]),v._v(" "),_("p",[v._v("一个复杂的大型"),_("code",[v._v("Web")]),v._v("应用，访问各种功能的"),_("code",[v._v("URL")]),v._v("地址纷繁复杂，涉及到的"),_("code",[v._v("Web")]),v._v("页面多种多样，同时还管理着大量的后台数据，这时"),_("code",[v._v("MVC")]),v._v("的概念被引入"),_("code",[v._v("Web")]),v._v("开发中来，在架构层面上解决了维护性和扩展性等一系列问题。")]),v._v(" "),_("p",[v._v("模型"),_("code",[v._v("Model")]),v._v("用于封装与业务逻辑相关的数据和数据处理方法，视图"),_("code",[v._v("View")]),v._v("是数据的"),_("code",[v._v("HTML")]),v._v("展现，控制器"),_("code",[v._v("Controller")]),v._v("负责响应请求，协调"),_("code",[v._v("Model")]),v._v("和"),_("code",[v._v("View")]),v._v("。")]),v._v(" "),_("p",[_("code",[v._v("Model")]),v._v("，"),_("code",[v._v("View")]),v._v("和"),_("code",[v._v("Controller")]),v._v("的分开，是一种典型的关注点分离的思想，不仅使得代码复用性和组织性更好，使得"),_("code",[v._v("Web")]),v._v("应用的配置性和灵活性更好。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B506.png",alt:"img"}})]),v._v(" "),_("p",[v._v("之后，"),_("code",[v._v("Ajax")]),v._v("的出现让整个前端的生态有了很大的改变，在摆脱了只有同步的限制后，异步请求为前端注入了新的活力，对于业务的实现，我们有了更多的选择。同时，将一部分的业务复杂度从服务端分担到了浏览器的"),_("code",[v._v("JavaScript")]),v._v("。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B508.png",alt:"img"}})]),v._v(" "),_("p",[v._v("这种模式下，前后端的分工非常清晰，前后端的关键协作点是 "),_("code",[v._v("Ajax")]),v._v(" 接口。复杂度从服务端的 JSP 里移到了浏览器的 "),_("code",[v._v("JavaScript")]),v._v("使得浏览器端变得很复杂。")]),v._v(" "),_("p",[v._v("大量"),_("code",[v._v("JS")]),v._v("代码的组织，与 "),_("code",[v._v("View")]),v._v(" 层的绑定等，都不是容易的事情。前端开发也变得越来越臃肿。")]),v._v(" "),_("p",[v._v("这时，如果我们开发一个商品目录浏览的"),_("code",[v._v("Web")]),v._v("应用，我们基本都会如下来做：")]),v._v(" "),_("p",[v._v("这个应用通常会包含一个主页、一个搜索结果页、一个详情页。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B509.png",alt:"img"}})]),v._v(" "),_("p",[v._v("页面流可能是这样：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B510.png",alt:""}})]),v._v(" "),_("p",[v._v("在多页设计方式下，对于大多数改变页面显示的行为，"),_("code",[v._v("Web")]),v._v(" 应用会导航到一个完全不同的页面。用户会看到原页面被销毁，然后出来一个新页面，这种用户体验很不尽人意。这对如何维护应用程序的状态有很大影响。除了通过"),_("code",[v._v("cookie")]),v._v("和一些服务端机制来保存用户数据外，基本上就不用管别的了。")]),v._v(" "),_("h2",{attrs:{id:"为什么要组件化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要组件化"}},[v._v("#")]),v._v(" 为什么要组件化")]),v._v(" "),_("p",[v._v("无论前端也好，后端也好，都是整个软件体系的一部分。软件产品也是产品，它的研发过程也必然是有其目的。绝大多数软件产品是追逐利润的，在产品目标确定的情况下，成本有两个途径来优化：减少部署成本，提高开发效率。")]),v._v(" "),_("p",[v._v("现代的大型系统开发一般采用的开发架构都是前后台分离的方式，随着REST架构的发展，后端服务逐步趋向于微服务，简单来说是将一个大型后端服务拆分成多个小服务，他们分别部署，降低了开发的复杂度，而且提高了系统的可伸缩性。"),_("strong",[v._v("而在前端开发方面，随着技术的发展，开发的复杂度也越来越高，传统开发模式总是存在着开发效率低，维护成本高的弊端")]),v._v("。")]),v._v(" "),_("p",[v._v("传统开发方式效率低以及维护成本高的主要原因在于，很多情况下我们是将一个系统做成了整块应用，而随着业务的增长或者变更，系统的复杂度往往会呈现指数级的增长。经常出现的情况就是，一个小小的改动或者一个小功能的增加可能会引起整体逻辑的修改，造成牵一发而动全身。")]),v._v(" "),_("p",[v._v("针对此弊端，其实业界早就有了一些探索，我们希望一个大且复杂的场景能够被分解成几个小的部分，这些小的部分彼此之间互不干扰，可以单独开发，单独维护，而且他们之间可以随意的进行组合。就拿电脑主机来说，一台整机包括CPU，主板，内存，硬盘等，而这些部件其实都是由不同的公司进行生产的，他们彼此之间根据一套标准分别生产，最后组装在一起。当某个部件出现问题时，不需要将整台主机都进行维修，只需要将坏的部件拿下来，维修之后再将其组合上就可以了。这种化繁为简的思想在后端开发中的体现是"),_("strong",[v._v("微服务")]),v._v("，而在前端开发中的体现就是"),_("strong",[v._v("组件化")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"组件化开发理念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件化开发理念"}},[v._v("#")]),v._v(" 组件化开发理念")]),v._v(" "),_("p",[v._v("前端组件化开发的理念：")]),v._v(" "),_("ul",[_("li",[v._v("页面上的每个独立的 可视/可交互区域视为一个组件；")]),v._v(" "),_("li",[v._v("每个组件对应一个工程目录，组件所需的各种资源都在这个目录下就近维护；")]),v._v(" "),_("li",[v._v("由于组件具有独立性，因此组件与组件之间可以 自由组合；")]),v._v(" "),_("li",[v._v("页面只不过是组件的容器，负责组合组件形成功能完整的界面；")]),v._v(" "),_("li",[v._v("当不需要某个组件，或者想要替换组件时，可以整个目录删除/替换。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B512.png",alt:"img"}})]),v._v(" "),_("h2",{attrs:{id:"组件化图解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件化图解"}},[v._v("#")]),v._v(" 组件化图解")]),v._v(" "),_("p",[v._v("正如上面的多页面应用开发，如果我们将一个页面中所有的处理逻辑全部放在一起，处理起来就会变得非常复杂，而且不利于后续的管理以及扩展。")]),v._v(" "),_("p",[v._v("但如果我们将一个页面拆分成一个个小的功能块，每个功能块完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了。")]),v._v(" "),_("p",[v._v("组件化是React的核心思想，提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用，任何的应用都会被抽象成一颗组件树。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B511.png",alt:"Component Tree"}})]),v._v(" "),_("p",[v._v("当你的代码被整理，变成一块块“积木”，这就是最基本的组件。将组件像“积木”一样搭建起来，就成了你手中的项目，无论项目是大是小，都由这样的一块块“积木”搭建而成。")]),v._v(" "),_("p",[v._v("应用中，一个页面都应该由组件构成：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B513.png",alt:"img"}})]),v._v(" "),_("p",[v._v("一个组件是一个目录，资源就近维护：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B514.png",alt:"img"}})]),v._v(" "),_("p",[v._v("组件可以组合，组件的JS可以依赖其他JS模块，CSS也可以依赖其他的CSS模块：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B515.png",alt:"img"}})]),v._v(" "),_("p",[v._v("那么，一个Web应用的目录结构会大致如下：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/React/React%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B516.png",alt:"img"}})])])}),[],!1,null,null,null);_.default=E.exports}}]);