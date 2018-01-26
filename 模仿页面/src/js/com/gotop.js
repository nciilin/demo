
define(['jquery'], function( $ ) {


	function goTop(id) {
		this.id = id || 'jrg-gotop'
		this.init();
	}

	goTop.prototype = {
		init: function() {
			var $el = $('#' + this.id);
			if ($el.length === 0) {
				console.log('回到顶部');
				this.$el = $('<div id="' + this.id + '" style="position: fixed; padding: 5px; right: 20px; bottom: 20px; border-radius: 3px; border: 1px solid #6666CC; opacity: .7; ">回到顶部</div>');
				$('body').append(this.$el);
			} else {
				this.$el = $el;
			}

			this.$c = $(document);

			this.bind();
		},

		bind: function() {
			var me = this;

			this.$c.on('click','#jrg-gotop', function() {
				me.goToTop();
			});

			this.$c.on('scroll', function(){
				me.scroll();
			});
		},

		goToTop: function() {
			this.$c.scrollTop(0);
		},

		scroll: function(e) {
			var scrollTop = this.$c.scrollTop();
			if (scrollTop > 100) {
				this.$el.show();
			} else {
				this.$el.hide();
			}
		}
	};

	//new goTop();


	return goTop; 
});