const swiper = new Swiper('.swiper', {

    // effect: "cards",
    lazy: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 400,
        modifier: 1,
        // slideShadows: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,

        },
        768: {
          slidesPerView: 4,

        },
        1024: {
          slidesPerView: 5,

        },
      },
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
