$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('header').toggleClass('active');
    $(this).toggleClass('open');
   $('.mobile-menu').fadeToggle();
});


$('[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
    $('.slick-slider').slick('setPosition');
});

$('.stages-work-slider-1').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.stages-work-slider-2').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.stages-work-slider-3').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.stages-work-slider-4').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $('.layouts-slider:not(.slick-initialized)').slick({
            slidesToShow: 1,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
        });
        $('.advantages-slider:not(.slick-initialized)').slick({
            slidesToShow: 1,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
        });


    } else {
        $(".layouts-slider.slick-initialized").slick("unslick");
        $(".advantages-slider.slick-initialized").slick("unslick");
    }
});
// slick active