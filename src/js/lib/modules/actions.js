import $ from '../core';

$.prototype.html = function(htmlCode) {
    for(let i = 0; i < this.length; i++) {
        if (htmlCode) {
            this[i].innerHTML = htmlCode;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};


$.prototype.eq = function(i) {
    const selected = this[i];
    const thisLength = Object.keys(this).length;

    for(let i = 0; i < thisLength; i++) {
        delete this[i];
    }

    this[0] = selected;
    this.length = 1;

    return this;
};


$.prototype.index = function() {

    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findElIndex = (el) => {
        return el == this[0];
    };

    return childs.findIndex(findElIndex);
};


$.prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for(let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);

        if (arr.length == 0) {
            continue;
        }

        for(let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }
    
    this.length = numberOfItems;

    const thisLength = Object.keys(this).length;
    for(; numberOfItems < thisLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};


$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    const thisLength = Object.keys(this).length;
    for(; counter < thisLength; counter++) {
        delete this[counter];
    }

    return this;
};


$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for(let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for(let j = 0; j < arr.length; j++) {
            if (copyObj[i] == arr[j]) {
                continue;
            }
            
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }
    
    this.length = numberOfItems;

    const thisLength = Object.keys(this).length;
    for(; numberOfItems < thisLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};