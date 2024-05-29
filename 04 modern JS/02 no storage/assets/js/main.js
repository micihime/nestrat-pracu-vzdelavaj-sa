'use strict';

	/*  !!!

		[ todo: ]
		- prerobit na localStorage
		- spravit 'clean' verziu bez js a mozno css hover efektov?
			a bez .desaturate classu?

	*/


// najdeme vsetkych dvoch sexosov
var dudes = document.querySelectorAll('.contact-form img'),
	dudes = Array.from(dudes); // zmine nodelist na array


// aby sme mohli cyklom kazdemu pridat event listeners
dudes.forEach(function( dude ) {

	// po kliknuti zdviheme skore
	dude.addEventListener('click', function (event) {
		let scoreElement = this.nextElementSibling,
			score = Number( scoreElement.textContent );

		score = score + 1;
		scoreElement.textContent = score;
	});


	// ked vojdem na jedneho, druhy zbledne
	dude.addEventListener('mouseover', function (event) {
		let otherDude = _.without(dudes, this)[0];
		otherDude.classList.add('desaturate');
	});


	// ked vyjdem z jedneho, zmizne zblednutie
	dude.addEventListener('mouseout', function (event) {
		let otherDude = _.without(dudes, this)[0];
		otherDude.classList.remove('desaturate');
	});

});
