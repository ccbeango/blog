const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "CcbeanBlog",
  description: 'web技术博客,简洁至上。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  base: '/blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    toc: { includeLevel: [1, 2, 3, 4] },
  },
  head,
  plugins,
  themeConfig,
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  }
}
