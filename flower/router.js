app.get('/getInfo', function(req, res){
	res.send('vincent')
})

app.get('/getImg', function(req, res){

	var news = [
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

	},
	{
		img: 'images/data21.png'

	},
	{
		img: 'images/data22.jpg'

	},
	{
		img: 'images/data23.jpg'

	},
	{
		img: 'images/data24.jpg'

	},
	{
		img: 'images/data25.png'

	}



]
	// 获取前端page参数
	var pageImg =req.query.page;
	var len = 5;
	// 获取3条新闻
	var retNews = news.slice(pageImg*len, pageImg*len+len);

	// 前后端交互
	res.send({
		status: 0,
		data: retNews
	});
});