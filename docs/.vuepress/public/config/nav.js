module.exports = [

  // 单项 text：显示文字，link：指向链接
  // 这里的'/' 指的是 docs文件夹路径
  // [以 '/' 结尾的默认指向该路径下README.md文件]
  { text: "首页",link:"/"},
  { text: "面试宝典",link:"/view/tech/"},
  { 
    text: '踩过的坑',
    items:[
      {text:'javascript',link:'/view/javascript/'}
    ]
  },
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
  }
]