// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/4f29ea/' },
          { text: 'HTML+CSS', link: '/pages/5bb2dc/' },
          { text: 'Vue', link: '/pages/d0b9bd/' },
          { text: 'React', link: '/pages/ff6413/' },
          { text: 'webpack', link: '/pages/a542bb/' },
        ],
      },
      {
        text: '系列笔记',
        items: [
          { text: 'React使用学习', link: '/note/react-learn/' },
          { text: 'Vue2源码探究', link: '/note/vue2-code/' },
        ],
      },
    ],
  },
  {
    text: 'Node',
    link: '/nodejs/',
    items: [
      {
        text: 'Node文章',
        items: [
          { text: '基础', link: '/pages/1cce55/' },
          { text: '问题', link: '/pages/be0ea7/' },
          { text: '框架', link: '/pages/6e080e/' },
        ]
      }
    ]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: 'MySQL', link: '/pages/3bd9c5/' },
      { text: 'Linux', link: '/pages/4db4cb/' },
      { text: '网络', link: '/pages/9f95d1/' },
      { text: '小技巧', link: '/pages/c44d61/' },
      { text: '杂记', link: '/pages/9c8278/' },
    ]
  },
  { text: '关于', link: '/about/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
