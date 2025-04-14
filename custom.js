$(document).ready(function () {
  $("#logo-slider").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      991: {
        items: 4,
      },
      1199: {
        items: 6,
      },
    },
  });

  $("#company-logo-slider").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      991: {
        items: 4,
      },
      1199: {
        items: 5,
      },
    },
  });

  $("#testimonial-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      575: {
        items: 1,
        dots: true,
      },
      767: {
        items: 1,
        dots: true,
      },
      1199: {
        items: 1,
      },
    },
  });
});
