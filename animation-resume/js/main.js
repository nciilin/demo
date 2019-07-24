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

熟悉 JavaScript 、 CSS3、 ES6、 Vue框架

# 项目介绍

- 导航书签
[导航书签](https://bloglive.top/myBookmarks/)
- 手机画板
[画板](https://bloglive.top/canvas-demo/)
- 我的简历
[我的简历](https://bloglive.top/resume/)
- 其他练习demo (需加上文件路径)
[源代码](https://github.com/nciilin/demo)
[demo](https://bloglive.top/demo/) 

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