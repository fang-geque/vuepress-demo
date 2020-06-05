---
  title: CSS相关
---

## 1.万能居中
```css
margin: 0 auto;  /*水平*/
text-align: center; /*水平*/
行高和高度相同  /*垂直*/
表格，center,middle; /* 水平垂直 */
display: table-cell;  /* 模拟表格,all */
绝对定位, top,left 都来50%减自身宽高
绝对定位，上下左右全0，margin:auto
绝对定位加相对定位。不需要知道宽高
IE6，IE7：给父元素设一个font-size:高度/1.14,vertical-align:middle
```

## 2.[BFC优化](https://www.jianshu.com/p/0d713b32cd0d)
BFC 全称为 块格式化上下文 (Block Formatting Context) 
特性:
- 使 BFC 内部浮动元素不会到处乱跑（清除浮动）；
- 和浮动元素产生边界（在非浮动元素加margin）。

## 3.盒模型哪两种模式？什么区别？如何设置
- W3C标准盒模型：box-sizing: content-box(默认); 宽高不包括内边距和边框
![W3C BOX](/img/tech/w3cbox.png)
- IE盒模型：box-sizing: border-box
<img :src="$withBase('/img/tech/iebox.png')" alt="IE BOX">

## 4.[常用清除浮动的方法，如不清除浮动会怎样？](https://blog.csdn.net/h_qingyi/article/details/81269667)
当父元素不给高度的时候，内部元素不浮动时会撑开, 而浮动的时候，父元素变成一条线, 造成塌陷.
- 给父元素设置固定高度 (扩展性不好不推荐)
- 父元素添加overflow:hidden;  (触发BFC)
- 在父元素最后增加一个空的块级子元素,并让它设置clear:both
- 给父元素增加::after伪元素  (推荐)
``` css
.clear-fix::after{
  content:'';
  display: block;
  clear: both;
  height: 0;  /* 兼容旧浏览器 */
  visibility: hidden; /* 兼容旧浏览器 */
}

.clear-fix{
  *zoom:1; /* 兼容IE6~7 */
}
```
