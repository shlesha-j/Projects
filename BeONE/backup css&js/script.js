AOS.init();

    // $('.dropdown-toggle').on('click', function (e) {
    //     e.preventDefault();
    //     const $menu = $(this).next('.dropdown-menu');

      
    //     $('.dropdown-menu').not($menu).slideUp();

    //     $menu.slideToggle();



       
    //     const $items = $menu.find('.dropdown-item');
    //     const $lastItem = $items.last();

    //     $lastItem.on('keydown.tabClose', function (e) {
    //         if (e.key === 'Tab') {
    //             $menu.slideUp();
    //         }
    //     });
    // });

    $('.dropdown-toggle').on('click', function (e) {
        e.preventDefault();
    
        const $toggle = $(this);
        const $menu = $toggle.next('.dropdown-menu');
        const isOpen = $menu.is(':visible');    
    
        
        $('.dropdown-menu').slideUp().attr('aria-hidden', 'true');
        $('.dropdown-toggle').attr('aria-expanded', 'false');
    
        if (!isOpen) {    
            $menu.slideDown().attr('aria-hidden', 'false');
            $toggle.attr('aria-expanded', 'true');
        }
    });
    
    
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            $('.dropdown-menu').slideUp().attr('aria-hidden', 'true');
            $('.dropdown-toggle').attr('aria-expanded', 'false');
        }
    });
    








$(document).on('click', function (e) {
    if (!$(e.target).closest('.nav-item.dropdown').length) {
        $('.dropdown-menu').slideUp();
    }
});


$('.decrease, .increase, .reset').click(function(){
    $('.decrease, .increase, .reset').removeClass('clicked')
    $(this).addClass('clicked');
});








// $('.nav-link').hover(function(){
//     $(this).addClass('act')
//     $(this).siblings('.nav-link').removeClass('act')

// });
$('.tab').click(function () {
    var index = $(this).index()

    $('.tab').removeClass('active').attr("aria-selected", "false").attr("tabindex", "-1");
    $(this).addClass('active').attr("aria-selected", "true").attr("tabindex", "0").focus();

    $('.info').removeClass('active')
    $('.info').eq(index).addClass('active')

    $(this).addClass('line')
    $(this).siblings('.tab').removeClass('line')


});









$('.service-tab .svc-tab').click(function (event) {
    event.preventDefault();
    var index = $(this).parent().index();

    $('.service-tab .svc-tab').removeClass('active').attr("aria-selected" , "false").attr("tabindex","-1");
    $(this).addClass('active').attr("aria-selected","true").attr("tabindex","0").focus();

    $('.spot').removeClass('active');
    $('.spot').eq(index).addClass('active');

    

});








// $('.service-tab .str').click(function () {
//     var index = $(this).index()
//     $('.spot').removeClass('active')
//     $('.spot').eq(index).addClass('active')

// });
$('.work-tabs ul li ').click(function (event) {
    event.preventDefault();
    var index = $(this).index();



    $('.portfolio .spot').removeClass('active');
    $('.portfolio .spot').eq(index).addClass('active');

    $(this).addClass('line')
    $(this).siblings('.work-tabs ul li').removeClass('line')
    


});






$('.review-tabs .R').hover(function () {
    var index = $(this).index();

    $('.reviews .review').removeClass('active');
    $('.reviews .review').eq(index).addClass('active');


});


$('.owl-carousel').owlCarousel({
    nav: true,   
    navText: ["<i class='fa-solid fa-backward'></i>", "<i class='fa-solid fa-forward'></i>"],  // navText appears
    slideBy: 2,
    // items: 1,
    margin: 10,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    // animateIn: 'fadeIn',
    // animateOut: 'fadeOut',
    loop: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },

    }

});

//accordion



$('.accordion-btn').click(function(){
     

    // var Expanded = $(this).attr('aria-expanded')==='true'

    // $(this).next('.accordion-content').slideToggle().find('.accordion-icon');

    // $('.accordion-content').not($(this).next()).slideUp();

    // $(this).attr('aria-expanded', true);
    // $('.accordion-btn').not($(this)).attr('aria-expanded', false);


    var isExpanded = $(this).attr('aria-expanded') === 'true';

        $('.accordion-content').not($(this).next()).slideUp();
        $('.accordion-btn').not(this).attr('aria-expanded', 'false').find('.accordion-icon').removeClass('arrow');

        $(this).next('.accordion-content').slideToggle();
        $(this).attr('aria-expanded', !isExpanded);
        $(this).find('.accordion-icon').toggleClass('arrow', !isExpanded);






});

$('#openAlertBtn').click(function() {
    $('#alertDialog').css('display', 'flex').find('.alert-box').focus();
    $('html body').css('overflow','hidden');
});

$('#closeAlertBtn').click(function() {
    $('#alertDialog').hide();
    $('html body').css('overflow','visible');
});

$('.btn').click(function(){
  $('#alertDialog').hide();
  $('html body').css('overflow','visible');
});



$(document).keydown(function(e) {
  if ((e.key === "Escape" || e.key === "Enter" )&& $('#alertDialog').is(':visible')) {
      $('#alertDialog').hide();
      // $('#openAlertBtn').focus(); 
  }
});


document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });





