import $ from '../core';

$.prototype.addClass = function(...classNames) { // rest
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames); // spread
    }

    return this;
};


$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};


$.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(className);
    }

    return this;
};