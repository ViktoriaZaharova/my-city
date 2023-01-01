$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('header').toggleClass('active');
	$('.mobile-menu').fadeToggle();
});


$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	$('.mobile-menu').fadeOut();
	$('header').removeClass('active');
	return false;
});

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	$('.slick-slider').slick('setPosition');
});

$('.stages-work-slider-1').slick({
	slidesToShow: 4,
	infinite: false,
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

$('.about-slider-nav').slick({
	slidesToShow: 7,
	vertical: true,
	focusOnSelect: true,
	asNavFor: '.about-slider',
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				vertical: false,
			}
		}
	]
});

$('.about-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				swipe: true,
				asNavFor: '.about-slider-nav',
			}
		}
	]
});


// slick active
$(window).on('load resize', function () {
	if ($(window).width() < 768) {
		$('.layouts-slider:not(.slick-initialized)').slick({
			slidesToShow: 1,
			variableWidth: true,
			arrows: false,
		});
		$('.advantages-slider:not(.slick-initialized)').slick({
			slidesToShow: 1,
			variableWidth: true,
			arrows: false
		});


	} else {
		$(".layouts-slider.slick-initialized").slick("unslick");
		$(".advantages-slider.slick-initialized").slick("unslick");
	}
});
// slick active
