$(function () { //$(document).ready(function () {
    console.log("Bud dam na zaciatok JS suboru document ready alebo uvediem skripty v HTML subore na zaver, pred ukoncovaci BODY tag.");
});

//VIDEO 4
/*
let fadeOut = $('.fade-out'),
    styleObj = { 
        position: 'relative', 
        background: 'blue',
        zIndex: 10 //v CSS property z-index, v JS sa pise camel case - plati pre vsetky viacslovne CSS properties
    },
    siteHeight = $('body').height(),
    animationDuration = 3000;

fadeOut.css(styleObj);
fadeOut.on('mouseenter', function() {
    this.animate({ top: siteHeight }, animationDuration).fadeOut();
});
*/

//VIDEO 3
/*
//predvyrobene animacie - menia css vlastnosti
$('.fade-out').fadeOut();
$('.fade-out').fadeIn();
$('.fade-out').fadeToggle(); //zisti si hodnotu a urobi opak
$('.fade-out').fadeToggle();
//mozem si urobit vlastnu animaciu
$('.slow-hide').animate({ width: 1000 });
$('.post-title').animate({ width: 1000 }, 3000);

//najlepsie je ulozit si element do premennej, aby ho jQuery hladal v DOM len 1x
let fadeOut = $('.fade-out');
fadeOut.css({ position: 'relative', background: 'blue' });
fadeOut.animate({ top: 1000 }, 3000);
*/

//VIDEO 2
/*
$('.post-title').css({
    background: 'blue',
    color: 'yellow'
});

let obj = {
    background: 'yellow',
    color: 'blue'
}
$('#wow-element').css(obj);

console.log($('#wow-element').css('background'));

$('.slow-hide').text(); //getter
$('.slow-hide').text('wooooooooooooooooow'); //setter
*/

//VIDEO 1
/*
$('.post-title').hide();
$('.post-title').show();
$('h2').hide();
$('#wow-element').hide();
$('#wow-element h2').hide();

$('.slow-hide').hide(5000);
$('.fade-out').fadeOut(5000);
$('.fade-out').fadeIn(5000);

$('.post-title').hide().fadeIn(); //method chaining
*/