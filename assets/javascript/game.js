var wordList = ["cat", "tiger", "lion", "leopard", "cheetah", "jaguar", "cougar", "wildcat", "panther", "lynx", "ocelot"]

var letterGuess = " "
var wordListElem = document.getElementById("word-list")
var letterGuessElem = document.getElementById("letter-guess")
var livesLeftElem = document.getElementById("lives-left")
var winsGameElem = document.getElementById("wins")

var word = ""
var lives
var answerArray = []
var isGameStarted = false
var wins = 0

//var array alphabet =  with letters of the alphabet 
//alphabet.index(event) == false
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// tried this but couldn't make it work!!
// var audioElem = document.createElement("tomjones");
// //audioElem.setAttribute("src", ".assets/tomjones.mp3");
//     function(tomjones) {
//       if (event.keyCode ==32) {
// 	audioElem.play();
//       }
//      }

//  audioElem.setAttribute("src", ".assets/tomjones.mp3");


document.onkeypress = function(event) {
	var userGuess = event.key
	letterGuess += userGuess + " "
	console.log(letterGuess)
	if (event.keyCode == 32) {
		//space bar hit start a new game
		initialNewGame()
		userGuess = ""
	}
	else if (isGameStarted) { 
		//check if the game is over
		if (lives <= 0) {
			//figure out how to print to the screen that the game is done
			initialNewGame()
			userGuess = ""
		} else {
			var correctGuess = guessByUser(userGuess)
			if (!correctGuess) {
				lives -= 1
			}
		}
		if (isGameWon()) {
			initialNewGame()
			userGuess = ""
		}
	}
	else {
		initialNewGame()
		word = selectWord()
		for (var i = 0; i < word.length; i++) {
			answerArray[i] = "_"
		}
		isGameStarted = true
	}
	wordListElem.textContent = answerArray.join(" ")
	letterGuessElem.textContent = letterGuess 
	livesLeftElem.textContent = lives
	winsGameElem.textContent = wins
};

function isGameWon() {
	var lettersInAnswerArray = 0
	for (var i = 0; i < answerArray.length; i++) {
		if (alphabet.includes(answerArray[i])) {
			lettersInAnswerArray += 1
		}
	}
	//this is what happens when you win
	if (word.length === lettersInAnswerArray) {
		wins += 1
		return true
	}
	return false
}

function initialNewGame() {
	lives = 15
	word = ""
	isGameStarted = false
	answerArray = []
	letterGuess = ""
}

function selectWord() {
	var choosenWord = ""
	choosenWord = wordList[Math.floor(Math.random() * wordList.length)] 
	choosenWord = choosenWord.split("")
	return choosenWord
}

function guessByUser(letter) {
	var correctGuess = false
	for (var i = 0; i < word.length; i++) {
		if (answerArray[i] != "_") {
			continue
		}
		else if (letter === word[i]) {
			answerArray[i] = letter
			correctGuess = true

		} 
	}
	return correctGuess
}

//var selectedWord = wordListElem.split[Math.floor(Math.random() * wordList.length)];
//userGuessElem.textContent = userGuess 