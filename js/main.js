(function ($) {
    "use strict";
    
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            arrows: true,
            prevArrow:'<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>Prev</button>',
            nextArrow:'<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i>Next</button>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
mainSlider();

// service-active
$('.service-active').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow:4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>Prev</button>',
    nextArrow:'<button type="button" class="slick-next">Next<i class="lnr lnr-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    
  // causes-active
  $('.causes-active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left-circle"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="lnr lnr-arrow-right-circle"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // testimonial-active
  $('.testimonial-active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left-circle"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="lnr lnr-arrow-right-circle"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // brand-active
  $('.brand-active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // niceSelect
  $('select').niceSelect();

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
    });
    
    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });
    
    
    
    $('.grid').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
          }
        });
    });
    
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });	
    
    
    
    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    
    
    })(jQuery);	