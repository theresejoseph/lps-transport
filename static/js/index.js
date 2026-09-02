document.addEventListener('DOMContentLoaded', function () {
  // Video carousel component (kept from the template). Initialises only if a
  // carousel element is present on the page.
  if (typeof bulmaCarousel !== 'undefined' && document.querySelector('.carousel')) {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: false,
      pagination: false
    });
  }
});
