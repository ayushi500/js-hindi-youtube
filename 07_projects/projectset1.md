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