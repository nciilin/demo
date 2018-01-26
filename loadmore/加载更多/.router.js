function setRouter(app){ 
 var router = app; 

app.get('/getInfo', function(req,res){
	res.send('jirengu')
})

app.get('/getNews', function(req, res){

	var items = [
	{
		brif: '内容3'
	},
	{
		brif: '内容4'
	},
	{
		brif: '内容5'
	},
	{
		brif: '内容6'
	},
	{
		brif: '内容7'
	},
	{
		brif: '内容8'
	},
	{
		brif: '内容9'
	},
	{
		brif: '内容10'
	},
	{
		brif: '内容11'
	},
	{
		brif: '内容12'
	},
	{
		brif: '内容13'
	},
	{
		brif: '内容14'
	},
	{
		brif: '内容15'
	},
	{
		brif: '内容16'
	},
	{
		brif: '内容17'
	},
	{
		brif: '内容18'
	},
	{
		brif: '内容19'
	},
	{
		brif: '内容20'
	},
	{
		brif: '内容21'
	},
	{
		brif: '内容22'
	},
	{
		brif: '内容23'
	},
	{
		brif: '内容24'
	},
	{
		brif: '内容25'
	}


	]


	var pageIndex = req.query.page;
	var len = 6;

	var retItems = items.slice(pageIndex * len, pageIndex*len + len);
	res.send({
		status: 1,
		data: retItems
	});
});}
 module.exports.setRouter = setRouter