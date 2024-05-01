$('.post-title').hide();
$('.post-title').show();
$('h2').hide();
$('#wow-element').hide();
$('#wow-element h2').hide();

$('.slow-hide').hide(5000);
$('.fade-out').fadeOut(5000);
$('.fade-out').fadeIn(5000);

$('.post-title').hide().fadeIn(); //method chaining
