var pageIndex = 0;
		$('.load-more').on('click', function(){
			// 向后端/getNews发送请求
			$.get('/getNews', {page: pageIndex}).done(function(ret){
				// 如果后端status想匹配
				if(ret.status === 0) {
					pageIndex++; 
				// 获取后端data内容news
					appendHtml(ret.data)
				}else {
					alert('获取新闻出错')
				}
			}).fail(function(){
				alert('系统出错')
			})
		})

		// 执行到这里，获取后端信息
		function appendHtml(news){
			// 当信息已经为零时，删除按钮并添加文字
			if(news.length === 0){
				$('.load-more').remove();
				$('.container').append('<p>没有更多数据了</p>')
				return;
			}
			// 输出htmls
			var htmls = '';
			$.each(news, function(){
				htmls += '<li class="item">';
				htmls += '<a href="' + this.link +'">';
				htmls += '<div class="thumb"><img src="' + this.img + '"></div>';
				htmls += '	<h2>' + this.title + '</h2>';
				htmls += '<p>' + this.brif + '</p>';
				htmls += '</a></li>';
			})
			// 在.news位置后面增添后端内容
			$('.news').append(htmls)
		}
