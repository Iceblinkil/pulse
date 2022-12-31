// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1000,
//         // adaptiveHeight: true,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                     }
//             }
//         ]
//       });
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 1000,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    responsive: {
        640: {
            dots: true,
            arrows: false,
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1
        }
      }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });