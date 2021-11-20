// Simple structure to understand how it works
// (() => {
//     const $ = function(selector) {
//         const items = document.querySelectorAll(selector);
//         console.log('works');
//         const obj = {};

//         obj.show = () => {
//             items.forEach(el => {
//                 if (el.style) {
//                     el.style.display = '';
//                 }
//             });
//             return obj;
//         };

//         obj.hide = () => {
//             items.forEach(el => {
//                 if (el.style) {
//                     el.style.display = 'none';
//                 }
//             });
//             return obj;
//         };

//         return obj;
//     }

//     window.$ = $;
// })()





// Structure convenient for expansion and division into modules
const $ = function(selector) {
    return new $.prototype.init(selector);
}

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // object
    }
    Object.assign(this, document.querySelectorAll(selector)) // "this" contains prototype prop (not plain object)
    this.length = document.querySelectorAll(selector).length; // elements length prop

    return this // $.prototype.init.prototype
}

// we can use any methods from $.prototype.init.prototype on the object created by function $
$.prototype.init.prototype = $.prototype; 

window.$ = $; // create a global variable
export default $; // in order to add new methods to the library in lib.js file
