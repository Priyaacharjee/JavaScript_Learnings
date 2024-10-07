# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-hufwgl?file=4-GuessTheNumber%2Fchaiaurcode.js,1-colorChanger%2Fchaiaurcode.js)

Solution on Bg Changer
```javascript

const button=document.querySelectorAll('.button')
console.log(button)
const body=document.querySelector("body")
button.forEach((button)=>{
  console.log(button)
  button.addEventListener('click',function(e){
   console.log(e.target);
   if(e.target.id==='grey'){
     body.style.backgroundColor=e.target.id;
   }
   if(e.target.id==='white'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='blue'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='yellow'){
    body.style.backgroundColor=e.target.id;
  }
  })
})
```

Solution of BMI Calculator
```javascript
const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('#results')

  if(height===''||height<0||isNaN(height)){
    result.innerHTML=`Please give a valid height ${height}`
  }else if(weight===''||weight<0||isNaN(weight)){
    result.innerHTML=`Please give a valid weight ${weight}`
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`;
  }
})

```

Solution of Digital clock
```javascript
const clock=document.getElementById('clock')


setInterval(function(){
  let date=new Date()
  //console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString()
},1000)
```
Solution of Guess The Number
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userIP = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userIP.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a valid Number');
  } else if (guess < 1) {
    alert('Please Enter a valid Number more than 1');
  } else if (guess > 100) {
    alert('Please Enter a Number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over.Random no was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMsg('You guessed it right!');
    endGame();
  } else if (guess < randomNumber) {
    displayMsg('Number is too low');
  } else if (guess > randomNumber) {
    displayMsg('Number is too high');
  }
}
function displayGuess(guess) {
  userIP.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMsg(msg) {
  lowOrhi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userIP.value = '';
  userIP.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
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
    userIP.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMsg('');
    playGame = true;
  });
}
```