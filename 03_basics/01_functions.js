


function sayMyName(){
console.log("A");
console.log("y");
console.log("u");
console.log("s");
console.log("h");
console.log("i")
}
//sayMyName()
/*A
y
u
s
h
i
 */

// function addTwoNumbers(number1,number2){ //number1 and number2 are parameters
//      console.log(number1+number2)
// }
// addTwoNumbers(3,5) //8   * 3 and 5 are arguments
// addTwoNumbers(3,"5") //35 ->3 and both are treated as strings
// addTwoNumbers(3,"a") //3a
// addTwoNumbers(3,null) //3

//const result=addTwoNumbers(3,5)  //8
//console.log("Result:",result);  //Result: undefined ..Why?  because humne kch return nhi kiya h


function addTwoNumbers2(number1,number2){ 
     // let result=number1+number2
     // return result;
     return number1+number2
}
const result2=addTwoNumbers2(3,5)
//console.log("Result:",result2); //8
//return ke baad kch bhi likho wo execute nhi hota h


function logInUserMessage(username){
     return `${username} just logged in`
}
//console.log(logInUserMessage("Ayushi"))  //Ayushi just logged in
//console.log(logInUserMessage()) //undefined just logged in


function logInUserMessage2(username){
   if(username===undefined){
          console.log("Please enter username")
          return
   }
   return `${username} just logged in`
}

//console.log(logInUserMessage2())  //Please enter username
                                  //undefined

//we can also write it like this  
//in JS,undefined , "" is a false value   
  function logInUserMessage3(username){
   if(!username){  //if usename is undefined
          console.log("Please enter username")
          return
   }
   return `${username} just logged in`
}              
//console.log(logInUserMessage3())       //Please enter username
                                       //undefined      
 //agr main chahti hu ki aisi situation aaye hi nhi  -> we set as default value       
function logInUserMessage4(username="sammy"){
   if(!username){  //if usename is undefined
          console.log("Please enter username")
          return
   }
   return `${username} just logged in`
}              
//console.log(logInUserMessage4())      //sammy just logged in
//console.log(logInUserMessage4("ayushi"))    //ayushi just logged in

//*************************************************************************** */

//jb hume nhi pta kitne no. of items aane wale hain..ume bs sb ki price add krni h
//hume pta nhi kitne argumentsd aane wale hain,to hume usi hisaab se parameter ready krna hoga

//E-commerce

function calculateCartPrice(...num1){  //depend on their usage,...is called as rest or spread opertaor
   return num1
}
console.log(calculateCartPrice(200,400,500))  //[ 200, 400, 500]


function calculateCartPrice2(val1,val2, ...num1){  
   return num1
}
console.log(calculateCartPrice2(200,400,500,2000)) //[ 500, 2000 ]
//val1->200,val2->400 and rest will be num1


//how to pass object in function
const user={
     username:"ayushi",
     price: 199
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)  //username is ayushi and price is 199

//we can also directly pass the object
handleObject({
     username:"sam",
     price:4999
})                 //username is sam and price is 4999


//passing arrays into function
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
     return getArray[2]
}
console.log(returnSecondValue(myNewArray)) //100
//also
console.log(returnSecondValue([200,400,100,600])) //100
