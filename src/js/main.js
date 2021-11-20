import './lib/lib';



$('div').hide();
$('.active').show().addClass('indigo').toggleClass('testtest').click(sayHello);
// $('div').toggle();

$('button').on('click', function() {
    $(this).toggleClass('active');
})

function sayHello() {
    console.log('Hello!');
}