new Swiper('.card-wrapper', {
    loop: true,
    spaceBetwen:0,
  
    // pagination bullets
      pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // RESPONSIVE BREAKPOINTS
    breakpoints:{
        0:{
            sliderPerView:1
        },
        768:{
            sliderPerView:1
        },
        1024:{
            sliderPerView:1
        },
    }
  });