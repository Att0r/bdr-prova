jQuery(function () {
  structure.init();
});

var structure = {
  init: function () { }
};

var home = {
  init: function () {
    this.slickHeader();
  },

  slickHeader: function () {
    $('.slick-header').slick({
      infinite: true,
      dots: true,
      arrows: false,
      // autoplay: true,
      // autoplaySpeed: 5000,
    });

    $('.slick-section').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
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
      ]
    });
  },
}