import $ from 'jquery'
import 'slick-carousel'

$('.pro__list').slick({
  infinite: true,
  slidesToShow: 2,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.72 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 0-1.06Z" fill="#cbced0"/></svg></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.28 20.03a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 0 1 0 1.06Z" fill="#cbced0"/></svg></button>',
  mobileFirst: true,
  responsive: [
    {
    breakpoint: 992,
    settings: 'unslick'
  }],
});
