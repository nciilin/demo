define(["jquery"],function(t){return function(){function i(t){this.$ct=t,this.time,this.init(),this.bind()}return i.prototype.init=function(){var t=this.$imgCt=this.$ct.find(".img-ct"),i=(this.$preBtn=this.$ct.find(".btn-pre"),this.$nextBtn=this.$ct.find(".btn-next"),this.$bullet=this.$ct.find(".bullet"),t.find("li").first()),e=t.find("li").last();this.curPageIndex=0,this.imgLength=t.children().length,this.isAnimate=!1,this.$firstImg=i,t.prepend(e.clone()),t.append(i.clone()),t.width(i.width()*t.children().length),t.css({left:"-1600px"}),clearInterval(this.time)},i.prototype.bind=function(){var t=this;this.$preBtn.on("click",function(i){i.preventDefault(),t.playPre()}),this.$nextBtn.on("click",function(i){i.preventDefault(),t.playNext()}),this.time=setInterval(function(){t.playNext()},2e3)},i.prototype.playPre=function(){var t=this;this.isAnimate||(this.isAnimate=!0,this.$imgCt.animate({left:"+=1600px"},function(){t.curPageIndex--,t.curPageIndex<0&&(t.$imgCt.css("left",-t.imgLength*t.$firstImg.width()),t.curPageIndex=t.imgLength-1)}),this.isAnimate=!1,this.setBullet())},i.prototype.playNext=function(){var t=this;this.isAnimate||(this.isAnimate=!0,this.$imgCt.animate({left:"-=1600px"},function(){t.curPageIndex++,t.curPageIndex===t.imgLength&&(t.$imgCt.css({left:"-1600px"}),t.curPageIndex=0)}),t.isAnimate=!1,t.setBullet())},i.prototype.setBullet=function(){this.$bullet.children().removeClass("active").eq(this.curPageIndex).addClass("active")},{init:function(e){e.each(function(e,n){new i(t(n))})}}}()});
define(["jquery"],function(i){function o(i){this.id=i||"jrg-gotop",this.init()}return o.prototype={init:function(){var o=i("#"+this.id);0===o.length?(console.log("回到顶部"),this.$el=i('<div id="'+this.id+'" style="position: fixed; padding: 5px; right: 20px; bottom: 20px; border-radius: 3px; border: 1px solid #6666CC; opacity: .7; ">回到顶部</div>'),i("body").append(this.$el)):this.$el=o,this.$c=i(document),this.bind()},bind:function(){var i=this;this.$c.on("click","#jrg-gotop",function(){i.goToTop()}),this.$c.on("scroll",function(){i.scroll()})},goToTop:function(){this.$c.scrollTop(0)},scroll:function(i){this.$c.scrollTop()>100?this.$el.show():this.$el.hide()}},o});
define(["jquery"],function(t){function i(t){this.$ct=t,this.init(),this.addEvent(),this.resize()}return i.prototype={init:function(){this.colHeightArr=[],this.data=[],this.curPage=0,this.perPageCount=6},getData:function(){var i=this.curPage,e=this.perPageCount,r=this;t.get("/water",{curPage:i,perPageCount:e}).done(function(t){if(t&&"0"===t.status.code){var i=r.renderData(t.data);r.render(i),r.curPage++}}).fail(function(){console.log("error")})},renderData:function(i){for(var e,r="",n=0;n<i.length;n++)r+="<li>",r+='<a href="">',r+='<div class="cover">',r+='<img src="'+i[n].img_src+'" alt="">',r+="</div>",r+="</a>",r+="</li>";return e=t(r),t(".items").find("li").append(e),e},addEvent:function(){var i=this;t(".load").on("click",function(t){i.getData()})},render:function(i){var e=this;if(this.$items=this.$ct.find(".item"),0!=this.$items.length){if(this.itemWidth=this.$items.outerWidth(!0),this.$ct.width("1200px"),this.colNum=parseInt(this.$ct.width()/this.itemWidth),this.$ct.width(this.itemWidth*this.colNum),0==this.colHeightArr.length||!i)for(var r=0;r<this.colNum;r++)this.colHeightArr[r]=0;i&&i.each(function(){var i=t(this);i.find("img").on("load",function(){e.placeItem(i),e.$ct.height(Math.max.apply(null,e.colHeightArr))})})}},placeItem:function(t){var i=t,e=this.getMin(),r=e.idx,n=e.minSumHeight;i.css({left:r*this.itemWidth,top:n}),this.colHeightArr[r]+=i.outerHeight(!0)},getMin:function(){for(var t=0,i=this.colHeightArr[0],e=1;e<this.colHeightArr.length;e++)this.colHeightArr[e]<i&&(t=e,i=this.colHeightArr[e]);return{idx:t,minSumHeight:i}},resize:function(){var i=this;t(window).on("resize",function(){i.render()})}},i});