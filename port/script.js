$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1500);
  return false;
})



 $('flash').hover(function() {
    $(this).effect('fade', {times:10}, 500);
   $('bounce').hover(function() {
    $(this).effect('bounce', {times:2}, 500);  
// Parallaxing + add class active on scroll
$(document).scroll(function () {
  
 
  
  // parallaxing
  var $movebg = $(window).scrollTop() * -100;
  $('.portion').css('background-positionY', ($movebg) + 'px');

 });
});
});


(function($) {



  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".square");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});