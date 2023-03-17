import $ from 'jquery'
$('.header__mobile-menu').click(function () {
  $(this).find('.burger').toggleClass('open')
  $('body').toggleClass('open')
  $('.header__content').slideToggle();
})