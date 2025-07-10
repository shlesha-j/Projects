document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper('.category-swiper', {
        slidesPerView: 5,
        spaceBetween: 24,
        loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            360: { slidesPerView: 1.5, spaceBetween: 24, },
            450: { slidesPerView: 1.5, spaceBetween: 24, },
            576: { slidesPerView: 2.5, spaceBetween: 24, },
            768: { slidesPerView: 3, spaceBetween: 24, },
            1024: { slidesPerView: 4.5, spaceBetween: 24, },
            1440: { slidesPerView: 5, spaceBetween: 24, }
        },


    });

    const swiper2 = new Swiper('.masterpieces-swiper', {
        slidesPerView: 3.2,
        spaceBetween: 24,
        loop: true,
        breakpoints: {
            360: { slidesPerView: 1.2, spaceBetween: 24, },
            450: { slidesPerView: 1.2, spaceBetween: 24, },
            576: { slidesPerView: 2.5, spaceBetween: 24, },
            768: { slidesPerView: 3, spaceBetween: 24, },
            1024: { slidesPerView: 3.2, spaceBetween: 24, },
            1440: { slidesPerView: 3.2, spaceBetween: 24, }

        }
    });
    const swiper3 = new Swiper('.portfolio-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


    const swiper4 = new Swiper('.showcase-swiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            360: { slidesPerView: 1.2, centeredSlides: false, spaceBetween: 24, },
            450: { slidesPerView: 1.2, centeredSlides: false, spaceBetween: 24, },
            576: { slidesPerView: 2.5, centeredSlides: false, spaceBetween: 24, },
            768: { slidesPerView: 3,  centeredSlides: true, spaceBetween: 24, },
        }

        // centeredSlides: true,
        // effect: 'coverflow',
        // coverflowEffect: {
        //     rotate: 0,
        //     stretch: 50,
        //     depth: 90,
        //     modifier: 1,
        //     slideShadows: false,
        // },

    });






    const hamMenu = document.querySelector('.ham-menu');
    const navList = document.querySelector('.xinder-links');

    hamMenu.addEventListener('click', function () {
        hamMenu.classList.toggle('active');
        navList.classList.toggle('active');
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // or '' to reset
        }
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });








});

