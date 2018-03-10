app.get('/getInfo', function(req, res){
	res.send('vincent')
})

app.get('/getNews', function(req, res){

	var news = [
	{
		
		img: 'images/data10.jpg'

	},
	{
		
		img: 'images/data11.jpg'

	},
	{
		
		img: 'images/data12.jpg'

	},
	{
		
		img: 'images/data13.jpg'

	},
	{
		
		img: 'images/data14.jpg'

	},
	{
		
		img: 'images/data15.png'

	},
	{
		
		img: 'images/data16.png'

	},
	{
		
		img: 'images/data17.jpg'

	},
	{
		
		img: 'images/data18.jpg'

	},
	{
		
		img: 'images/data19.png'

	},
	{
		
		img: 'images/data20.jpg'

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