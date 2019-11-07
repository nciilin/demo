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
  }, 30)
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
  }, 15)
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

- [会动的简历](https://bloglive.top/Animation-resume/)
  - 关键词：Prism.js语法高亮、marked.js将markdown语法转为HTML网页
  - 源代码：[预览](https://github.com/nciilin/Animation-resume)
- [仿制精美网页](https://bloglive.top/resume/)
  - 关键词：HTML5 + CSS3动画、过渡效果 
  - 源代码：[预览](https://github.com/nciilin/resume)
- [画板](https://bloglive.top/canvas-demo/)
  - 关键词：canvas、移动端viewport、原生JS
  - 源代码： [预览](https://github.com/nciilin/canvas-demo)
- [懒加载](https://bloglive.top/lazyload/)
  - 关键词： jQuery，鼠标滚动触发 
  - 源代码：[预览](https://github.com/nciilin/lazyload/blob/master/index.html)

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