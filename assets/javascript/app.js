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
var yaaa = "YAAAAAAAAA!"
var lancelotClicked = false;
var robinClicked =false;
var galahadClicked = false;
var arthurClicked = false;
var questA = "To find Castle Anthrax!";
var questB = "To push the pram a lot!";
var questC = "To find migratory coconuts!";
var questD = "To seek the Holy Grail!"
var namesClicked = 0;
var noNameClicked = "You don't even know your own name? I blow my nose at you!"
var gameOverText = "GAME OVER"

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
	} else {
		// Hide name-screen, continue-text and timer, show the death screen.
		$('#name-screen').hide();
		$('#timer').hide();
		$('#death-screen').show();
		//Emplty out the yaaa and continue-text-death(or else every time the timer runs out, it will add more text to the elements.)
		$('#yaaa').text('');
		$('#continue-text-death').text('');
		// Print out yaaa into the #yaaa element.
		$(function() {
			showText('#yaaa', yaaa, 0, 5);
		});
		// Wait three seconds, then show continue-text
		setTimeout(function() {
			$(function () {
				showText('#continue-text-death', continueText, 0, 5)
			});
		}, 3)
	}
}

// When title-screen is clicked...
$('#title-screen').click(function() {
	// Title-screen is display: none-ed...
	$('#title-screen').hide();
	// Intro-screen and continue-text are display: block-ed...
	$('#intro-screen').show();
	$('#continue-text').show();
	//Our showText function is invoked to print to intro-text element.		
	$(function () {
		showText('#intro-text', introText, 0, 5);
	});
	//Then we wait eight seconds and print to the continue-text element.		
	setTimeout(function() {
		$(function () {
			showText('.continue-text', continueText, 0, 5)
		});
	}, 8);
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
		showText('#questions-three', questionsThree, 0, 5);
	});
	//Then we wait six seconds and print to the continue-text element.		
	setTimeout(function() {
		$(function () {
			showText('.continue-text', notAfraid, 0, 5)
		});
	}, 6);
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
		showText('#what-name', whatName, 0, 5);
	});
	//Then we wait two seconds and print to the choices.		
	setTimeout(function() {
		$(function () {
			showText('#lancelot', firstName, 0, 5)
		});
	}, 2)
	setTimeout(function() {
		$(function() {
			showText('#robin', secondName, 0, 5)
		});
	}, 3)
	setTimeout(function() {
		$(function() {
			showText('#galahad', thirdName, 0, 5)
		});
	}, 5)
	setTimeout(function() {
		$(function() {
			showText('#arthur', fourthName, 0, 5)
		});
	}, 6)
	//Wait nine seconds, then show the timer...
	setTimeout(function() {
		$('#timer').show();
		//And call the timer function...
		timer ('#timer', 10, 1000);
	}, 9)
});

//If continue-text-death is clicked...
$('#continue-text-death').click(function() {
	if (namesClicked === 0) {
		$('#death-screen').hide();
		$('#game-over-screen').show();
		$(function() {
			showText('#no-name-clicked', noNameClicked, 0, 5);
		})
		setTimeout(function() {
			$(function() {
				showText('#game-over-text', gameOverText, 0, 5);
			})			
		}, 3)
	} 
	//If all the names have already been clicked...
	else if (lancelotClicked === true && robinClicked === true && galahadClicked === true && arthurClicked === true) {
		//Hide the death-screen and show the game-over screen
		$('#death-screen').hide();
		$('#game-over-screen').show();
		//Otherwise, just go back to the name screen.
	} else {
		$('#name-screen').show();
		$('#death-screen').hide();
		//But reset the timer (otherwise, it has already run and won't appear.)
		$('#timer').show();
		setTimeout(function() {
			timer('#timer', 10, 1000);
		}, 2);
	}
});

//If the user clicks lancelot...
$('#lancelot').click(function() {
	//Change value of lancelotClicked to true.
	lancelotClicked = true;
	namesClicked++;
	//Turns the click functionality off for #lancelot...
	$('#lancelot').off('click');
	//And makes his name gray...
	$('#lancelot').css('color', 'gray');
	//Hide name-screen and death-screen...
	$('#name-screen').hide();
	$('#death-screen').hide();
	//Show the lancelot-quest screen
	$('#lancelot-screen').show();
	//Print the whatQuest var to the what-quest element.
	$(function () {
		showText('#what-quest', whatQuest, 0, 5);
	});
	setTimeout(function() {
		$(function () {
			showText('#quest-a', questA, 0, 5)
		})
	}, 2);
	setTimeout(function() {
		$(function() {
			showText('#quest-b', questB, 0, 5)
		})
	}, 2);
	setTimeout(function() {
		$(function() {
			showText('#quest-c', questC, 0, 5)
		})
	}, 2);
	setTimeout(function() {
		$(function() {
			showText('#quest-d', questD, 0, 5)
		})
	}, 2);
	
})