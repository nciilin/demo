	var pageImg = 0;
		$('.btn').on('click', function(){
			$.get('/getImg', {page: pageImg}).done(function(ret){
				if(ret.status === 0){
					pageImg++;
					appendHtml(ret.data)
				}else {
					alert('获取新闻出错')
				}
			}).fail(function(){
				alert('系统出错')
			})
		})

		function appendHtml(news){
			if(news.length === 0){
				$('.btn').remove();
				$('.showimg').append('<p>没有更多数据了</p>'
				)
				return;
			}
			
			var htmls = '';
			$.each(news, function(){
				htmls += '<li>';
				htmls += '<a href=""><img src="" data-src="'+ this.img + '" /></a>';
				htmls += '</li>';
			})

			$('.showimg').append(htmls);
		}