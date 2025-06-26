$(document).ready(function () {
  $('#nav-toggle').click(function () {
    $('#nav-menu').slideToggle(300);
    // $('#nav-menu').toggleClass('active');
  });




  // const $navbar = $('.navbar');
  // // const heroOffset = $('.hero').offset().top;

  // $(window).on('scroll', function () {
  //   if ($(window).scrollTop() >= 50) {
  //     $navbar.addClass('scrolled');
  //   } else {
  //     $navbar.removeClass('scrolled');
  //   }
  // });






  $('.dropdown-toggle').click(function () {
    const current = $(this).next('.dropdown-menu');
    $('.dropdown-menu').not(current).slideUp();
    current.slideToggle();

    // $(this).next('.dropdown-menu').slideToggle('show')
  });

  $('.work-tabs .tabs li').click(function (event) {
    event.preventDefault();
    var index = $(this).index();

    $('.work-grid').removeClass('show');
    $('.work-grid').eq(index).addClass('show');

    $('.work-tabs .tabs li').removeClass('show').attr("aria-selected", "false").attr("tabindex", "-1");
    $(this).addClass('show').attr("aria-selected", "true").attr("tabindex", "0").focus();
  });

  $('.work-tabs .tabs li').keydown(function (e) {
    var currentIndex = $('.work-tabs .tabs li').index($(this));

    if (e.key === "ArrowRight") {
        var nextIndex = (currentIndex + 1) % $('.work-tabs .tabs li').length;
        $('.work-tabs .tabs li').eq(nextIndex).click();
    } else if (e.key === "ArrowLeft") {
        var prevIndex = (currentIndex - 1 + $('.work-tabs .tabs li').length) % $('.work-tabs .tabs li').length;
        $('.work-tabs .tabs li').eq(prevIndex).click();
    }
});



  const swiper = new Swiper('.review-grid', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      //   768: {
      //     slidesPerView: 1
      //   },
      1024: {
        slidesPerView: 2
      },
      //   1400: {
      //     slidesPerView: 2
      //   }
    }
  });




});

