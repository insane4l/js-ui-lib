import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i])
                .addClass('tab-active')
                .siblings().removeClass('tab-active')
                .closest('.tab').find('.tab__content').removeClass('content-active')
                .eq($(this[i]).index()).addClass('content-active');
        })
    }
}

$('#exampleTab .tab__list-item').tab();