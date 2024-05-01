//VIDEO 2
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