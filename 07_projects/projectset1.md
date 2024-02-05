# Projects related to DOM

## Project link
[Click here](https://dom-project-chaiaurcode-3nx7io.stackblitz.io)

# Solution code

## Project 1 : Color Changer

```javascript
console.log("hello world");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('mouseover', function (e) {
    console.log(e);
    console.log(e.target);
    //1st way with if loop
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }

    //without loop
    body.style.backgroundColor = btn.id;
  });
});

```

## Project 2 : BMI Calculator

```javascript 
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) 
  {
    result.innerHTML = `Please enter valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) 
  {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } 
  else 
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  }

  //to display in result
  result.innerHTML = `<span>${bmi}</span>`;

  //to display range of result bmi
    function language(addLang) {
      const p = document.createElement('p');
      p.appendChild(document.createTextNode(addLang));
      document.querySelector('#results').appendChild(p);
    }
    if (bmi < 18.6) 
    {
      language('under weight');
    } 
    else if (bmi >= 18.6 && bmi <= 24.9)
    {
      language('normal range');
    } 
    else if (bmi > 24.9) 
    {
      language('overweight');
    }
  }
);

```

## Project 3 : Digital Clock

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  // clock.appendChild(document.createTextNode(date.toLocaleTimeString()));

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Porject 4 : Guess Number Game

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was 
      ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right number`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('number is TOOO Low');
  } else if (guess > randomNumber) {
    displayMessage('number is TOOO High');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```