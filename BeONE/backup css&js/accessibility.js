

    // font size
    var $elements = $("body *").not("img, picture, svg");
    var originalSizes = [];

    // Store original font sizes
    $elements.each(function (index) {
        originalSizes[index] = parseInt($(this).css("font-size")) || 16;
    });

    $(".increase").on("click", function () {
        $elements.each(function (index) {
            var currentSize = parseInt($(this).css("font-size"));
            if (currentSize === originalSizes[index]) {
                $(this).css("font-size", originalSizes[index] + 2 + "px");
            }
        });
    });

    $(".decrease").on("click", function () {
        $elements.each(function (index) {
            var currentSize = parseInt($(this).css("font-size"));
            if (currentSize === originalSizes[index]) {
                $(this).css("font-size", originalSizes[index] - 2 + "px");
            }
        });
    });

    $(".reset").on("click", function () {
        $elements.each(function (index) {
            $(this).css("font-size", originalSizes[index] + "px");
        });
    });



    //dark mode
    $('.darkmode').click(function () {
        $('body').toggleClass('dark')
        console.log("Toggle successfull")
    })


    // keyboard navigation for 1st tab
    $('.tab').keydown(function (e) {
        var currentIndex = $('.tab').index($(this));

        if (e.key === "ArrowRight") {
            var nextIndex = (currentIndex + 1) % $('.tab').length;
            $('.tab').eq(nextIndex).click();
        } else if (e.key === "ArrowLeft") {
            var prevIndex = (currentIndex - 1 + $('.tab').length) % $('.tab').length;
            $('.tab').eq(prevIndex).click();
        }
    });


    //Keyboard navigation for service tab
    $('.service-tab .svc-tab').keydown(function (e) {
        var currindex = $('.service-tab .svc-tab').index($(this));

        if (e.key === "ArrowRight") {
            var nxtindex = (currindex + 1) % $('.service-tab .svc-tab').length;
            $('.service-tab .svc-tab').eq(nxtindex).click();
        } else if (e.key === "ArrowLeft") {
            var previndex = (currindex - 1 + $('.service-tab .svc-tab').length) % $('.service-tab .svc-tab').length;
            $('.service-tab .svc-tab').eq(previndex).click();
        }

    });


    $('.task').click(function(){
       
        $('input[type="radio"]').attr('aria-checked','false').attr('tabindex', -1);
        $(this).find('input[type="radio"]').attr('aria-checked','true');

    });

    // $('.radio').on("keydown", function(e){
    //     if(e.key === " " || e.key === "Enter" ){
    //         e.preventDefault();
    //         $(this).click();
    //     }
    // });
    $('.task').on('keydown', function(e) {
        if (e.key === 'Enter') {
            $(this).find('input[type="radio"]').prop('checked', true)
        }
    });
  
    $(".checkbox").on("click", function () {
        //   const $cb = $(this);

       
          const isChecked = $(this).attr("aria-checked") === "true";
          $(this).attr("aria-checked", !isChecked);
        });
    
        // $(".checkbox").on("keydown", function (e) {
        //   if (e.key === " " || e.key === "Enter") {
        //     e.preventDefault();
        //     $(this).click();
        //   }
        // });








