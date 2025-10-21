// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1); //true,here 2 is automatically converted to number
console.log("02">1); //true


//Avoid below type of conversions
console.log(null>0);  //false
console.log(null==0); //false
console.log(null>=0); //true
/*
the reason that an equality check == and comparisons > < >= <= 
work differently
Comparisons convert null to a number,treating it as 0.Thats why 
null>=0 is true and null>0 is false
*/

console.log(undefined>0);  //false
console.log(undefined==0); //false
console.log(undefined>=0); //false

//=== it strictly checks values along with its data types
console.log("2"===2);  //false

