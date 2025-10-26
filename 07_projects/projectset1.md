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