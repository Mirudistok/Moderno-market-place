document.addEventListener('DOMContentLoaded', () => {

    const mixer = mixitup('.products__inner-box');
    
    $(".rate-star").rateYo({
        rating: 3,
        starWidth: "12px",
        readOnly: true,
    });

    $('.product-slider__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,

    });

    $('.js-range-slider').ionRangeSlider({
        type: 'double',
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: '$',
    });

});