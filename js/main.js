// Collab Example Section
const vendorSection = document.querySelector('.collab-example-section .vendor');
const supervisorSection = document.querySelector('.collab-example-section .supervisor');
const vendorButton = document.querySelector('.collab-example-section .vendor-button');
const supervisorButton = document.querySelector('.collab-example-section .supervisor-button');

vendorButton.addEventListener('click', () => {
	if (vendorSection.classList.contains('ce-inactive-section')) {
		supervisorSection.classList.add('ce-inactive-section');
		vendorSection.classList.remove('ce-inactive-section');
		vendorButton.classList.remove('ce-inactive-button');
		supervisorButton.classList.add('ce-inactive-button');
	}
});

supervisorButton.addEventListener('click', () => {
	if (supervisorSection.classList.contains('ce-inactive-section')) {
		vendorSection.classList.add('ce-inactive-section');
		supervisorSection.classList.remove('ce-inactive-section');
		supervisorButton.classList.remove('ce-inactive-button');
		vendorButton.classList.add('ce-inactive-button');
	}
});

// Collab Examples Show More/Less Text
const dots = document.querySelectorAll('.collab-example-section .vendor li > .dots,.supervisor li > .dots');
const moreText = document.querySelectorAll('.collab-example-section .vendor li > .text-more,.supervisor li > .text-more');
const buttonText = document.querySelectorAll('.collab-example-section .vendor li > .see-more,.supervisor li > .see-more');

buttonText.forEach((button, i) => {
	button.addEventListener('click', function() {
		if (dots[i].style.display === "none") {
			dots[i].style.display = "inline";
			button.innerHTML = "see more";
			moreText[i].style.display = "none";
		} else {
			dots[i].style.display = "none";
			button.innerHTML = "see less";
			moreText[i].style.display = "inline";
		}
	});
});

// Feedback Carouselle
const carousel = new Flickity( '.feedback-carousel', {
	cellAlign: "left",
	freeScroll: true,
	wrapAround: true,
	autoPlay: true,
	pageDots: false,
	prevNextButtons: false
  });

const previousButton = document.querySelector('.button--previous');
previousButton.addEventListener( 'click', function() {
	carousel.previous();
});

const nextButton = document.querySelector('.button--next');
nextButton.addEventListener( 'click', function() {
	carousel.next();
});

// Video Play/Pause Button
const videoElement = document.querySelector('video');
const playPauseButton = document.querySelector('.video-control');

playPauseButton.addEventListener('click', () => {
	playPauseButton.classList.toggle('playing');
	if (playPauseButton.classList.contains('playing')) {
		videoElement.play();
	}
	else {
		videoElement.pause();
	}
});

videoElement.addEventListener('ended', () => {
	playPauseButton.classList.remove('playing');
});

// Packages Checkbox
const checkboxElement = document.querySelector('.collab-packages-section > .switch-container > input');
const monthlyElement = document.querySelector('.collab-packages-section > .switch-container > .monthly');
const yearlyElement = document.querySelector('.collab-packages-section > .switch-container > .yearly');

checkboxElement.addEventListener('change', function() {
	if (this.checked) {
		monthlyElement.style.color = '#A79D9D';
		yearlyElement.style.color = '#000';
	  } else {
		monthlyElement.style.color = '#000';
		yearlyElement.style.color = '#A79D9D';
	  }
});