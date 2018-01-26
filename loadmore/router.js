app.get('/getInfo', function(req, res){
	res.send('vincent')
})

app.get('/getNews', function(req, res){

	var news = [
{
	link: 'http://www.chinaz.com/hotspot/2017/1017/817896.shtml',
	img: 'http://upload.chinaz.com/2017/1017/6364385782196429223378761.jpeg',
	title: '看傻眼！上海惊现神户型，主卧跟次卧隔着一个“跑道”',
	brif: '看傻眼！上海惊现神户型，主卧跟次卧隔着一个“跑道”'

},
{
	link: 'http://news.sina.com.cn/s/wh/2017-10-17/doc-ifymuukv2365075.shtml',
	img: 'http://n.sinaimg.cn/translate/20171017/_ij_-fymvkax7544745.jpg',
	title: '暖闻|“肥妈”退休后当导医义工，拒医院工资十年助逾万患者',
	brif: '看傻眼！上海惊现神户型，主卧跟次卧隔着一个“跑道”'

},
{
	link: 'http://forex.hexun.com/2017-10-16/191235874.html',
	img: 'http://i4.hexun.com/2017-10-16/191235876.jpg',
	title: '美国新奥尔良附近石油钻井平台发生爆炸，致多人受伤',
	brif: '看傻眼！上海惊现神户型，主卧跟次卧隔着一个“跑道”'
},
{
	link: 'http://news.mydrivers.com/1/530/530388.htm',
	img: 'http://img1.mydrivers.com/img/20170502/S6a41e68f-6fe3-44ad-9425-4dee9ac5882e.jpg',
	title: '黑飞必须禁！无人机撞客机模拟：结果太恐怖',
	brif: '看傻眼！上海惊现神户型，主卧跟次卧隔着一个“跑道”'

},
{
	link: 'http://news.dayoo.com/world/201710/16/139998_51866419.htm',
	img: 'http://img1.dayoo.com/www/201710/16/aee0ccc1-2ebc-4744-b437-29834f4caaa3.jpg',
	title: '俄研制"威力超核弹"武器 能杀地下百米藏身敌军',
	brif: '看傻眼！上海惊现神户型，主卧跟次卧隔着一个“跑道”'

},
{
	link: 'http://stock.hexun.com/2017-10-17/191249595.html',
	img: 'http://i2.hexun.com/2017-10-17/191249596.jpg',
	title: '日本钢铁造假惊人，十年造假内幕曝光，神钢或成高田第二！',
	brif: '看傻眼！上海惊现神户型，主卧跟次卧隔着一个“跑道”'
}

]
	// 获取前端page参数
	var pageIndex =req.query.page;
	var len = 3;
	// 获取3条新闻
	var retNews = news.slice(pageIndex*len, pageIndex*len+len);

	// 前后端交互
	res.send({
		status: 0,
		data: retNews
	});
});