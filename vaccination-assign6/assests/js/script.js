document.addEventListener('DOMContentLoaded', function () {
    
    AOS.init({
        duration: 650,
        once: true
    });

    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        autoplay:{
            delay: 2000,
        }

    });



    const hamMenu = document.querySelector('.ham-menu');
    const navList = document.querySelector('.vaccination-links');

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

    const inputs = document.querySelectorAll('.input-fields input');
    if (inputs.length > 0) {
        inputs[0].classList.add('input-active');
        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                inputs.forEach(i => i.classList.remove('input-active'));
                this.classList.add('input-active');
            });
        });
    }



    $(function () {
        const $details = $('.feedback-details');

        $details.removeClass('featured');
        $details.eq(1).addClass('featured');

        $details.on('mouseenter', function () {
            $details.removeClass('featured');
            $(this).addClass('featured');
        });

        $details.on('mouseleave', function () {
            $details.removeClass('featured');
            $details.eq(1).addClass('featured');
        });
    });



    $("#mobile").intlTelInput({
        initialCountry: "in",
        separateDialCode: true,
        // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
    });



});