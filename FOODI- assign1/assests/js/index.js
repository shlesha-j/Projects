const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    // spaceBetween: 10,
      navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

    breakpoints: {
        1728:{
             slidesPerView: 3,
            spaceBetween: 40,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        767: {
            slidesPerView: 2,
            spaceBetween: 20,
          

        },

        360:{
            slidesPerView: 2,
            spaceBetween: 20,
        }

    }

});