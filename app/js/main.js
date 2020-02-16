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

    const iconThLargeBtn= document.querySelector('.icon-th-large');
    const iconThListBtn = document.querySelector('.icon-th-list');
    const productItems = document.querySelectorAll('.product__item');

    iconThListBtn.addEventListener('click', () => {
        for(item of productItems) {
            item.classList.add('list');
        }
        iconThListBtn.classList.add('active');
        iconThLargeBtn.classList.remove('active');
    });

    iconThLargeBtn.addEventListener('click', () => {
        for(item of productItems) {
            if(item.classList.contains('list')) {
                item.classList.remove('list');
            }
        }
        iconThLargeBtn.classList.add('active');
        iconThListBtn.classList.remove('active');
    });


});