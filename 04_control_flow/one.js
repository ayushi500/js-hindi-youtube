// if

const isUserLoggedIn=true

// if(true){      //parenthesis ke andar condition true honi chahiye,tbhi aapka if statement execute hoga.Agr false hoga,to code execute nhi hoga  
    
// }
/*Operators
<,>,<=,>=,== ,!= ,===
*/

if(3!=2){
  console.log("executed")  //executed
}


if(2==="2"){
  console.log("executed")
}

const temperature=41
if(temperature<50){
    console.log("less than 50")
}
else{
    console.log("tempertaure is greater than 50")
}
// ans=> less than 50


const score=200

if(score>100){
    const power="fly"
    console.log(`User power: ${power}`);   
}
// ans-> User power: fly
// console.log(`User power: ${power}`);  //error-power is not defined


const balance=1000
if(balance>500) console.log("test");  //Implicit scope->ek hi line me execute hota h

if(balance < 500){
    console.log("less than 500");
    
}
else if(balance <750){
   console.log("less than 750");
}
else if(balance <900){
   console.log("less than 900");
}
else{
    console.log("less than 1200");
}
// less than 1200

//real life example

const userLoggedIn=true
const debitcard=true
const loggedInFromGoogle=false //it means google se login nhi kra h
const loggedInFromEmail=true

if(userLoggedIn && debitcard && 2==2){ //agr ek bhi statement false ho gya,to if execute hi nhi hoga
    console.log("allow to buy course");
}

//ya to user ne google se login kiya ho ya to mail se
//in this case user ne mail se login kiya h
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}

//&& and || are logical operator


