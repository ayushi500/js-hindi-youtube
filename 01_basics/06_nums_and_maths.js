const score =400
console.log(score); //400

const balance=new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString()); //100 ->toString
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00 ->gives precision value

const otherNumber=23.89677
console.log(otherNumber.toPrecision(3)); //23.9
/* toPrecision(precision?: number): string
Number of significant digits. Must be in the range 1 - 21, inclusive.
Returns a string containing a number represented either in
 exponential or fixed-point notation with a specified number of
  digits fixed-point notation with a specified number of digits.
*/

const otherNumber2=1123.89677
console.log(otherNumber2.toPrecision(3)); //1.12e+3

const otherNumber3=123.89677 //124
console.log(otherNumber3.toPrecision(3)); 

const hundreds=1000000
console.log(hundreds.toLocaleString()); //1,000,000 ->US number sys
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 ->Indian number system
//agr NUmber. likhe to saari properties number ki milengi
console.log(Number.MAX_VALUE)


//************************************Maths****************************************** 
console.log(Math); //Object [Math] {}->it is an object having many properties
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.ceil(4.2)); //5 -> always choose top value
console.log(Math.floor(4.9)); //4 -> always choose lower value
console.log(Math.min(4,7,-8)); //-8
console.log(Math.max(4,7,-8)); //7

console.log(Math.random()); //gives any value b/w 0 and 1
console.log(Math.random()*10); 
//to avoid 0,we can add 1 as if value is 0.017888 , so *10=0.17888
console.log((Math.random()*10)+1); //min value is 1
console.log(Math.floor(Math.random()*10)+1); //2

const min=10
const max=20

//Imp
console.log(Math.floor(Math.random() *(max-min+1)+min)) //we get values between 10 and 20