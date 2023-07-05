(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{416:function(t,e,n){"use strict";n.r(e);var o=n(1),r=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react学习-十四-react-redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react学习-十四-react-redux"}},[t._v("#")]),t._v(" React学习（十四）—— React-Redux")]),t._v(" "),e("h2",{attrs:{id:"react结合redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react结合redux"}},[t._v("#")]),t._v(" react结合redux")]),t._v(" "),e("h3",{attrs:{id:"redux融入react代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux融入react代码"}},[t._v("#")]),t._v(" redux融入react代码")]),t._v(" "),e("p",[t._v("目前redux在react中使用是最大的，所以我们需要将之前编写的redux代码，融入到react当中去。")]),t._v(" "),e("p",[t._v("这里我创建了两个组件：")]),t._v(" "),e("ul",[e("li",[t._v("Home组件：其中会展示当前的counter值，并且有一个+1和+5的按钮；")]),t._v(" "),e("li",[t._v("About组件：其中会展示当前的counter值，并且有一个-1和-5的按钮；")])]),t._v(" "),e("p",[t._v("home.js代码实现")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { PureComponent } from 'react';\nimport store from '../store'; \nimport { addAction, increAction } from '../store/actionCreators';\n\nexport default class Home extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      counter: store.getState().counter\n    };\n  }\n\n  componentDidMount() {\n    this.unsubscribe = store.subscribe(() => {\n      this.setState({\n        counter: store.getState().counter\n      });\n    });\n  }  \n\n  componentWillUnmount() {\n    this.unsubscribe();\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Home</h1>\n        <h2>计数：{this.state.counter}</h2>\n        <button onClick={e => this.increment()}>+1</button>\n        <button onClick={e => this.addNumber()}>+5</button>\n      </div>\n    )\n  }\n\n  increment() {\n    store.dispatch(increAction())\n  }\n\n  addNumber() {\n    store.dispatch(addAction(5))\n  }\n}\n")])])]),e("p",[t._v("about.js代码实现")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { PureComponent } from 'react';\nimport store from '../store'; \nimport { subAction, decreAction } from '../store/actionCreators';\n\nexport default class About extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      counter: store.getState().counter\n    };\n  }\n\n  componentDidMount() {\n    this.unsubscribe = store.subscribe(() => {\n      this.setState({\n        counter: store.getState().counter\n      });\n    });\n  }  \n\n  componentWillUnmount() {\n    this.unsubscribe();\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>About</h1>\n        <h2>计数：{this.state.counter}</h2>\n        <button onClick={e => this.decrement()}>-1</button>\n        <button onClick={e => this.subNumber()}>-5</button>\n      </div>\n    )\n  }\n\n  decrement() {\n    store.dispatch(decreAction())\n  }\n\n  subNumber() {\n    store.dispatch(subAction(5))\n  }\n}\n")])])]),e("p",[t._v("上面的代码其实非常简单，核心代码主要是两个：")]),t._v(" "),e("ul",[e("li",[t._v("在 "),e("code",[t._v("componentDidMount")]),t._v(" 中定义数据的变化，当数据发生变化时重新设置 "),e("code",[t._v("counter")]),t._v(";")]),t._v(" "),e("li",[t._v("在发生点击事件时，调用store的"),e("code",[t._v("dispatch")]),t._v("来派发对应的"),e("code",[t._v("action")]),t._v("；")])]),t._v(" "),e("h3",{attrs:{id:"自定义connect函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义connect函数"}},[t._v("#")]),t._v(" 自定义connect函数")]),t._v(" "),e("p",[t._v("上面的代码是否可以实现"),e("code",[t._v("react组件")]),t._v("和"),e("code",[t._v("redux")]),t._v("结合起来呢？")]),t._v(" "),e("ul",[e("li",[t._v("当然是可以的，但是我们会发现每个使用的地方其实会有一些重复的代码：")]),t._v(" "),e("li",[t._v("比如监听store数据改变的代码，都需要在 "),e("code",[t._v("componentDidMount")]),t._v("中完成；组件卸载要移除监听")]),t._v(" "),e("li",[t._v("比如派发事件，我们都需要去先拿到 "),e("code",[t._v("store")]),t._v("， 在调用其 "),e("code",[t._v("dispatch")]),t._v(" 等；")])]),t._v(" "),e("p",[t._v("我们来定义一个connect函数：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("这个connect函数本身接受两个参数：")])]),t._v(" "),e("li",[e("ul",[e("li",[t._v("参数一：里面存放 "),e("code",[t._v("component")]),t._v(" 希望使用到的 "),e("code",[t._v("State")]),t._v(" 属性；")]),t._v(" "),e("li",[t._v("参数二：里面存放 "),e("code",[t._v("component")]),t._v(" 希望使用到的 "),e("code",[t._v("dispatch")]),t._v("动作；")])])]),t._v(" "),e("li",[e("p",[t._v("这个connect函数有一个返回值，是一个高阶组件：")])]),t._v(" "),e("li",[e("ul",[e("li",[t._v("在"),e("code",[t._v("constructor")]),t._v("中的state中保存一下我们需要获取的状态；")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("componentDidMount")]),t._v("中订阅store中数据的变化，并且执行 "),e("code",[t._v("setState")]),t._v("操作；")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("componentWillUnmount")]),t._v("中需要取消订阅；")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("render")]),t._v("函数中返回传入的"),e("code",[t._v("WrappedComponent")]),t._v("，并且将所有的状态映射到其"),e("code",[t._v("props")]),t._v("中；")]),t._v(" "),e("li",[t._v("这个高阶组件接受一个组件作为参数，返回一个class组件；")]),t._v(" "),e("li",[t._v("在这个class组件中，我们进行如下操作")])])]),t._v(" "),e("li",[e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react';\nimport store from '../store';\n\nexport default function connect(mapStateToProp, mapDispatchToProp) {\n  return function enhanceHOC(WrapComponent) {\n    return class extends React.PureComponent {\n      constructor(props) {\n        super(props);\n\n        this.state = {\n          storeState: mapStateToProp(store.getState())\n        };\n      }\n\n      componentDidMount() {\n        this.unsubscribe = store.subscribe(() => {\n          this.setState({\n            storeState: mapStateToProp(store.getState())\n          });\n        })\n      }\n\n      componentWillUnmount() {\n        this.unsubscribe();\n      }\n\n      render() {\n        return <WrapComponent\n          {...this.props}\n          {...mapStateToProp(store.getState())}\n          {...mapDispatchToProp(store.dispatch)}\n        />\n      }\n    }\n  }\n}\n")])])])]),t._v(" "),e("li",[e("p",[t._v("在home和props文件中，我们按照自己需要的state、dispatch来进行映射：")])]),t._v(" "),e("li",[e("p",[t._v("比如home.js中进行如下修改：")])]),t._v(" "),e("li",[e("ul",[e("li",[e("p",[t._v("mapStateToProps：用于将state映射到一个对象中，对象中包含我们需要的属性；")])]),t._v(" "),e("li",[e("p",[t._v("mapDispatchToProps：用于将dispatch映射到对象中，对象中包含在组件中可能操作的函数；")])]),t._v(" "),e("li",[e("ul",[e("li",[t._v("当调用该函数时，本质上其实是调用dispatch(对应的Action)；")])])])])])]),t._v(" "),e("p",[t._v("修改后的home2.js")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { PureComponent } from 'react';\nimport connect from '../utils/connect';\nimport { addAction, increAction } from '../store/actionCreators';\n\nclass Home extends PureComponent {\n  render() {\n    return (\n      <div>\n        <h1>Home2</h1>\n        <h2>计数：{this.props.counter}</h2>\n        <button onClick={e => this.increment()}>+1</button>\n        <button onClick={e => this.addNumber()}>+5</button>\n      </div>\n    )\n  }\n\n  increment() {\n    this.props.increAction();\n  }\n\n  addNumber() {\n    this.props.addAction(5);\n  }\n}\n\nconst mapStateToProp = state => {\n  return {\n    counter: state.counter\n  };\n}\n\nconst mapDispatchToProp = dispatch => {\n  return {\n    increAction() {\n      dispatch(increAction());\n    },\n    addAction(num) {\n      dispatch(addAction(num))\n    }\n  };\n}\n\n\nexport default connect(mapStateToProp, mapDispatchToProp)(Home);\n")])])]),e("p",[t._v("About2.js")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { PureComponent } from 'react';\nimport { subAction, decreAction } from '../store/actionCreators';\nimport connect from '../utils/connect';\n\nclass About extends PureComponent {\n  render() {\n    return (\n      <div>\n        <h1>About2</h1>\n        <h2>计数：{this.props.counter}</h2>\n        <button onClick={e => this.decrement()}>-1</button>\n        <button onClick={e => this.subNumber()}>-5</button>\n      </div>\n    )\n  }\n\n  decrement() {\n    this.props.decreAction();\n  }\n\n  subNumber() {\n    this.props.subAction(5);\n  }\n}\n\nexport default connect(\n  state => ({\n    counter: state.counter\n  }),\n  dispatch => ({\n    decreAction() {\n      dispatch(decreAction());\n    },\n    subAction(num) {\n      dispatch(subAction(num));\n    }\n  })\n)(About);\n")])])]),e("p",[t._v("有了connect函数，我们之后只需要关心从state和dispatch中映射自己需要的状态和行为即可。")]),t._v(" "),e("h3",{attrs:{id:"store的context处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store的context处理"}},[t._v("#")]),t._v(" store的context处理")]),t._v(" "),e("p",[t._v("但是上面的connect函数有一个很大的缺陷：依赖导入的store")]),t._v(" "),e("ul",[e("li",[t._v("如果我们将其封装成一个独立的库，需要依赖用于创建的store，我们应该如何去获取呢？")]),t._v(" "),e("li",[t._v("难道让用户来修改我们的源码吗？不太现实；")])]),t._v(" "),e("p",[t._v("正确的做法是我们提供一个Provider，Provider来自于我们创建的Context，让用户将store传入到value中即可；")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react';\n\nconst StoreContext = React.createContext();\n\nexport {\n  StoreContext\n};\n")])])]),e("p",[t._v("修改connect函数中class组件部分的代码：")]),t._v(" "),e("ul",[e("li",[t._v("注意下面我们将class组件的名称明确的定义出来，并且给它的"),e("code",[t._v("contextType")]),t._v("进行了赋值；")]),t._v(" "),e("li",[t._v("在组件内部用到store的地方，统一使用this.context代替（注意：constructor中直接使用第二个参数即可）")])]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react';\nimport { StoreContext } from './context';\n\nexport default function connect(mapStateToProp, mapDispatchToProp) {\n  return function enhanceHOC(WrapComponent) {\n    class EnhanceComponent extends React.PureComponent {\n      constructor(props, context) {\n        super(props);\n\n        this.state = {\n          storeState: mapStateToProp(context.getState())\n        };\n      }\n\n      componentDidMount() {\n        this.unsubscribe = this.context.subscribe(() => {\n          this.setState({\n            storeState: mapStateToProp(this.context.getState())\n          });\n        })\n      }\n\n      componentWillUnmount() {\n        this.unsubscribe();\n      }\n\n      render() {\n        return <WrapComponent\n          {...this.props}\n          {...mapStateToProp(this.context.getState())}\n          {...mapDispatchToProp(this.context.dispatch)}\n        />\n      }\n    }\n\n    EnhanceComponent.contextType = StoreContext;\n\n    return EnhanceComponent;\n  }\n}\n")])])]),e("p",[t._v("在入口的index.js中，使用Provider并且提供store即可：")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import { StoreContext } from './utils/context';\nimport store from './store';\n\nReactDOM.render(\n  <StoreContext.Provider value={store}>\n    <App />\n  </StoreContext.Provider>,\n  document.getElementById('root')\n);\n")])])]),e("p",[t._v("这样，我们通过Context将Store进行共享，实现connect对所有业务代码没有任何的依赖。可以在任何地方进行使用。")]),t._v(" "),e("h2",{attrs:{id:"react-redux使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-redux使用"}},[t._v("#")]),t._v(" react-redux使用")]),t._v(" "),e("h3",{attrs:{id:"_2-1-react-redux的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-react-redux的使用"}},[t._v("#")]),t._v(" 2.1. react-redux的使用")]),t._v(" "),e("p",[t._v("开始之前需要强调一下，redux和react没有直接的关系，你完全可以在React, Angular, Ember, jQuery, or vanilla JavaScript中使用Redux。")]),t._v(" "),e("p",[t._v("尽管这样说，redux依然是和React或者Deku的库结合的更好，因为他们是通过state函数来描述界面的状态，Redux可以发射状态的更新，让他们作出相应。")]),t._v(" "),e("p",[t._v("虽然我们之前已经实现了connect、Provider这些帮助我们完成连接redux、react的辅助工具，但是实际上redux官方帮助我们提供了 react-redux 的库，可以直接在项目中使用，并且实现的逻辑会更加的严谨和高效。")]),t._v(" "),e("p",[t._v("安装react-redux：")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yarn add react-redux\n")])])]),e("p",[t._v("使用connect函数：")]),t._v(" "),e("ul",[e("li",[t._v("将之前使用的connect函数，换成react-redux的connect函数；")])]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React, { PureComponent } from 'react';\nimport { connect } from \"react-redux\";\n\n// import connect from '../utils/connect2';\n\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Home);\n")])])]),e("p",[t._v("使用Provider：")]),t._v(" "),e("ul",[e("li",[t._v("将之前自己创建的Context的Provider，换成react-redux的Provider组件：")]),t._v(" "),e("li",[t._v("注意：这里传入的是store属性，而不是value属性，其实本质上还是value，只是做了一层封装（待会儿可以在源码中查看）；")])]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import { Provider } from 'react-redux';\n\nimport store from './store';\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n);\n")])])]),e("h3",{attrs:{id:"react-redux的源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-redux的源码"}},[t._v("#")]),t._v(" react-redux的源码")]),t._v(" "),e("p",[t._v("这里我简单带着大家看一下react-redux的源码。")]),t._v(" "),e("p",[t._v("首先，我们简单看一下Provider的源码：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用了一个useMemo来返回一个contextValue的对象；")])]),t._v(" "),e("li",[e("ul",[e("li",[t._v("这里使用useMemo的原因是为了进行性能的优化；")]),t._v(" "),e("li",[t._v("在依赖的store不改变的情况下，不会进行重新计算，返回一个新的对象；")])])]),t._v(" "),e("li",[e("p",[t._v("在下面的Context的Provider中就会将其赋值给value属性；")])])]),t._v(" "),e("p",[t._v("react-redux\\src\\components\\Provider.js")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function Provider({ store, context, children }) {\n  const contextValue = useMemo(() => {\n    const subscription = new Subscription(store)\n    subscription.onStateChange = subscription.notifyNestedSubs\n    return {\n      store,\n      subscription,\n    }\n  }, [store])\n\n  const previousState = useMemo(() => store.getState(), [store])\n\n  useIsomorphicLayoutEffect(() => {\n    const { subscription } = contextValue\n    subscription.trySubscribe()\n\n    if (previousState !== store.getState()) {\n      subscription.notifyNestedSubs()\n    }\n    return () => {\n      subscription.tryUnsubscribe()\n      subscription.onStateChange = null\n    }\n  }, [contextValue, previousState])\n\t\n  // ReactReduxContext从另外一个文件导入\n  const Context = context || ReactReduxContext\n\n  return <Context.Provider value={contextValue}>{children}</Context.Provider>\n}\n")])])]),e("p",[t._v("react-redux\\src\\components\\Context.js")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react'\n\nexport const ReactReduxContext = /*#__PURE__*/ React.createContext(null)\n\nif (process.env.NODE_ENV !== 'production') {\n  ReactReduxContext.displayName = 'ReactRedux'\n}\n\nexport default ReactReduxContext\n")])])]),e("p",[e("strong",[t._v("connect函数的依赖比较复杂：")])]),t._v(" "),e("p",[t._v("调用createConnect来返回一个connect函数：")]),t._v(" "),e("p",[t._v("react-redux\\src\\connect\\connect.js")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export function createConnect({\n  connectHOC = connectAdvanced,\n  mapStateToPropsFactories = defaultMapStateToPropsFactories,\n  mapDispatchToPropsFactories = defaultMapDispatchToPropsFactories,\n  mergePropsFactories = defaultMergePropsFactories,\n  selectorFactory = defaultSelectorFactory,\n} = {}) {\n  return function connect(\n    mapStateToProps,\n    mapDispatchToProps,\n    mergeProps,\n    {\n      pure = true,\n      areStatesEqual = strictEqual,\n      areOwnPropsEqual = shallowEqual,\n      areStatePropsEqual = shallowEqual,\n      areMergedPropsEqual = shallowEqual,\n      ...extraOptions\n    } = {}\n  ) {\n    const initMapStateToProps = match(\n      mapStateToProps,\n      mapStateToPropsFactories,\n      'mapStateToProps'\n    )\n    const initMapDispatchToProps = match(\n      mapDispatchToProps,\n      mapDispatchToPropsFactories,\n      'mapDispatchToProps'\n    )\n    const initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps')\n\t\t\n    // 最终调用connectHOC\n    return connectHOC(selectorFactory, {\n      // used in error messages\n      methodName: 'connect',\n\n      // used to compute Connect's displayName from the wrapped component's displayName.\n      getDisplayName: (name) => `Connect(${name})`,\n\n      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes\n      shouldHandleStateChanges: Boolean(mapStateToProps),\n\n      // passed through to selectorFactory\n      initMapStateToProps,\n      initMapDispatchToProps,\n      initMergeProps,\n      pure,\n      areStatesEqual,\n      areOwnPropsEqual,\n      areStatePropsEqual,\n      areMergedPropsEqual,\n\n      // any extra options args can override defaults of connect or connectAdvanced\n      ...extraOptions,\n    })\n  }\n}\n\n// connect是createConnect()的返回\nexport default /*#__PURE__*/ createConnect()\n")])])]),e("p",[t._v("connect函数最终调用的是connectHOC：")]),t._v(" "),e("ul",[e("li",[t._v("connectHOC其实是connectAdvanced的函数；")]),t._v(" "),e("li",[t._v("connectAdvanced函数最终返回的是wrapWithConnect函数；")])]),t._v(" "),e("p",[t._v("react-redux\\src\\components\\connectAdvanced.js")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('export default function connectAdvanced(..., ...) {\n  ...\n  const Context = context\n\n  return function wrapWithConnect(WrappedComponent) {\n  \t...\n    // If we\'re in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.\n    const Connect = pure ? React.memo(ConnectFunction) : ConnectFunction\n\n    Connect.WrappedComponent = WrappedComponent\n    Connect.displayName = ConnectFunction.displayName = displayName\n\n    if (forwardRef) {\n      const forwarded = React.forwardRef(function forwardConnectRef(\n        props,\n        ref\n      ) {\n        return <Connect {...props} reactReduxForwardedRef={ref} />\n      })\n\n      forwarded.displayName = displayName\n      forwarded.WrappedComponent = WrappedComponent\n      return hoistStatics(forwarded, WrappedComponent)\n    }\n\n    return hoistStatics(Connect, WrappedComponent)\n  }\n}\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);