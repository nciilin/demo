function setRouter(app){ 
 var router = app; 

app.get('/water', function(req, res) {
    console.log(req.query);
    var bigData = [
        {"img-src":"imgs/1.jpg"},
        {"img-src":"imgs/2.jpg"},
        {"img-src":"imgs/3.jpg"},
        {"img-src":"imgs/4.jpg"},
        {"img-src":"imgs/5.jpg"},
        {"img-src":"imgs/6.jpg"},
        {"img-src":"imgs/7.jpg"},
        {"img-src":"imgs/carousel-1.jpg"},
        {"img-src":"imgs/carousel-2.jpg"},
        {"img-src":"imgs/carousel-3.jpg"},
        {"img-src":"imgs/carousel-4.jpg"},
        {"img-src":"imgs/maomei.png"},
        {"img-src":"imgs/sishen.png"},
        {"img-src":"imgs/tianshi.png"},
        {"img-src":"imgs/tuobiang.png"},
        {"img-src":"imgs/xiaomei.png"},
        {"img-src":"imgs/xingxing.png"},
    ];
    var	mesData = [];
    var curPage = req.query.curPage,
        perPageCount = req.query.perPageCount;

    for(var i =0;i<perPageCount;i++){
        mesData[i] = bigData[parseInt( Math.random()*bigData.length )];
    }
    console.log(mesData);
    res.send({
        "status":0,
        "data": mesData
    });
});}
 module.exports.setRouter = setRouter