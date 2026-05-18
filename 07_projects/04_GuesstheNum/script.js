let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const low0rHi = document.ocument.querySelector(".low0rHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];
let numOfGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const userGuess = parseInt(userInput.value);
    validateGuess(userGuess);
  });
}

function validateGuess(userGuess) {
  if (isNaN(userGuess)) {
    alert("Please enter a valid number");
  } else if (userGuess < 1) {
    alert("Please enter a number greater than 0");
  } else if (userGuess > 100) {
    alert("Please enter a number less than 100");
  } else {
    previousGuesses.push(userGuess);
    if (numOfGuesses === 11) {
      displayGuesses(userGuess);
      displayResult("Game Over! The number was " + randomNumber);
      endGame();
    } else {
      displayGuesses(userGuess);
      checkGuess(userGuess);
    }
  }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayResult(`you gussed it right`);
        endGame();
    }
    else if(guess < randomNumber) {
        displayResult(`Number is too low`);
        endGame();
    }
    else if(guess > randomNumber) {
        displayResult(`Number is too High`);
        endGame();
    }
}

function displayGuesses(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numOfGuesses++;
  remaining.innerHTML = `${11 - numOfGuesses}`
}

function displayResult(message) {
  low0rHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('Disabled' , '')
  p.classList.add('buttn')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startover.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newGmBut = document.querySelector('#newGame')
  newGmBut.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = []
    numOfGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numOfGuesses}`
    userInput.removeAttribute('Disable')
    startover.removeChild(p)
    playGame = true
  })
}
