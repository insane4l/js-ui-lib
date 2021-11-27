import $ from '../core';

$.prototype.accordion = function(titleActive = 'accordion__title-active', contentActive =
'accordion__content-active', paddings = 40) {

    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {

            $(this[i]).toggleClass(titleActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if(this[i].classList.contains(titleActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        });
    }
}


$('.accordion__title').accordion();