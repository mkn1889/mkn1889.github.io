$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var ScrollDistance = 0;
  $(window).scroll(function(){
    var ScrollTop = $(this).ScrollTop();
    if (ScrollTop - ScrollDistance > 50){
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      ScrollDistance = ScrollTop;
    } else if (ScrollDistance - ScrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      ScrollDistance = ScrollTop;
    }
  });
});
