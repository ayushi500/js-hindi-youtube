# Projects related to markdown
 ## project link
 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-wzzcjuhv?file=index.html)

 # solution code

 ## project 1

 ```javascript
console.log("ayushi)

const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function(btn){
  console.log(btn);
  btn.addEventListener("click",function(e){
      console.log(e)
      console.log(e.target)
      if(e.target.id==="grey"){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==="white"){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==="yellow"){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==="blue"){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==="pink"){
        body.style.backgroundColor=e.target.id
      }
  })
})
 ```

 ## project 2 solution
 ```javascript
const form=document.querySelector('form');
form.addEventListener("submit",function(button){
   button.preventDefault();
   const ht=parseFloat(document.querySelector('#height').value) //it gives string,so we have to convert it into integer
   const wt=parseFloat(document.querySelector('#weight').value)
   const result=document.querySelector('#results')


   if(ht==='' || isNaN(ht) || ht<0){
     result.innerHTML="please enter a valid height"
   }
   else if(wt==='' || isNaN(wt) || wt<0){
    result.innerHTML="please enter a valid weight"
  }
  else{
    const bmi=(wt/((ht*ht)/10000)).toFixed(2)  //Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.

    //show the result
    let category=""
    if(bmi<18.8){
      category="UnderWeight"
    }
    else if(bmi<24.9 && bmi>=18.8){
      category="NormalRange"
    }
    else{
      category="Overweight"
    }
    result.innerHTML=`<span>${bmi}</span><br>
    <span>${category}</span>`
    
    
    
  }
})

 ```

 ## project 3 solution
 ```javascript
 const clock=document.getElementById('clock')



setInterval(function(){
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)
```

## project 4 solution

```javascript
let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[] //so that user don't repeat the same guess
let numGuess=1

let playGame=true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(guess<1 || isNaN(guess) || guess>100){
    alert('Please enter a valid number')
  }else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over.Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }else if(guess<randomNumber){
    displayMessage(`Number is TOOO low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is TOOO high`)
  }
}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML+=`${guess}  `    /*                                     innerHTML is text (HTML content),                                      not a number.
                                        += on a string means “append text,” not “add numerically.” */
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>` 

}

function endGame(){
  userInput.value=""
  userInput.setAttribute('disabled','') //main usme disabled attribute hi set krna chahungi,as we are ending the game
  p.classList.add('button')   //classList used for adding class in para 'p',so here button is added as class in 'p'
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
  }

function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[] //prevGuess gets reset
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true;
  })
}

```