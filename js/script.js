
// loader //

$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });
})



$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    // Typed the sub title
    var typed = new Typed(".typed", {
        strings: ["Web Developer"],
        loop: true,
        typeSpeed: 70,
        startDelay: 1000,
        showCursor: false
    });

        $('.owl-carousel').owlCarousel({
            loop:true,
            items: 4,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                938:{
                    items:4
                }
            }
        })


        // skills section 
        
        var skillsTopOffset = $(".skillsSection").offset().top;

        $(window).scroll(function() {
            if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
                
                $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
       
            }

    });

    // fancyBox
    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        
            $(".items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 1500,
                    easing: 'linear',
                    queue: false
                }
            });

            return false;

    });

    // Navbar

    $("#navigation li a").click(function(e){
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop:targetPosition - 50 }, "slow");

    });


    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickNavigation);

    function stickNavigation() {
        const body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav");

        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }

    }
 
/*     // active class for a
    $('#navigation li a').click(function(e) {
    
        $('.nav-item li a.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    }); */

});

