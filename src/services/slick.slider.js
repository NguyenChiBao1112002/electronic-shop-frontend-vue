$(document).ready(function () {
    setTimeout(function() {
        $('.product-slider').slick({
            infinite: true,
            slidesToShow: 5,
            autoplay: true,
        });
    
        $('.product-list').slick({
            infinite: true,
            slidesToShow: 4,
        });
    }, 500)
    console.log($('.product-card'));
});