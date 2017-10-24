
if ( $(window).width() > 550) {
$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("header").removeClass(" big").addClass("small");
		}
		else
		{
			$("header").removeClass("small").addClass("big");
		}
	});
}
else {
  $(document).ready(function() {
    var $toggleButton = $('#clickButton'),
        $menuWrap = $('.mobileMenu');

    $toggleButton.on('click', function() {
        $menuWrap.toggleClass('navWidth');
        $("body").toggleClass('noScroll');
    });
});
    




   document.querySelector( ".mobileNav button" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});
};


/*JQUERY FOR NAV BAR STARTS HERE*/


if ($("nav").is('*')) {
    var elem = $('nav');
    var offset = elem.offset();
    var topValue =  offset.top + elem.height();
    var width = elem.width();
    $(window).scroll(function (event) {
          var y = $(this).scrollTop();
            if (y >= topValue) {  
                if (!$('nav').hasClass('follow')){   
                   $("nav").hide().addClass("follow").fadeIn(250);
                }
            } else {
              $(".follow").removeClass("follow");
            }
     });
}


$('#second').click(function(){
  // Scroll down to 'slowScrollTop'
  $('html, body, #aboutus-wrap').animate({scrollTop:slowScrollTop}, 1000);
  event.preventDefault();
  event.stopPropagation();
});$("#click1").click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#sec1").offset().top}, 1000);
    });



