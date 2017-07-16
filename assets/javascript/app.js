// Copy for the intro screen saved in var.
var introText = "Clinging to the cliff's face, your party manages to find a way across the Gorge of Eternal Peril. It's the legendary Bridge of Death!";
var continueText = "> Click here to continue.";
var notAfraid = "> Ask me the questions, bridge keeper. I'm not afraid!";
var questionsThree = "STOP! Who would cross the Bridge of Death must answer me these questions three, ere the other side he see.";
var whatName = "What is your name?";
var firstName = "> Sir Lancelot of Camelot.";
var secondName = "> Sir Robin of Camelot.";
var thirdName = "> Sir Galahad of Camelot.";
var fourthName = "> It is Arthur, King of the Britons.";
var whatQuest = "What is your quest?";


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

// Declare a timer function.
function timer (target, i, interval) {
	if (i > -1) {
		$(target).text(i--);
		setTimeout(function() {
			timer(target, i, interval);
			console.log(i);
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
	//Slowly print the questionsThree variable to the #questions-three element.
	$(function () {
		showText('#questions-three', questionsThree, 0, 50);
	});
	//Then we wait six seconds and print to the continue-text element.		
	setTimeout(function() {
		$(function () {
		showText('.continue-text', notAfraid, 0, 50)
		});
	}, 6000)
});

//When continue-text is clicked again...
$('#continue-text-two').click(function() {
	//Stop screen is display: none-ed...
	$('#stop-screen').hide();
	//Text in .continue-text element is replaced with nothing...
	$('.continue-text').text('');
	//And name-screen is display: block-ed.
	$('#name-screen').show();
	//Slowly print the what-name variable to the #whatName element.
	$(function () {
		showText('#what-name', whatName, 0, 50);
	});
	//Then we wait two seconds and print to the choices.		
	setTimeout(function() {
		$(function () {
			showText('#lancelot', firstName, 0, 50)
		});
	}, 2000)
	setTimeout(function() {
		$(function() {
			showText('#robin', secondName, 0, 50)
		});
	}, 3500)
	setTimeout(function() {
		$(function() {
			showText('#galahad', thirdName, 0, 50)
		});
	}, 5000)
	setTimeout(function() {
		$(function() {
			showText('#arthur', fourthName, 0, 50)
		});
	}, 6500)
	//Wait eight seconds, then show the timer...
	setTimeout(function() {
		$('#timer').show();
		//And call the timer function...
		timer ('#timer', 10, 1000);
	}, 8000)
});

//If the user clicks lancelot...
$('#lancelot').click(function() {
	//Hide name-screen...
	$('#name-screen').hide();
	//Show the lancelot-quest screen
	$('#lancelot-screen').show();
	//Print the whatQuest var to the what-quest element.
	$(function () {
		showText('#what-quest', whatQuest, 0, 50);
	});
})