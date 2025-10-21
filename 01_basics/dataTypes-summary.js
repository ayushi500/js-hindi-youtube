/* Kis trh se data ko memeory me rkha jata h and access krte hain
uss basis pe data ko 2 types me divide krte hain
Primitive and non primitive(reference type)
*Primitive

7 types:String,Number,Boolean,null,undefined,Symbol,BigInt
  
*Refernce(Non-Primitive)
Arrays,Objects,Functions

Js is dynamically typed
let myVariable = 10;   // myVariable is a number
console.log(typeof myVariable); // Output: "number"

myVariable = "Hello"; // myVariable is now a string
console.log(typeof myVariable); // Output: "string"
*/

//Primitive
const score=100
const scoreValue=100.4

const isLoggedIn=false
const OutsideTemp=null  //it doesnt means that temperature is 0,temp.
                        //  abhi liya nhi gya h
let userEmail;     //by default it is undefined       
                   // or we can also use let userEmail=undefined;
const id=Symbol('123')     
const anotherId=Symbol('123')
console.log(anotherId)      // Symbol(123)
console.log(id==anotherId)     //false
const bigNumber=148894819097777777109n


//Non-Primitive
const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"Ayushi",
    age:19
}
const myFunction=function(){
  console.log("hello ayushi")
}

console.log(typeof bigNumber); //undefined
console.log(typeof myFunction); //function