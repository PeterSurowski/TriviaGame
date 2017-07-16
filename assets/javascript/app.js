// Copy for the intro screen saved in var.
var introText = "> Clinging to the cliff's face, your party manages to find a way across the Gorge of Eternal Peril. It's the legendary Bridge of Death!";
var continueText = "Click here to continue.";
var questionsThree = "> STOP! Who would cross the Bridge of Death must answer me these questions three, ere the other side he see.";
var whatName = "> What is your name?";

//Declare a function that will trigger the click sound.
function clickSound() {
	var object = document.createElement('audio');
	object.src = "assets/sounds/click.wav";
	object.volume = .9;
	object.autoPlay = false;
	object.preLoad = true;
	object.play();
}

// Declare a function that will slowly type out copy.
function showText (target, message, index, interval) {
	if (index < message.length) {
		$(target).append(message[index++]);
		setTimeout(function() {
			showText(target, message, index, interval);
			clickSound();
		}, interval);
	}
}

// When title-screen is clicked...
$('#title-screen').click(function() {
	// Title-screen is display: none-ed...
	$('#title-screen').hide();
	// Intro-screen is display: block-ed...
	$('#intro-screen').show();
		//Our showText function is invoked to print to intro-text element.		
		$(function () {
			showText('#intro-text', introText, 0, 50);
		});
		//Then we wait eight seconds and print to the continue-text element.		
		setTimeout(function() {
			$(function () {
			showText('.continue-text', continueText, 0, 50)
			});
		}, 8000)	
});

// When continue-text is clicked...
$('#continue-text').click(function() {
	// Intro screen is display: none-ed.
	$('#intro-screen').hide();
	//Stop-screen is display-block-ed...
	$('#stop-screen').show();
	// Text in .continue-text element is replaced with nothing.
	$('.continue-text').text('');
	//Slowly print the questionsThree variable to the #questionsThree element.
	$(function () {
		showText('#questionsThree', questionsThree, 0, 50);
	});
	//Then we wait six seconds and print to the continue-text element.		
	setTimeout(function() {
		$(function () {
		showText('.continue-text', continueText, 0, 50)
		});
	}, 6000)
});

//When continue-text is clicked again...
$('#continue-text-two').click(function() {
	//Stop screen is display: none-ed...
	$('#stop-screen').hide();
	//Text in .continue-text element is replaced with nothing...
	$('.continue-text').text();
	//And name-screen is display: block-ed.
	$('#name-screen').show();

});

