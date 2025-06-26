

document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.ham-menu');
    const navList = document.querySelector('.tian-links');

    hamMenu.addEventListener('click', function () {
        hamMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // const swiper = new Swiper('.courseSwiper', {
    //     loop: true,
    //     slidesPerView: 4,
    //     spaceBetween: 24,
    //    freeMode: true,


    // });

     let swiperInstance;
function handleSwiper() {
    if (window.innerWidth <= 768) {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    } else {
        if (!swiperInstance) {
            swiperInstance = new Swiper('.courseSwiper', {
                loop: false,
                spaceBetween: 24,
                slidesPerView: 4,
                freeMode: true,
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                    
                }
            });
        }
    }
}

window.addEventListener('resize', handleSwiper);
window.addEventListener('DOMContentLoaded', handleSwiper);



let darkmodeBtn = document.querySelector('.darkModeBtn');
let body = document.querySelector('body');

darkmodeBtn.addEventListener('click', function () {
    body.classList.toggle('dark');
    // darkmodeBtn.classList.toggle('active');
})


var btn = $('#button');
let navbar = $('.tian-nav');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }

  if ($(window).scrollTop() > 300) {
    navbar.addClass('nav-shadow');
  } else {
    navbar.removeClass('nav-shadow');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


});