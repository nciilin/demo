define(['jquery','com/gotop','com/carousel','com/waterfall'], function($,Gotop, Carousel,WaterFall){
	new Gotop();

	Carousel.init($('.carousel'));

	new WaterFall($('.items'));

});