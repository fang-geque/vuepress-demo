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
  base: '/fgq/', // 这是部署到github相关的配置
  markdown: {
      lineNumbers: true // 代码块显示行号
  },

  themeConfig:{
    sidebarDepth: 4, //e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
    // 顶部导航栏
    nav:[
      // 单项 text：显示文字，link：指向链接
      // 这里的'/' 指的是 docs文件夹路径
      // [以 '/' 结尾的默认指向该路径下README.md文件]
      { text: "首页",link:"/"},
      { text: '技术文档',link: '/tech/interview/'},
      {text: '简书主页', link: 'https://www.jianshu.com/u/c455567c7f50'},  
      // 多项，下拉形式
      {
        text:'Concat',
        items:[
          // link:指向链接也可以是外网链接
          {text:'Segmentfault',link: 'https://segmentfault.com/u/mulander' },
        ]
      },
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub首页', link: 'https://github.com/Mulander-J' },
          { text: 'Island', link: 'https://mulander-j.github.io/island/code/html/index.html' },
          { text: 'TimeWaster', link: 'https://mulander-j.github.io/timeWaster/demo/index.html#/' },
        ]
      },
    ],

    // 侧边栏菜单(一个模块对应一个菜单形式)
    sidebar:'auto', //侧边栏配置
  }
}