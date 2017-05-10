$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body,html').stop().animate({
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




 




    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);



        



      };
    };





$(window).scroll(function() {
    $('#animatedElement').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow) {
        $(this).addClass("hatch");
      }
    });
  });




    const sliderImages = document.querySelectorAll('.slide-in'); // this will tell you where the bottom of the window is.

console.log(sliderImages);



    function checkSlide(e){


sliderImages.forEach(sliderImage => {

                                                                  //halfway throught the image

const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 9;


const imageBottom = sliderImage.offsetTop + sliderImage.height;

const isHalfShown = slideInAt > sliderImage.offsetTop;

const isNotScrolledPast = window.scrollY < imageBottom;     // this vaiable will check if we are not scrolled past the image

if(isHalfShown && isNotScrolledPast){

sliderImage.classList.add('active');


}else{

sliderImage.classList.remove('active');
}



});



    }