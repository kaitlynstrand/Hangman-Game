var wordList = ["bunny", "hamster", "gerbil", "ferret", "parrot", "kitty", "puppy", "horse", "goldfish", "snake", "iguana"]

var letterGuess = " "
var wordListElem = document.getElementById("word-list")
var letterGuessElem = document.getElementById("letter-guess")
var livesLeftElem = document.getElementById("lives-left")
var winsGameElem = document.getElementById("wins")


var word = ""
var lives = 5
var answerArray = []
var isGameStarted = false

//var array alphabet =  with letters of the alphabet 
//alphabet.index(event) == false
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.onkeypress = function(event) {
	var userGuess = event.key
	letterGuess = letterGuess + userGuess
	console.log(letterGuess)

	if (isGameStarted) {
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
	}

	else {
		word = selectWord()
		for (var i = 0; i < word.length; i++) {
			answerArray[i] = "_"
		}
		isGameStarted = true
	}
	wordListElem.textContent = answerArray.join(" ")
	letterGuessElem.textContent = letterGuess 
	livesLeftElem.textContent = lives
};

function initialNewGame() {
	lives = 5
	word = ""
	isGameStarted = false
	answerArray = []
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