(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{368:function(s,t,a){"use strict";a.r(t);var e=a(1),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"学习ssr爬墙与总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学习ssr爬墙与总结"}},[s._v("#")]),s._v(" 学习ssr爬墙与总结")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("​\t每次下载东西，都要呼叫我王哥，而我自己则傻傻地坐在电脑前等待王哥喂屎，不够香。我想，自己扒拉出来的应该更有味道，于是我更加稳当地坐在了小板凳上。")]),s._v(" "),t("h2",{attrs:{id:"弱鸡扫盲"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#弱鸡扫盲"}},[s._v("#")]),s._v(" 弱鸡扫盲")]),s._v(" "),t("p",[s._v("什么都不懂，什么都不知道，一个没见过世面的宁波养猪场二组技术员开始了搜狗百科。")]),s._v(" "),t("h3",{attrs:{id:"什么是socks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是socks"}},[s._v("#")]),s._v(" 什么是SOCKS")]),s._v(" "),t("blockquote",[t("p",[s._v("摘自： https://zh.wikipedia.org/wiki/SOCKS")])]),s._v(" "),t("p",[s._v('SOCKS是一种网络传输协议，主要用于客户端与外网服务器之间通讯的中间传递。SOCKS是"SOCKetS"的缩写。')]),s._v(" "),t("p",[s._v("当防火墙后的客户端要访问外部的服务器时，就跟SOCKS代理服务器连接。这个代理服务器控制客户端访问外网的资格，允许的话，就将客户端的请求发往外部的服务器。")]),s._v(" "),t("h4",{attrs:{id:"与http代理的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与http代理的对比"}},[s._v("#")]),s._v(" 与HTTP代理的对比")]),s._v(" "),t("p",[t("strong",[s._v("SOCKS")]),s._v("：Bill希望通过互联网与Jane沟通，但他们的网络之间存在一个防火墙，Bill不能直接与Jane沟通。所以，Bill连接到他的网络上的SOCKS代理，告知它他想要与Jane创建连接；SOCKS代理打开一个能穿过防火墙的连接，并促进Bill和Jane之间的通信。")]),s._v(" "),t("p",[t("strong",[s._v("HTTP")]),s._v("：Bill希望从Jane的Web服务器下载一个网页。Bill不能直接连接到Jane的服务器，因为在他的网络上设置了防火墙。为了与该服务器通信，Bill连接到其网络的HTTP代理。他的网页浏览器与代理通信的方式与他直接连接Jane的服务器的方式相同；也就是说，网页浏览器会发送一个标准的HTTP请求头。HTTP代理连接到Jane的服务器，然后将Jane的服务器返回的任何数据传回Bill。")]),s._v(" "),t("h4",{attrs:{id:"gfw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gfw"}},[s._v("#")]),s._v(" GFW")]),s._v(" "),t("p",[s._v("中国国家防火墙，一旦发现数据包中有敏感信息，就会伪造RST数据包，分别发送给连接双方。")]),s._v(" "),t("blockquote",[t("p",[s._v("摘自：https://zh.wikipedia.org/wiki/%E9%98%B2%E7%81%AB%E9%95%BF%E5%9F%8E")])]),s._v(" "),t("p",[t("strong",[s._v("原理")]),s._v("：防火长城对所有经过骨干出口路由的在UDP的53端口上的域名查询进行IDS入侵检测，一经发现与黑名单关键词相匹配的域名查询请求，防火长城会马上伪装成目标域名的解析服务器给查询者返回虚假结果。由于通常的域名查询没有任何认证机制，而且域名查询通常基于的UDP协议是无连接不可靠的协议，查询者只能接受最先到达的格式正确结果，并丢弃之后的结果。用户若改用TCP在53端口上进行DNS查询，虽然不会被防火长城污染，但可能会遭遇连接重置，导致无法获得目标网站的IP地址。")]),s._v(" "),t("p",[s._v("ps: 看不懂原理是在搞什么飞机，先搬过来吧。")]),s._v(" "),t("h3",{attrs:{id:"科学上网之shadowsocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#科学上网之shadowsocks"}},[s._v("#")]),s._v(" 科学上网之Shadowsocks")]),s._v(" "),t("p",[s._v("​\t原来一直不明白它的原理，多亏了王哥的神作，在我看了几遍之后，才得以稍稍了解其原理。")]),s._v(" "),t("blockquote",[t("p",[s._v("A fast tunnel proxy that helps you bypass firewalls.")]),s._v(" "),t("p",[s._v("Features:")]),s._v(" "),t("ul",[t("li",[s._v("TCP & UDP support")]),s._v(" "),t("li",[s._v("User management API")]),s._v(" "),t("li",[s._v("TCP Fast Open")]),s._v(" "),t("li",[s._v("Workers and graceful restart")]),s._v(" "),t("li",[s._v("Destination IP blacklist")])])]),s._v(" "),t("p",[s._v("目前有 "),t("code",[s._v("libev")]),s._v("、"),t("code",[s._v("python")]),s._v("、"),t("code",[s._v("go")]),s._v("几个主要分支，之后的实践我只是使用了go。")]),s._v(" "),t("p",[t("strong",[s._v("王哥")]),s._v("：浏览器要配置"),t("code",[s._v("socks5")]),s._v("代理(或者是配置系统"),t("code",[s._v("socks5")]),s._v("代理, 让浏览器走系统代理), 这时候浏览器发起"),t("code",[s._v("http")]),s._v("请求会被改写成"),t("code",[s._v("socks5")]),s._v("请求, 这个 "),t("code",[s._v("socks5")]),s._v(" 客户端要先和 "),t("code",[s._v("shadowsocks local")]),s._v(" 端进行握手, 客户端先发送握手包（具体想要了解的可以看上面的"),t("code",[s._v("socks")]),s._v("）。")]),s._v(" "),t("p",[s._v("其原理：")]),s._v(" "),t("ul",[t("li",[s._v("客户端服务器预共享密码")]),s._v(" "),t("li",[s._v("本地socks5 proxy server")]),s._v(" "),t("li",[s._v("软件/浏览器配置本地socks代理")]),s._v(" "),t("li",[s._v("本地socks server把数据包装，加密，发送到远程服务器")]),s._v(" "),t("li",[s._v("远程服务器解密，转发给对应的服务器")])]),s._v(" "),t("p",[s._v("我又看了，给"),t("a",{attrs:{href:"http://vc2tea.com/whats-shadowsocks/",target:"_blank",rel:"noopener noreferrer"}},[s._v("非专业人士看的"),t("code",[s._v("Shadowsocks")]),s._v("简介"),t("OutboundLink")],1),s._v("，真香。")]),s._v(" "),t("h2",{attrs:{id:"搭建-go版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建-go版本"}},[s._v("#")]),s._v(" 搭建（go版本）")]),s._v(" "),t("blockquote",[t("p",[s._v("​\tshadowsocks-go is a lightweight tunnel proxy which can help you get through firewalls.")]),s._v(" "),t("p",[s._v("​      https://github.com/shadowsocks/shadowsocks-go")])]),s._v(" "),t("h3",{attrs:{id:"买vps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#买vps"}},[s._v("#")]),s._v(" 买VPS")]),s._v(" "),t("p",[s._v("古人云：运维不好，对象难找；英语不好，冲浪难搞。不无其中的道理：运维不好；又在买vultr时说好的送25刀，结果，也没送。。。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/NetWork/%E7%88%AC%E5%A2%9901.jpeg",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("h4",{attrs:{id:"go环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go环境"}},[s._v("#")]),s._v(" go环境")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" golang "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])])]),t("h4",{attrs:{id:"安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# on server")]),s._v("\ngo get github.com/shadowsocks/shadowsocks-go/cmd/shadowsocks-server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# on client")]),s._v("\ngo get github.com/shadowsocks/shadowsocks-go/cmd/shadowsocks-local\n")])])]),t("p",[s._v("在一台机器上安装了"),t("code",[s._v("ssserver")]),s._v("和"),t("code",[s._v("sslocal")]),s._v("，实现本地用户无需安装客户端且无需密码，在本地实现翻墙:")]),s._v(" "),t("p",[t("strong",[s._v("app  ->  request vultr sslocal(encrypt)  ->  request vultr ssserver (decrypt) -> real host -> response to vultr ssserver(encrypt) ->  response to vultr sslocal(decrypt)  ->  app")])]),s._v(" "),t("p",[s._v("需插件"),t("code",[s._v("SwitchyOmega")]),s._v("，后续会说到。")]),s._v(" "),t("h4",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("Both the server and client program will look for "),t("code",[s._v("config.json")]),s._v(" in the current directory. You can use "),t("code",[s._v("-c")]),s._v(" option to specify another configuration file.")]),s._v(" "),t("p",[s._v("Configuration file is in json ：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_name"')]),s._v(", \n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_port"')]),s._v(":8388, \n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local_port"')]),s._v(":1080,\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local_address"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"barfoo!"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aes-128-cfb"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),s._v(":600\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("table",[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("ExPLANATION")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("server")]),s._v(" "),t("td",[s._v("your server ip or hostname")])]),s._v(" "),t("tr",[t("td",[s._v("server port")]),s._v(" "),t("td",[s._v("server port")])]),s._v(" "),t("tr",[t("td",[s._v("local_port")]),s._v(" "),t("td",[s._v("local socks5 proxy port")])]),s._v(" "),t("tr",[t("td",[s._v("method")]),s._v(" "),t("td",[s._v("encryption method, null by default (table), the following methods are supported: aes-128-cfb, aes-192-cfb, aes-256-cfb, bf-cfb, cast5-cfb, des-cfb, rc4-md5, rc4-md5-6, chacha20, salsa20, rc4, table")])]),s._v(" "),t("tr",[t("td",[s._v("password")]),s._v(" "),t("td",[s._v("a password used to encrypt transfer")])]),s._v(" "),t("tr",[t("td",[s._v("timeout")]),s._v(" "),t("td",[s._v("server option, in seconds")])]),s._v(" "),t("tr",[t("td",[s._v("fast_open")]),s._v(" "),t("td",[s._v("use "),t("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks/wiki/TCP-Fast-Open",target:"_blank",rel:"noopener noreferrer"}},[s._v("TCP_FASTOPEN"),t("OutboundLink")],1),s._v(", true / false（echo 3 > /proc/sys/net/ipv4/tcp_fastopen 这个选项需要配合内核参数）")])]),s._v(" "),t("tr",[t("td",[s._v("workers")]),s._v(" "),t("td",[s._v("number of workers, available on Unix/Linux")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td")])])]),s._v(" "),t("p",[s._v("我的配置:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入安装好的目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nbin  src  sslocal.json  ssserver.json\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat ssserver.json ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vpsIP"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_port"')]),s._v(":8388,\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aes-128-cfb"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),s._v(":300,\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fast_open"')]),s._v(":false\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat sslocal.json ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vpsIP"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server_port"')]),s._v(":8388,\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local_port"')]),s._v(":22,\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local_address"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aes-128-cfb"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),s._v(":300,\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fast_open"')]),s._v(":false\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h4",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  ./bin/shadowsocks-server -c ssserver.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/12/19 06:44:19 server listening port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./bin/shadowsocks-local -c sslocal.json ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/12/19 06:45:51 available remote server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("149.248")]),s._v(".21.68:8388\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/12/19 06:45:51 starting "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" socks5 server at "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:22 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("p",[s._v("后台运行")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup ./bin/shadowsocks-server -c ssserver.json &")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup ./bin/shadowsocks-local -c sslocal.json &")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@vultr go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef | grep shadowsocks-")]),s._v("\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5293")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5189")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:49 pts/0    00:00:00 ./bin/shadowsocks-server "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" ssserver.json\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5299")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5189")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:50 pts/0    00:00:00 ./bin/shadowsocks-local "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" sslocal.json\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5305")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5189")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 06:51 pts/0    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--color")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto shadowsocks-\n")])])]),t("p",[s._v("搭建完毕，如果使用本地ssclient，记得打开对应端口即上述8388的防火墙：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("firewall-cmd --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388")]),s._v("/tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\n\nfirewall-cmd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n\nfirewall-cmd --list-ports\n\nfirewall-cmd --remove-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388")]),s._v("/tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\n")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("p",[s._v("本地客户端和chrome插件")]),s._v(" "),t("h3",{attrs:{id:"本地客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地客户端"}},[s._v("#")]),s._v(" 本地客户端")]),s._v(" "),t("blockquote",[t("p",[s._v("https://github.com/shadowsocks")])]),s._v(" "),t("p",[s._v("客户端的在此不多说，记得开启防火墙。")]),s._v(" "),t("h3",{attrs:{id:"switchyomega的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switchyomega的使用"}},[s._v("#")]),s._v(" SwitchyOmega的使用")]),s._v(" "),t("blockquote",[t("p",[s._v("https://github.com/FelisCatus/SwitchyOmega")])]),s._v(" "),t("h4",{attrs:{id:"下载插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载插件"}},[s._v("#")]),s._v(" 下载插件")]),s._v(" "),t("p",[s._v("首先在github上下载"),t("a",{attrs:{href:"https://github.com/FelisCatus/SwitchyOmega",target:"_blank",rel:"noopener noreferrer"}},[s._v("插件"),t("OutboundLink")],1),s._v("，或者直接在chrome web store下载"),t("a",{attrs:{href:"https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=zh-CN",target:"_blank",rel:"noopener noreferrer"}},[s._v("SwitchyOmega"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("​\t将下载好的插件添加到扩展程序中，SwitchyOmega支持多种模式：")]),s._v(" "),t("ul",[t("li",[s._v("直接连接：不使用任何代理；")]),s._v(" "),t("li",[s._v("系统代理：使用系统客户端模式代理；")]),s._v(" "),t("li",[s._v("proxy：全部访问使用代理；")]),s._v(" "),t("li",[s._v("autoswitch：根据访问自动判断是否需要代理。")])]),s._v(" "),t("h4",{attrs:{id:"配置autoswitch模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置autoswitch模式"}},[s._v("#")]),s._v(" 配置autoswitch模式")]),s._v(" "),t("p",[t("code",[s._v("autoswitch")]),s._v("模式使用非常方便，推荐使用，如果某些网站访问无法正确打开，可以写换到"),t("code",[s._v("proxy")]),s._v("模式。")]),s._v(" "),t("p",[s._v("1）打开chrome，点击右上角的SwitchyOmega插件图标，点击选项；")]),s._v(" "),t("p",[s._v("2）点击左侧的 "),t("code",[s._v("新建情景模式")]),s._v("，根据喜好输入情景模式名称 如："),t("code",[s._v("Shadowsocks")]),s._v("，类型选择第一个"),t("code",[s._v("代理服务器")]),s._v("。左侧菜单中好像有个情景模式，叫"),t("code",[s._v("proxy")]),s._v("，如果有就不需要新建了可以直接做配置。做如下配置：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages@master/NetWork/%E7%88%AC%E5%A2%9902.png",alt:"爬墙02"}})]),s._v(" "),t("p",[s._v("​\t可自行配置不代理的地址列表。")]),s._v(" "),t("p",[s._v("3）配置自动切换模式。点击左侧"),t("code",[s._v("auto switch")]),s._v("，规则列表选择"),t("code",[s._v("AutoProxy")]),s._v("，添加规则列表。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages@master/NetWork/%E7%88%AC%E5%A2%9903.png",alt:"爬墙03"}})]),s._v(" "),t("p",[s._v("默认情景模式选择"),t("code",[s._v("直接连接")]),s._v("，这样就直接添加上了大多数网站的代理规则，如果遇到未添加的，可以自己再"),t("code",[s._v("添加条件")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages@master/NetWork/%E7%88%AC%E5%A2%9904.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages@master/NetWork/%E7%88%AC%E5%A2%9905.png",alt:""}})]),s._v(" "),t("blockquote",[t("p",[s._v("https://github.com/gfwlist/gfwlist")]),s._v(" "),t("p",[s._v("规则列表网址：https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt")]),s._v(" "),t("p",[s._v("gfwlist 是一个开源的黑名单项目，它由成千上万的网友贡献整理而成的一个包含了几乎所有被墙域名的列表，从而实现被墙的域名自动走代理。")])]),s._v(" "),t("h2",{attrs:{id:"优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[s._v("#")]),s._v(" 优化")]),s._v(" "),t("p",[s._v("通过TCP BBR拥塞控制来进行加速的服务。")]),s._v(" "),t("p",[s._v("BBR 目的是要尽量跑满带宽, 并且尽量不要有排队的情况, 效果并不比速锐差。")]),s._v(" "),t("p",[s._v("​\t使用root用户登录，运行以下命令：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x bbr.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./bbr.sh\n")])])]),t("p",[s._v("​\t安装完成后，脚本会提示需要重启 VPS，输入 y 并回车后重启。 重启")]),s._v(" "),t("p",[s._v("​\t完成后，进入 VPS，验证一下是否成功安装最新内核并开启 TCP BBR，输入以下命令查看内核版本：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内核版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.19")]),s._v(".10-1.el7.elrepo.x86_64\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" net.ipv4.tcp_available_congestion_control\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回值一般为：")]),s._v("\nnet.ipv4.tcp_available_congestion_control "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bbr cubic reno\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者为：")]),s._v("\nnet.ipv4.tcp_available_congestion_control "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" reno cubic bbr\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" net.ipv4.tcp_congestion_control\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回值一般为：")]),s._v("\nnet.ipv4.tcp_congestion_control "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bbr\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" net.core.default_qdisc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回值一般为：")]),s._v("\nnet.core.default_qdisc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fq\n")])])]),t("p",[s._v("执行 "),t("code",[s._v("lsmod | grep bbr")]),s._v(", 看到有 tcp_bbr 模块即说明 bbr 已启动。")]),s._v(" "),t("p",[s._v("注意：并不是所有的 VPS 都会有此返回值，若没有也属正常。")]),s._v(" "),t("blockquote",[t("p",[s._v("一键安装最新内核并开启 BBR 脚本：https://teddysun.com/489.html")]),s._v(" "),t("p",[s._v("来自Google的TCP BBR拥塞控制算法解析：https://blog.csdn.net/dog250/article/details/52830576")]),s._v(" "),t("p",[s._v("开启TCP BBR拥塞控制算法：https://github.com/iMeiji/shadowsocks_install/wiki/%E5%BC%80%E5%90%AFTCP-BBR%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6%E7%AE%97%E6%B3%95")])]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("​\t倒腾了两天，蛮开心的，大神数不胜数，站在他们的肩膀上是一件多么令人兴奋的事情。非常感谢我王哥对我的zz问题一一解答。")]),s._v(" "),t("p",[s._v("​\t总之，我王哥天下第一！")])])}),[],!1,null,null,null);t.default=r.exports}}]);