import './lib/lib';





$('button').on('click', function() {
    $(this).toggleClass('active');
})

function sayHello() {
    console.log('Hello!');
}

// console.log($('div').eq(5).find('.find-me'));
// console.log($('.child').closest('.closest-test'));
// console.log($('.child2').closest('.closest-test-mult'));
console.log($('.find-siblings').siblings());
