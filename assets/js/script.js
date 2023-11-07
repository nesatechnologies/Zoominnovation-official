(function ($) {

  "use strict";

  // Navbat Overlay
  


  // Number Loader

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});

// Course Slider 01

$('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


// Course Slider 02

$('.slider-2').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});




// init jarallax parallax
var initJarallax = function () {
  jarallax(document.querySelectorAll(".jarallax"));

  jarallax(document.querySelectorAll(".jarallax-img"), {
    keepImg: true,
  });
}

initJarallax();
initQuantitySpinner();
  
  
})(jQuery);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
