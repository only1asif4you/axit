/* 
**********************
FEEDBACK SLIDER     
**********************
*/
$(".owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 1500,
  smartSpeed: 500,

  responsiveClass: true,
  responsive: {
    320: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
