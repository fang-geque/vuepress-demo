const nav = require('./public/config/nav')
const sidebar = require('./public/config/sidebar')


module.exports = {
  title: '方歌阙的博客', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
  description: '方歌阙 维基百科', // meta 中的描述文字，意义不大，SEO用
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    // 增加一个自定义的 favicon(网页标签的图标)
    // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
    // 即 docs/.vuepress/public/img/geass-bg.ico
    ['link', { rel: 'icon', href: '/touxiang2.jpg' }],
  ],
  // base: '/fang-geque/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },

  themeConfig: {
    sidebarDepth: 4, //e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间,
    // 顶部导航栏
    nav: nav,

    // 侧边栏菜单(一个模块对应一个菜单形式)
    sidebar: sidebar, //侧边栏配置
  },

  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        'img': 'public/img'
      }
    }
  }
}