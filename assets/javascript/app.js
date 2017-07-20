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
var questA = "> To find Castle Anthrax!";
var questB = "> To push the pram a lot!";
var questC = "> To find migratory coconuts!";
var questD = "> To seek the Holy Grail!"
var namesClicked = 0;
var noNameClicked = "You don't even know your own name? I blow my nose at you!"
var gameOverText = "GAME OVER"
var myTimeout;
var offYouGoText = "Right! Off you go."
var winText = "Some of you are not quite dead yet. Good work!"

//This var will play intermission music.
var music = document.createElement('audio');
music.src = "assets/sounds/music.mp3";
music.volume = .8;
music.autoPlay = false;
music.preLoad = true;

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
function showText(target, message, index, interval) {
	if (index < message.length) {
		$(target).append(message[index++]);
		setTimeout(function() {
			showText(target, message, index, interval);
			clickSound();
		}, interval);
	}
}

// Declare a timer function.
function timer(target, i, interval) {
	clearTimeout(myTimeout);
	if (i > -1) {
		$(target).text(i--);
		myTimeout = setTimeout(function() {
			timer(target, i, interval);
			console.log(i);
		}, interval);
	} else {
		// Hide name-screen, continue-text and timer, show the death screen.
		$('#name-screen, #name-timer, #lancelot-timer, #lancelot-screen, #robin-timer, #robin-screen, #galahad-timer, #galahad-screen, #arthur-timer, #arthur-screen, #lancelot-third-screen, #robin-third-screen, #galahad-third-screen, #arthur-third-screen, #lancelot-third-timer, #robin-third-timer, #galahad-third-timer, #arthur-third-timer').hide();
		$('#death-screen').show();
		//Emplty out the yaaa and continue-text-death(or else every time the timer runs out, it will add more text to the elements.)
		$('#yaaa').text('');
		$('#continue-text-death').text('');
		// Print out yaaa into the #yaaa element.
		$(function() {
			showText('#yaaa', yaaa, 0, 70);
		});
		// Wait three seconds, then show continue-text
		setTimeout(function() {
			$(function () {
				showText('#continue-text-death', continueText, 0, 35)
			});
		}, 3000)
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
		showText('#intro-text', introText, 0, 35);
	});
	//Then we wait eight seconds and print to the continue-text element.		
	setTimeout(function() {
		$(function () {
			showText('.continue-text', continueText, 0, 35)
		});
	}, 6000);
});

// When continue-text is clicked...
$('#continue-text').click(function() {
	// Intro screen is display: none-ed.
	$('#intro-screen, #name-screen').hide();
	//Stop-screen is display-block-ed...
	$('#stop-screen').show();
	// Text in .continue-text element is replaced with nothing.
	$('.continue-text').text('');
	//Slowly print the questionsThree variable to the #questions-three element.
	$(function () {
		showText('#questions-three', questionsThree, 0, 35);
	});
	//Then we wait six seconds and print to the continue-text element.		
	setTimeout(function() {
		$(function () {
			showText('.continue-text', notAfraid, 0, 35)
		});
	}, 4500);
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
		showText('#what-name', whatName, 0, 35);
	});
	//Then we wait two seconds and print to the choices.		
	setTimeout(function() {
		$(function () {
			showText('#lancelot', firstName, 0, 35)
		});
	}, 1500)
	setTimeout(function() {
		$(function() {
			showText('#robin', secondName, 0, 35)
		});
	}, 3000)
	setTimeout(function() {
		$(function() {
			showText('#galahad', thirdName, 0, 35)
		});
	}, 4500)
	setTimeout(function() {
		$(function() {
			showText('#arthur', fourthName, 0, 35)
		});
	}, 6000)
	//Wait nine seconds, then show the timer...
	setTimeout(function() {
		$('#name-timer').show();
		//And call the timer function...
		myTimer = timer('#name-timer', 10, 1000);
		myTimer;
	}, 7500)
});

//If continue-text-death is clicked...
$('#continue-text-death').click(function() {
	if (namesClicked === 0) {
		//Hide the knights' screens and the death screen...
		$('#death-screen').hide();
		$('#lancelot-screen').hide();
		$('#game-over-screen').show();
		setTimeout(function() {
			$(function() {
				showText('#game-over-text', gameOverText, 0, 70);
			});		
		}, 3000);
		//If user never clicked a name they get a special message and game-over-text.
		$(function() {
			showText('#no-name-clicked', noNameClicked, 0, 35);
		});
	} 
	//If all the names have already been clicked...
	else if (namesClicked >= 4) {
		//Hide the death-screen and show the game-over screen
		$('#death-screen').hide();
		$('#game-over-screen').show();
		setTimeout(function() {
			$(function() {
				showText('#game-over-text', gameOverText, 0, 70);
			})			
		}, 3)
		//Otherwise, just go back to the name screen.
	} else {
		//Hide the knights' screens and the death screen.
		$('#death-screen').hide();
		$('#lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen').hide();
		$('#name-screen').show();
		$('#name-timer').show();
		myTimer = timer('#name-timer', 10, 1000);
		myTimer;
	}
});

//If the user clicks lancelot...
$('#lancelot').click(function() {
	//Change value of lancelotClicked to true.
	lancelotClicked = true;
	namesClicked++;
	clearTimeout(myTimeout);
	//Turns the click functionality off for #lancelot...
	$('#lancelot').off('click');
	//And makes his name gray...
	$('#lancelot').css("color", "gray");
	//Hide name-screen, death-screen and timer...
	$('#name-screen').hide();
	$('#death-screen').hide();
	$('#name-timer').hide();
	//Clear out .what-quest element
	$('.what-quest').text('');
	//Show the lancelot-quest screen
	$('#lancelot-screen').show();
	//Print the whatQuest var to the what-quest element.
	$(function () {
		showText('.what-quest', whatQuest, 0, 35);
	});
	setTimeout(function() {
		$(function () {
			showText('#lancelot-quest-a', questA, 0, 35)
		})
	}, 1500);
	setTimeout(function() {
		$(function() {
			showText('#lancelot-quest-b', questB, 0, 35)
		})
	}, 3000);
	setTimeout(function() {
		$(function() {
			showText('#lancelot-quest-c', questC, 0, 35)
		})
	}, 4500);
	setTimeout(function() {
		$(function() {
			showText('#lancelot-quest-d', questD, 0, 35)
		})
	}, 6000);
	//Start the timer.	
	setTimeout(function() {
		$('#lancelot-timer').show();
		myTimer = timer('#lancelot-timer', 10, 1000);
		myTimer;
	}, 7500);
});

//If you click robin...
$('#robin').click(function() {
	//Change value of lancelotClicked to true.
	robinClicked = true;
	namesClicked++;
	clearTimeout(myTimeout);
	//Turns the click functionality off for #lancelot...
	$('#robin').off('click');
	//And makes his name gray...
	$('#robin').css("color", "gray");
	//Hide name-screen, death-screen and timer...
	$('#name-screen').hide();
	$('#death-screen').hide();
	$('#name-timer').hide();
	//Clear out .what-quest element
	$('.what-quest').text('');
	//Show the robin-quest screen
	$('#robin-screen').show();
	//Print the whatQuest var to the what-quest element.
	$(function () {
		showText('.what-quest', whatQuest, 0, 35);
	});
	setTimeout(function() {
		$(function () {
			showText('#robin-quest-a', questA, 0, 35)
		})
	}, 1500);
	setTimeout(function() {
		$(function() {
			showText('#robin-quest-b', questB, 0, 35)
		})
	}, 3000);
	setTimeout(function() {
		$(function() {
			showText('#robin-quest-c', questC, 0, 35)
		})
	}, 4500);
	setTimeout(function() {
		$(function() {
			showText('#robin-quest-d', questD, 0, 35)
		})
	}, 6000);
	//Start the timer.	
	setTimeout(function() {
		$('#robin-timer').show();
		myTimer = timer('#robin-timer', 10, 1000);
		myTimer;
	}, 7500);
});

//If you click galahad...
$('#galahad').click(function() {
	//Change value of lancelotClicked to true.
	galahadClicked = true;
	namesClicked++;
	clearTimeout(myTimeout);
	//Turns the click functionality off for #lancelot...
	$('#galahad').off('click');
	//And makes his name gray...
	$('#galahad').css("color", "gray");
	//Hide name-screen, death-screen and timer...
	$('#name-screen').hide();
	$('#death-screen').hide();
	$('#name-timer').hide();
	//Clear out .what-quest element
	$('.what-quest').text('');
	//Show the lancelot-quest screen
	$('#galahad-screen').show();
	//Print the whatQuest var to the what-quest element.
	$(function () {
		showText('.what-quest', whatQuest, 0, 35);
	});
	setTimeout(function() {
		$(function () {
			showText('#galahad-quest-a', questA, 0, 35)
		})
	}, 1500);
	setTimeout(function() {
		$(function() {
			showText('#galahad-quest-b', questB, 0, 35)
		})
	}, 3000);
	setTimeout(function() {
		$(function() {
			showText('#galahad-quest-c', questC, 0, 35)
		})
	}, 4500);
	setTimeout(function() {
		$(function() {
			showText('#galahad-quest-d', questD, 0, 35)
		})
	}, 6000);
	//Start the timer.	
	setTimeout(function() {
		$('#galahad-timer').show();
		myTimer = timer('#galahad-timer', 10, 1000);
		myTimer;
	}, 7500);
});

//If you click arthur...
$('#arthur').click(function() {
	//Change value of arthurClicked to true.
	arthurClicked = true;
	namesClicked++;
	clearTimeout(myTimeout);
	//Turns the click functionality off for #lancelot...
	$('#arthur').off('click');
	//And makes his name gray...
	$('#arthur').css("color", "gray");
	//Hide name-screen, death-screen and timer...
	$('#name-screen').hide();
	$('#death-screen').hide();
	$('#name-timer').hide();
	//Clear out .what-quest element
	$('.what-quest').text('');
	//Show the lancelot-quest screen
	$('#arthur-screen').show();
	//Print the whatQuest var to the what-quest element.
	$(function () {
		showText('.what-quest', whatQuest, 0, 35);
	});
	setTimeout(function() {
		$(function () {
			showText('#arthur-quest-a', questA, 0, 35)
		})
	}, 1500);
	setTimeout(function() {
		$(function() {
			showText('#arthur-quest-b', questB, 0, 35)
		})
	}, 3000);
	setTimeout(function() {
		$(function() {
			showText('#arthur-quest-c', questC, 0, 35)
		})
	}, 4500);
	setTimeout(function() {
		$(function() {
			showText('#arthur-quest-d', questD, 0, 35)
		})
	}, 6000);
	//Start the timer.	
	setTimeout(function() {
		$('#arthur-timer').show();
		myTimer = timer('#arthur-timer', 10, 1000);
		myTimer;
	}, 7500);
});

//Death if you click quest a, b, or c or quest or third choice screens.
$('#lancelot-quest-a, #lancelot-quest-b, #lancelot-quest-c, #robin-quest-a, #robin-quest-b, #robin-quest-c, #galahad-quest-a, #galahad-quest-b, #galahad-quest-c, #arthur-quest-a, #arthur-quest-b, #arthur-quest-c, #lancelot-a, #lancelot-b, #lancelot-c, #robin-a, #robin-b, #robin-c, #galahad-a, #galahad-b, #galahad-c, #arthur-a, #arthur-b, #arthur-c').click(function() {
	$('#quest-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen, #lancelot-third-screen, #robin-third-screen, #galahad-third-screen, #arthur-third-screen, #lancelot-third-timer, #robin-third-timer, #galahad-third-timer, #arthur-third-timer').hide();
	$('#quest-timer, #lancelot-timer, #robin-timer, #galahad-timer, #arthur-timer').hide();
	$('#death-screen').show();
	//Stop timer
	clearTimeout(myTimeout);
	//Empty out several text elements (or else every time the timer runs out, it will add more text to the elements.)
	$('#yaaa, .what-quest, #continue-text-death').text('');
	// Print out yaaa into the #yaaa element.
	$(function() {
		showText('#yaaa', yaaa, 0, 70);
	});
	// Wait three seconds, then show continue-text
	setTimeout(function() {
		$(function () {
			showText('#continue-text-death', continueText, 0, 35)
		});
	}, 3500);
});

//If you are Lancelot and select the holy grail...
$('#lancelot-quest-d').click(function() {
	//Declare some vars to print.
	var lancelotThirdQuestion = "What is your favorite color?";
	var lancelotA = "> Red";
	var lancelotB = "> Yellow";
	var lancelotC = "> White";
	var lancelotD = "> Blue";
	// Hide previous screens.
	$('#quest-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen').hide();
	$('#quest-timer, #lancelot-timer, #robin-timer, #galahad-timer, #arthur-timer').hide();
	//Show the third question screen.
	$('#lancelot-third-screen').show();
	//Stop the last timer
	clearTimeout(myTimeout);
	//Empty out several text elements (or else every time the timer runs out, it will add more text to the elements.)
	$('#yaaa, .what-quest, #continue-text-death, #continue-text-three, #off-you-go-text, #continue-quest-three').text('');
	$(function() {
		showText('.lancelot-third-question', lancelotThirdQuestion, 0, 35)
	});	
	setTimeout(function() {
		$(function () {
			showText('#lancelot-a', lancelotA, 0, 35)
		})
	}, 3000);
	setTimeout(function() {
		$(function() {
			showText('#lancelot-b', lancelotB, 0, 35)
		})
	}, 4000);
	setTimeout(function() {
		$(function() {
			showText('#lancelot-c', lancelotC, 0, 35)
		})
	}, 5000);
	setTimeout(function() {
		$(function() {
			showText('#lancelot-d', lancelotD, 0, 35)
		})
	}, 6000);
	//Start the timer.	
	setTimeout(function() {
		$('#lancelot-third-timer').show();
		myTimer = timer('#lancelot-third-timer', 10, 1000);
		myTimer;
	}, 7000);
});

//If you're robin and click the holy grail...
$('#robin-quest-d').click(function() {
	//Declare some vars to print.
	var robinThirdQuestion = "What is the capital of Assyria?";
	var robinA = "> I don't know that!";
	var robinB = "> Damascus";
	var robinC = "> Nuntucket";
	var robinD = "> Assur";
	// Hide previous screens.
	$('#quest-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen').hide();
	$('#quest-timer, #lancelot-timer, #robin-timer, #galahad-timer, #arthur-timer').hide();
	//Show the third question screen.
	$('#robin-third-screen').show();
	//Stop the last timer
	clearTimeout(myTimeout);
	//Empty out several text elements (or else every time the timer runs out, it will add more text to the elements.)
	$('#yaaa, .what-quest, #continue-text-death, #continue-text-three, #off-you-go-text, #continue-quest-three').text('');
	$(function() {
		showText('.robin-third-question', robinThirdQuestion, 0, 35)
	});	
	setTimeout(function() {
		$(function () {
			showText('#robin-a', robinA, 0, 35)
		})
	}, 3500);
	setTimeout(function() {
		$(function() {
			showText('#robin-b', robinB, 0, 35)
		})
	}, 5000);
	setTimeout(function() {
		$(function() {
			showText('#robin-c', robinC, 0, 35)
		})
	}, 6000);
	setTimeout(function() {
		$(function() {
			showText('#robin-d', robinD, 0, 35)
		})
	}, 7000);
	//Start the timer.	
	setTimeout(function() {
		$('#robin-third-timer').show();
		myTimer = timer('#robin-third-timer', 10, 1000);
		myTimer;
	}, 8000);
});

//If you're galahad and click the holy grail...
$('#galahad-quest-d').click(function() {
	//Declare some vars to print.
	var galahadThirdQuestion = "What is your favorite color?";
	var galahadA = "> Blue. No! Wait!";
	var galahadB = "> White.";
	var galahadC = "> Red.";
	var galahadD = "> Yellow.";
	// Hide previous screens.
	$('#quest-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen').hide();
	$('#quest-timer, #lancelot-timer, #robin-timer, #galahad-timer, #arthur-timer').hide();
	//Show the third question screen.
	$('#galahad-third-screen').show();
	//Stop the last timer
	clearTimeout(myTimeout);
	//Empty out several text elements (or else every time the timer runs out, it will add more text to the elements.)
	$('#yaaa, .what-quest, #continue-text-death, #continue-text-three, #off-you-go-text, #continue-quest-three').text('');
	$(function() {
		showText('.galahad-third-question', galahadThirdQuestion, 0, 35)
	});	
	setTimeout(function() {
		$(function () {
			showText('#galahad-a', galahadA, 0, 35)
		})
	}, 2500);
	setTimeout(function() {
		$(function() {
			showText('#galahad-b', galahadB, 0, 35)
		})
	}, 3500);
	setTimeout(function() {
		$(function() {
			showText('#galahad-c', galahadC, 0, 35)
		})
	}, 4500);
	setTimeout(function() {
		$(function() {
			showText('#galahad-d', galahadD, 0, 35)
		})
	}, 5500);
	//Start the timer.	
	setTimeout(function() {
		$('#galahad-third-timer').show();
		myTimer = timer('#galahad-third-timer', 10, 1000);
		myTimer;
	}, 6500);
});

//If you're arthur and click the holy grail...
$('#arthur-quest-d').click(function() {
	//Declare some vars to print.
	var arthurThirdQuestion = "What is the air-speed velocity of an unladen swallow?";
	var arthurA = "> They're non-migratory.";
	var arthurB = "> Five. I mean, three.";
	var arthurC = "> Faster than a cow in a catapult.";
	var arthurD = "> African or European?";
	// Hide previous screens.
	$('#quest-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen').hide();
	$('#quest-timer, #lancelot-timer, #robin-timer, #galahad-timer, #arthur-timer').hide();
	//Show the third question screen.
	$('#arthur-third-screen').show();
	//Stop the last timer
	clearTimeout(myTimeout);
	//Empty out several text elements (or else every time the timer runs out, it will add more text to the elements.)
	$('#yaaa, .what-quest, #continue-text-death, #continue-text-three, #off-you-go-text, #continue-quest-three').text('');
	$(function() {
		showText('.arthur-third-question', arthurThirdQuestion, 0, 35)
	});	
	setTimeout(function() {
		$(function () {
			showText('#arthur-a', arthurA, 0, 35)
		})
	}, 3000);
	setTimeout(function() {
		$(function() {
			showText('#arthur-b', arthurB, 0, 35)
		})
	}, 4000);
	setTimeout(function() {
		$(function() {
			showText('#arthur-c', arthurC, 0, 35)
		})
	}, 5000);
	setTimeout(function() {
		$(function() {
			showText('#arthur-d', arthurD, 0, 35)
		})
	}, 6500);
	//Start the timer.	
	setTimeout(function() {
		$('#arthur-third-timer').show();
		myTimer = timer('#arthur-third-timer', 10, 1000);
		myTimer;
	}, 7500);
});

//If you're lancelot, robin or galahad and click choice d...
$('#lancelot-d, #robin-d, #galahad-d').click(function() {
	$('#quest-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen, #lancelot-third-screen, #robin-third-screen, #galahad-third-screen, #arthur-third-screen').hide();
	$('#quest-timer, #lancelot-timer, #robin-timer, #galahad-timer, #arthur-timer, #lancelot-third-timer, #robin-third-timer, #galahad-third-timer, #arthur-third-timer').hide();
	$('#off-you-go-screen').show();
	//Stop timer.
	clearTimeout(myTimeout);
	//Empty out several text elements (or else every time the timer runs out, it will add more text to the elements.)
	$('#yaaa, .what-quest, #continue-text-death, #off-you-go-text, #continue-quest-three').text('');
	//Write off-you-go-text to element.
	$(function() {
		showText('#off-you-go-text', offYouGoText, 0, 35);
	});
	//Wait a few seconds, then write continue text.
	setTimeout(function() {
		$(function () {
			showText('#continue-text-three', continueText, 0, 35)
		});
	}, 2000);
});

//If you're arthur and click choice d...
$('#arthur-d').click(function() {
	$('#quest-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen, #lancelot-third-screen, #robin-third-screen, #galahad-third-screen, #arthur-third-screen').hide();
	$('#quest-timer, #lancelot-timer, #robin-timer, #galahad-timer, #arthur-timer, #lancelot-third-timer, #robin-third-timer, #galahad-third-timer, #arthur-third-timer').hide();
	$('#arthur-win-screen').show();
	//Declare vars for text
	var lastWordsA = "What? I don't know that.";
	var lastWordsB = "YAAAAAAAAA!"
	//Stop timer.
	clearTimeout(myTimeout);
	//Empty out several text elements (or else every time the timer runs out, it will add more text to the elements.)
	$('#yaaa, .what-quest, #continue-text-death, #off-you-go-text, #continue-quest-three').text('');
	//Emply out the #arthur-win-pic element to start fresh.
	$('#arthur-win-pic').html('');
	//Put the first image into the element.
	$('#arthur-win-pic').html('<img id="arthur-win-image" src="assets/images/OldManFromSceneTwentyFour1024X576.jpg">');
	//Write last-words-a to element.
	$(function() {
		showText('#last-words-a', lastWordsA, 0, 35);
	});
	//setTimeout for a few seconds, then change image and print lastWordsB.
	setTimeout(function() {
		$('#arthur-win-pic').html('<img id="arthur-win-image" src="assets/images/falling1024X576.jpg">');
		showText('#last-words-b', lastWordsB, 0, 70);
	}, 3000);
	//Wait a few seconds, then show continue text four.
	setTimeout(function() {
		$(function () {
			showText('#continue-text-four', continueText, 0, 35)
		});
	}, 5500);
});

//The final screen.
$('#continue-text-four').click(function() {
	$('#quest-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen, #lancelot-third-screen, #robin-third-screen, #galahad-third-screen, #arthur-third-screen, #arthur-win-screen').hide();
	$('#quest-timer, #lancelot-timer, #robin-timer, #galahad-timer, #arthur-timer, #lancelot-third-timer, #robin-third-timer, #galahad-third-timer, #arthur-third-timer').hide();
	$('#bridge-screen').show();
	//Declare vars for text
	var bridgeWordsA = "As your party inches over the Bridge of Death, each board moans under their feet. They struggle for dear life as the rope slowly unravels...";
	var bridgeWordsB = "You're party crossed the bridge. They're not dead yet!"
	//Stop timer.
	clearTimeout(myTimeout);
	//Empty out several text elements (or else every time the timer runs out, it will add more text to the elements.)
	$('#last-words-a, #last-words-b, #continue-text-four, #yaaa, .what-quest, #continue-text-death, #off-you-go-text, #continue-quest-three').text('');
	//Put the image into the final-pic element.
	$('#bridge-pic').html('<img id="bridge-pic" src="assets/images/bridge-crossing1024X576.jpg">');
	//Write last-words-a to element.
	$(function() {
		showText('#bridge-words-a', bridgeWordsA, 0, 35);
	});
	//Wait a few seconds, then change image and write last-words-b.
	setTimeout(function() {
		$('#bridge-screen').hide();
		$('#intermission').show();
		$('#intermission').html('<p>Intermission</p>');
		music.play();
	}, 5000);
	setTimeout(function() {
		music.pause();
		$('#intermission').hide();
		$('#bridge-screen').show();
		$(function() {
			showText('#bridge-words-b', bridgeWordsB, 0, 35);
		});
	}, 10000);
	setTimeout(function() {
		$('#bridge-screen').hide();
		$('#game-over-screen').show();
		$(function() {
			showText('#game-over-text', gameOverText, 0, 70);
		})
	}, 16000);
});

//Continue-text-three takes you back to the name screen.
$('#continue-text-three').click(function() {
	//Hide the off-you-go-screen.
	$('#off-you-go-screen').hide();
	//If all the names have already been clicked...
	if (namesClicked >= 4) {
		//Show the game-over-screen.
		$('#bridge-screen, #new-game').hide();
		$('#game-over-screen').show();
		//Emply text elements.
		var emptyText = "";
		$(function() {
			showText('#no-name-clicked, #game-over-text', emptyText, 0, 35)
		})
		//Print out winText.
		$(function() {
			showText('#no-name-clicked', winText, 0, 35);
		})
		//Then print out game over.
		setTimeout(function() {
			showText('#game-over-text', gameOverText, 0, 70);
		}, 2500);
		setTimeout(function() {
			$('#new-game').show();
		}, 4000)
		//Wait another second, then show new-game.	
		//Otherwise, just go back to the name screen.
	} else {
		//Hide the knights' screens and the death screen.
		$('#death-screen').hide();
		$('#off-you-go-screen, #lancelot-screen, #robin-screen, #galahad-screen, #arthur-screen').hide();
		$('#name-screen').show();
		$('#name-timer').show();
		myTimer = timer('#name-timer', 10, 1000);
		myTimer;
	}
});
