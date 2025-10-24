const userEmail="ayusharma517@google.com"

if (userEmail) {
    console.log("Got user email")
}else{
    console.log("dont have user email");
}
// ans=>Got user email

const userEmail2=""

if (userEmail2) {
    console.log("Got user email")
}else{
    console.log("dont have user email");
}

// ans=>dont have user email


const userEmail3=[]

if (userEmail3) {
    console.log("Got user email")
}else{
    console.log("dont have user email");
}
// ans=>Got user email



/*FALSY VALUES

false , 0,-0,BigInt 0n,"",undefined,NaN

*TRUTHY VALUES
jo bhi falsy nhi h,wo truthy hai
also  "0",'false' , " ", ->truthy value as ye string ke andar hai
[],{},function(){} ->empty function
*/

//if we have to check any array
if(userEmail3.length===0){
    console.log("array is Empty");
}
//ans=>array is Empty


//if we have to check object
const emptyObj={}
if(Object.keys(emptyObj).length===0){  //Object.keys() gives an array of keys
    console.log("Object is empty");
}
//ans=>Object is empty

/*false==0
true

false==''
true

0==''
true */

// NULLIS COALESCING OPERATOR(??):null undefined
let val1;
let val2;
let val3;
let val4;
val1=5 ?? 10
val2=null ?? 10
val3=undefined ?? 15
val4=null ?? 10 ??19
console.log(val1); //5
console.log(val2); //10
console.log(val3); //15
console.log(val4); //10

//Ternary operator
// condition? true:false  

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80")

//ans=> more than 80 