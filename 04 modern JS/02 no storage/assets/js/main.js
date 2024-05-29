let dudes = document.querySelectorAll(".choice img");

dudes = Array.from(dudes);

dudes.forEach(function(dude) {
	dude.addEventListener("click", function() {
		let scoreElement = this.nextElementSibling,
			score = Number(scoreElement.textContent);
		score = score + 1;
		scoreElement.textContent = score
	});
});