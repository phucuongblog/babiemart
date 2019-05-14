jQuery(function($) {
    // Smooth Scrolling
    $(".backtop a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    // Show - Hide Back To Top Button
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $(".backtop").addClass("show");
        } else {
            $(".backtop").removeClass("show");
        }
    });
    $(".backtop").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    // Sticky Header
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        var h = $("#header").height();
        if (y > h) {
            $(".bottom-menu").addClass("is-sticky");
        } else {
            $(".bottom-menu").removeClass("is-sticky");
        }
    });
    // Change icon navbar-toggler
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('is-active');
    });
    // Slider Carousel
    $('.slider-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // News Carousel
    $('.news-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $("#scroller").simplyScroll({
        orientation: 'vertical',
    });
    // .action-btn event
    $('.support-btn').click(function(){
        $('.support-form').slideToggle();
    });
    // Add to cart form
    $('.cart-btn').click(function(){
        $('.order-form').fadeIn();
    })
    $('.close-btn').click(function(){
        $('.order-form').fadeOut();
    });
});
$(document).mouseup(function(e) {
    if (!$(".order-form--content").is(e.target) && $(".order-form--content").has(e.target).length === 0) {
        $(".order-form").fadeOut();
    }
});