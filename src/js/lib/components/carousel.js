import $ from '../core';


$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel__inner')).width;
        const slides = this[i].querySelectorAll('.carousel__item');
        const slidesWrapper = this[i].querySelector('.carousel__slides');
        const indicators = this[i].querySelectorAll('.carousel__indicators li');

        slidesWrapper.style.width = `${100 * slides.length}%`;
        slides.forEach( el => {
            el.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();

            if (offset == ( +width.replace(/\D/g, '') * (slides.length - 1) )) {
                offset = 0;
            } else {
                offset += + width.replace(/\D/g, '');
            }

            slidesWrapper.style.transform = `translateX(-${offset}px)`

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++
            }
            indicators.forEach(item => item.classList.remove('indicator-active'));
            indicators[slideIndex].classList.add('indicator-active');
        });
        
        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();

            if (offset == 0) {  
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= + width.replace(/\D/g, '');
            }

            slidesWrapper.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--
            }
            indicators.forEach(item => item.classList.remove('indicator-active'));
            indicators[slideIndex].classList.add('indicator-active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel__indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            slidesWrapper.style.transform = `translateX(-${offset}px)`;
            indicators.forEach(item => item.classList.remove('indicator-active'));
            indicators[slideIndex].classList.add('indicator-active');
        })
    }
}

$('.carousel').carousel();