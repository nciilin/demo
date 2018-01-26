
define(['jquery'], function($){

     var Carousel = (function(){
            function _Carousel($ct) {
                this.$ct = $ct;
                this.time;
                this.init();
                this.bind();
        }

        _Carousel.prototype.init = function() {
            var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
                $preBtn = this.$preBtn = this.$ct.find('.btn-pre'),
                $nextBtn = this.$nextBtn = this.$ct.find('.btn-next'),
                $bullet = this.$bullet = this.$ct.find('.bullet')

            var $firstImg = $imgCt.find('li').first(),
                $lastImg = $imgCt.find('li').last()

            this.curPageIndex = 0
            this.imgLength = $imgCt.children().length
            this.isAnimate = false
            this.$firstImg = $firstImg

            $imgCt.prepend($lastImg.clone())
            $imgCt.append($firstImg.clone())

            $imgCt.width($firstImg.width() * $imgCt.children().length)
            $imgCt.css({
                'left': '-1600px'
            })

            clearInterval(this.time);

        }

        _Carousel.prototype.bind = function() {
            var _this = this;
            this.$preBtn.on('click', function(e) {
                e.preventDefault();
                _this.playPre();
            })

            this.$nextBtn.on('click', function(e) {
                e.preventDefault();
                _this.playNext();
            })

            this.time = setInterval(function(){
                _this.playNext();
            },2000)

        }

        _Carousel.prototype.playPre = function() {
            var _this = this;
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '+=1600px'
            }, function() {
                _this.curPageIndex--;
                if (_this.curPageIndex < 0) {
                    _this.$imgCt.css('left', -(_this.imgLength * _this.$firstImg.width()));
                    _this.curPageIndex = _this.imgLength - 1
                }
            })
            this.isAnimate = false;
            this.setBullet()
        }

        _Carousel.prototype.playNext = function() {
            var _this = this;
            if (this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left: '-=1600px'
            }, function() {
                _this.curPageIndex++;
                if (_this.curPageIndex === _this.imgLength) {
                    _this.$imgCt.css({
                        'left': '-1600px'
                    })
                    _this.curPageIndex = 0
                }
            })
            _this.isAnimate = false;
            _this.setBullet();
        }

        _Carousel.prototype.setBullet = function() {
            this.$bullet.children()
                .removeClass('active')
                .eq(this.curPageIndex)
                .addClass('active')
        }

        return {
            init: function($ct){
                $ct.each(function(index,node){
                    new _Carousel($(node));
                })
            }
        }
        })()

        return Carousel;
})