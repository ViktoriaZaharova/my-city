$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
   $('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});