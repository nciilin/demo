var clock;

lazyRender()

$(window).on('scroll', function(){
  if(clock){
    clearTimeout(clock)
  }
  clock =setTimeout(function(){
    lazyRender()
  },300)
})


function lazyRender(){
  $('.container img').each(function(){
    if(checkShow($(this)) && !isLoaded($(this))) {
      loadImg($(this))
    }
  })
}

function checkShow($img) {
  var scrollTop = $(window).scrollTop()
  var windowHeight = $(window).height()
  var offsetTop = $img.offset().top
  if(offsetTop < scrollTop + windowHeight && offsetTop > scrollTop){
    return true
  }
  return false
}


 function isLoaded($img) {
  return $img.attr('data-src') === $img.attr('src')
 }

 function loadImg($img) {
  $img.attr('src', $img.attr('data-src'))
 }