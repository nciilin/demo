function writeCss(prefix, code, fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix +  code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 20)
}
function writeMarkdom(markdown, fn) {
  let domPaper = document.querySelector('#paper >.content')
  let n = 0
  let id = setInterval( ()=> {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 10)
}


var css1 = `/*
* 面试官你好，我是林永诚
* 只用文字作做我介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/

* {
  transition: all 1s;
}

html {
  background: #eee;
}

#code {
  border: 1px solid #aaa;
  padding: 16px;
}

/* 我需要一点代码高亮 */

.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}

/* 加一个呼吸效果 */

#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 现在正式开始*/

/* 我需要一张白纸 */

#code-wrapper {
  width: 50%;
  position: fixed;
  left: 0;
  height: 100%;
}

#paper > .content {
  display: block;
}

/* 可以在白纸上写字，请看右边 */
`

var css2 = `/*
* 接下来用一个优秀的库marked.js
* 把markdown 转变成 HTML
*/
`

var md = `
# 自我介绍

我叫林永诚
1995 年 1 月出生

自学前端1年
希望应聘前端开发岗位

# 技能介绍

1. 熟练掌握**HTML5**和常用**CSS3**，具有像素级还原设计稿的能力。
2. 熟练掌握原生JavaScript，掌握重要概念，如：**原型、闭包、作用域链、异步流程控制**等。熟练ES6及ES7的部分新特性。
3. 了解HTTP协议及浏览器的渲染过程，了解前端性能优化策略。
4. 熟悉CMD&AMD机制，熟悉**webpack**打包，优化手段
5. 熟悉Vue框架的使用，理解重要概念如：**生命周期、异步更新、虚拟DOM、MVVM**。

# 项目介绍

- [模仿去那儿网App](https://bloglive.top/Traval-demo/Traval/dist/#/)
  - 关键词：Vue、原生JS、Vue-Router、响应式、webpack、Stylus、Babel、vue-cli
  - 描述： 该项目使用了Vue实现了一个去那儿网移动端App，自适应宽度、可以图片左右滚动。查询关键字点击切换城市位置、手指触摸快速切换位置。我用Vue-Router实现了路由功能、axios获取异步数据，Vuex实现数据共享；
  - 源代码：[查看源代码](https://github.com/nciilin/Traval-demo)
- [仿制精美网页](https://bloglive.top/resume/)
  - 关键词：HTML5 + CSS3动画、过渡效果
  - 描述： 根据设计图像素比实现DIV+CSS3页面效果，使用CSS3动画，实现点击按钮无缝滚动切换位置，内容展现简历信息；
  - 源代码：[查看源代码](https://github.com/nciilin/resume)
- [画板](https://bloglive.top/canvas-demo/)
  - 关键词：canvas、移动端viewport、原生JS
  - 描述：该项目使用原生的JS实现、主要调用Canvas API，实现了划线、调色、橡皮擦功能
  - 源代码： [查看源代码](https://github.com/nciilin/canvas-demo)
- [CSS皮卡丘](https://bloglive.top/Pikachu-demo/)
  - 关键词： CSS3 原生JS 
  - 源代码：[查看源代码](https://github.com/nciilin/Pikachu-demo)

# 个人博客
主要用来记录学习过的前端知识点。
简书：[预览](https://www.jianshu.com/u/50cbc562caf7)
博客: [预览](https://bloglive.top/archives/)

# 联系方式
- QQ： 670700452
- Email：670700452@qq.com
- 手机：18218968465
`

var css3 = `
/*
 * 这是我会动的简历
 * 谢谢观看
*/
`

writeCss('', css1, ()=> {
  createPaper( () => {
    writeMarkdom(md, ()=> {
      writeCss(css1, css2, ()=> {
        conventMarkdownToHtml( ()=> {
          writeCss(css1 + css2, css3, () => {
            console.log('完成')
          })
        })
      })
    })
  })
})

function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

function conventMarkdownToHtml(fn) {
  var div = document.createElement('div')
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}