
//PRELOADER
$(window).on('load', function(){
  $('body').imagesLoaded(function() {
    $("#preloader").delay(300).addClass('loaded');
  }); 
}); 

$(document).ready( function() {


  //TYPED JS
  if ($('.element').length) {
    $('.element').each(function () {
        $(this).typed({
            strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')],
            loop: $(this).data('loop') ? $(this).data('loop') : false ,
            backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
            typeSpeed: 10,
        });
    });
}

//HERO SLIDER JS  
  var swiper = new Swiper('.swiper-container.classic', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true,
    },
  });

  //Vertical Slide
  var swiper = new Swiper('.swiper-container.upslide', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true,
    },
  });

  //Carousel Slide
  var swiper = new Swiper('.swiper-container.carousel', {
    centeredSlides: true,
    slidesPerView: 'auto',
    speed:800,
    loop: true, 
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },   
  });

  //Fade Slide
  var swiper = new Swiper('.swiper-container.fade-slide', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


//COUNTER JS  
if ($('.counter').length) {
  var a = 0;
  $(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
      });
      a = 1;
    }
  });
}

// OWL CAROUSEL JS
var owlcar = $('.owl-carousel');
if (owlcar.length) {
    owlcar.each(function () {
        var $owl = $(this);
        var itemsData = $owl.data('items');
        var autoplayData = $owl.data('autoplay');
        var autoPlayTimeoutData = $owl.data('autoplaytimeout');
        var dotsData = $owl.data('dots');
        var navData = $owl.data('nav');
        var marginData = $owl.data('margin');
        var stagePaddingData = $owl.data('stagepadding');
        var itemsDesktopData = $owl.data('items-desktop');
        var itemsTabletData = $owl.data('items-tablet');
        var itemsTabletSmallData = $owl.data('items-tablet-small');
        $owl.owlCarousel({
              items: itemsData
            , dots: dotsData
            , nav: navData
            , margin: marginData
            , loop: true
            , stagePadding: stagePaddingData
            , autoplay: autoplayData
            , autoplayTimeout: autoPlayTimeoutData
            , navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
            , responsive:{
                    0:{
                        items:itemsTabletSmallData,
                        stagePadding:0
                    },
                    600:{
                        items:itemsTabletData,
                        stagePadding:0
                    },
                    1000:{
                        items:itemsDesktopData
                    }
                }
        , });
    });
}

// ONE PAGE SCROLL JS

     if ($('.hero').length) {
      $(document).on("scroll", onScroll);
      $('nav ul li a, .slider-content .site-btn, .about .site-btn').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('a').each(function () {
              $(this).removeClass('active');
          });
              
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          target = $(target);
          $('html, body').stop().animate({
              'scrollTop': target.offset().top
              
          }, 500, 'swing', function () {
              window.location.hash = target.selector;
              $(document).on("scroll", onScroll);
          });
      });
  }

  function onScroll(event){
    if ($('#hero').length) {     
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('nav ul li a').removeClass("activelink");
              currLink.addClass("activelink");
          }
      });
     }              
  }

  $('.nav-icon, nav ul li a').on("click", function(){
    $('header').toggleClass('open');
  });


  //NAVBAR SHOW - HIDE
  $(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".hero").height() -86;			

    if (scroll > homeheight ) {												
      $("header").addClass('fixed');
      } else {
      $("header").removeClass('fixed');
      }
    }); 



// MAGNIFIC POPUP FOR PORTFOLIO PAGE
function magnific()  {    
  if ($('.lightbox-icon, .lightbox .image').length) {
    $('.lightbox-icon, .lightbox .image').magnificPopup({
          type:'image',
          gallery:{enabled:true},
          zoom:{enabled: true, duration: 300}
      });
    }

   // LIGHTBOX VIDEO
  $('.video-icon').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
}

magnific();
  

  // SCROLL ANIMATION
  new WOW({ offset: 200, mobile: false }).init();
  

  //CLIENT SLIDER JS
  $(".bxslider").bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 300,
    slideMargin: 0,
    ticker: true,
    speed: 30000
  });

  //PORTFOLIO JS
var $container = $('.masonry');
    $container.isotope({
      itemSelector: '.grid-item, .lightbox-gallery .msnry',
      gutter:0,
      transitionDuration: "0.5s",
      columnWidth: '.grid-item'
    });
    $('.portfolio_filter ul li a').on("click", function(){
      $(".portfolio_filter ul li a").removeClass("select-cat");
      $(this).addClass("select-cat");        
      var selector = $(this).attr('data-filter');
      $(".masonry").isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false,
    }
  });
      return false;
  });   
  
  $(".filter-icon").on("click", function() {
          $('.portfolio_filter').addClass('show');        
  });

  $(".portfolio_filter").on("click", function (event) {
  if (!$(event.target).is(".portfolio_filter ul li a")) {
          $('.portfolio_filter').removeClass('show');
          return false;
      }
  });   

  // Infinite Scroll
  var curPage = 1;
  var pagesNum = $("#pagination-selector").find("li a:last").text();   // Number of pages

  $container.infinitescroll({
      itemSelector: '.grid-item',
      nextSelector: '.portfolio-pagination li a',
      navSelector: '#pagination-selector',
      extraScrollPx: 0,
      bufferPx: 0,
      maxPage: 6,
      loading: {
          finishedMsg: "No more works",
          msgText: '<div class="loader"><span></span></div>',
          speed: 'slow',
          selector: '.load-more',
      },
  },
  // trigger Masonry as a callback
  function( newElements ) {

        var $newElems = $( newElements );
        $newElems.imagesLoaded(function(){  // Append masonry        
          $newElems.animate({ opacity: 1 });
          $container.isotope( 'appended', $newElems, true ); 
        });
        // Check last page
        curPage++;
        if(curPage == pagesNum) {
          $( '.load-more button' ).remove();
        }
        $('.load-more').find('button').css('visibility', 'visible');
      });

      $container.infinitescroll( 'unbind' );
      // jQuery
  $container.on( 'append.infinitescroll', function( event, response, path, items ) {
    console.log( 'Loaded: ' + path );
  });


      $( '.load-more button' ).on('click', function() {
        setTimeout(function()
        { 
         magnific(); 
         },1000);  
        $container.infinitescroll( 'retrieve' );
        $('.load-more').find('button').css('visibility', 'hidden');
        return false;
      });

  $(window).bind("pageshow", function(event) {
      if (event.originalEvent.persisted) {
          window.location.reload(); 
      }
  });



//   // singn up modal
//   // <script>
//   // $(document).ready(function() {
//   //   $(".signUpBtn").click(function() {
//   //     $("#signUpModal").modal('show');
//   //   })
//   // });
//   // </script>

//   // Get the modal
// var modal = document.getElementById("signUpModal");

// // Get the button that opens the modal
// var btn = document.getElementById("signUpBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

jQuery(document).ready(function($){
	var formModal = $('.cd-user-modal'),
		formLogin = formModal.find('#cd-login'),
		formSignup = formModal.find('#cd-signup'),
		formForgotPassword = formModal.find('#cd-reset-password'),
		formModalTab = $('.cd-switcher'),
		tabLogin = formModalTab.children('li').eq(0).children('a'),
		tabSignup = formModalTab.children('li').eq(1).children('a'),
		forgotPasswordLink = formLogin.find('.cd-form-bottom-message a'),
		backToLoginLink = formForgotPassword.find('.cd-form-bottom-message a'),
		mainNav = $('.slider-content');

	//open modal
	mainNav.on('click', function(event){
		$(event.target).is(mainNav) && mainNav.children('ul').toggleClass('is-visible');
	});

	//open sign-up form
	mainNav.on('click', '.cd-signup', signup_selected);
	//open login-form form
	mainNav.on('click', '.cd-signin', login_selected);

	//close modal
	formModal.on('click', function(event){
		if( $(event.target).is(formModal) || $(event.target).is('.cd-close-form') ) {
			formModal.removeClass('is-visible');
		}	
	});
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		formModal.removeClass('is-visible');
	    }
    });

	//switch from a tab to another
	formModalTab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( tabLogin ) ) ? login_selected() : signup_selected();
	});

	//hide or show password
	$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');
		
		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'Hide' == togglePass.text() ) ? togglePass.text('Show') : togglePass.text('Hide');
		//focus and move cursor to the end of input field
		passwordField.putCursorAtEnd();
	});

	//show forgot-password form 
	forgotPasswordLink.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	//back to login from the forgot-password form
	backToLoginLink.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.addClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.addClass('selected');
		tabSignup.removeClass('selected');
	}

	function signup_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.removeClass('is-selected');
		formSignup.addClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.removeClass('selected');
		tabSignup.addClass('selected');
	}

	function forgot_password_selected(){
		formLogin.removeClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.addClass('is-selected');
	}

	//REMOVE THIS - it's just to show error messages 
	// formLogin.find('input[type="submit"]').on('click', function(event){
	// 	event.preventDefault();
	// 	formLogin.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	// });
	// formSignup.find('input[type="submit"]').on('click', function(event){
	// 	event.preventDefault();
	// 	formSignup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	// });


	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}

});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.focus();
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};


}); // document read end 



