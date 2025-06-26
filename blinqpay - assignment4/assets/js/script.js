document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.ham-menu');
    const navList = document.querySelector('.blinqPay-links');

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

    
      let navbar = $('.navbar');
        $(window).scroll(function () {
        
        if ($(window).scrollTop() > 100) {
            navbar.addClass('nav-shadow');
        } else {
            navbar.removeClass('nav-shadow');
        }
    });

    if(window.innerWidth <= 767){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

});