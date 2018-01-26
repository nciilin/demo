//后端router.js


app.get('/getNews', function(req, res) {

	var news = [
		{
			link: 'http://view.inews.qq.com/a/20160830A02SEB00',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
			title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
			brif:  '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://view.inews.qq.com/a/20160828A007LB00',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531727868_150120/0',
			title: '传奇导弹专家冯·布劳恩：其实到美国后曾被当局忽视',
			brif: '小火箭出品本文作者：邢强博士原文标题：布劳恩博...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
			title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
			brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
			brif: '嚣张（aggressive）这个词，腐国海军当...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
			brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '中国武警2016年征兵宣传片震撼首发',
			brif: '中国武警2016年征兵宣传片震撼首发'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
			brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
			brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
			title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
			brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
			brif: '嚣张（aggressive）这个词，腐国海军当...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
			brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '中国武警2016年征兵宣传片震撼首发',
			brif: '中国武警2016年征兵宣传片震撼首发'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
			brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
			brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
		},
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

	var pageIndex = req.query.page;
	var len = 3;

	var retNews = 	news.slice(pageIndex*len, pageIndex*len+len); //0, 3;  3, 6


	res.send({
		status: 0,
		data: retNews
	});
});


