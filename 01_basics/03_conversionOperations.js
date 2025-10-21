// let score1="33"

// console.log(typeof score1)
// console.log(typeof(score1)) //here type is string 
// // but we want to perform our operations on number

// let valueInNumber1=Number(score1)
// console.log(typeof valueInNumber1)



// let score2="33sv"

// console.log(typeof score2) //string
// console.log(typeof(score2)) //string

// let valueInNumber2=Number(score2)
// console.log(typeof valueInNumber2) //number
// console.log(valueInNumber2) //NaN


// let score3=null

// console.log(typeof score3) //object
// console.log(typeof(score3)) //object

// let valueInNumber3=Number(score3)
// console.log(typeof valueInNumber3) //number
// console.log(valueInNumber3) //0



// let score4=undefined

// console.log(typeof score4) //undefined
// console.log(typeof(score4)) //undefined

// let valueInNumber4=Number(score4)
// console.log(typeof valueInNumber4) //number
// console.log(valueInNumber4)       //number



// let score5=true
// console.log(typeof score5) //boolean
// console.log(typeof(score5)) //boolean

// let valueInNumber5=Number(score5)
// console.log(typeof valueInNumber5) //number
// console.log(valueInNumber5)  //1



// let score6="ayushi"

// console.log(typeof score6)  //string
// console.log(typeof(score6)) //string

// let valueInNumber6=Number(score6)
// console.log(typeof valueInNumber6) //number
// console.log(valueInNumber6)  //NaN



//Notes
/*          =>It means "can easily be converted to" 
"33"=>33
"33abc"=> NaN   type of NaN is number
true=>1 ; false=>0
*/

//conversion of number/empty string/string to boolean
// let  isLoggedIn=1
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) //true



// let  isLoggedIn2=""
// let booleanIsLoggedIn2=Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2) //false


// let  isLoggedIn3="ayushi"
// let booleanIsLoggedIn3=Boolean(isLoggedIn3)
// console.log(booleanIsLoggedIn3) //true


/*Note
//1=>true ;0=>false
"" =>false
"ayushi"=>true
*/


// let someNumber=33
// let stringNumber=String(someNumber)
// console.log(stringNumber) //33
// console.log(typeof stringNumber)  //string


//*************************Operations***********************
 let value=3
 let negValue=-value
 //console.log(negValue)

//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**3);
//  console.log(2/2);
//  console.log(2%2);

let str1="hello"
let str2=" ayushi"
let str3=str1+str2
//console.log(str3) //hello ayushi

//  console.log("1"+2);  //aana chahiye tha 3 but aaya 12
//  console.log(1+"2");  //aana chahiye tha 3 but aaya 12
//   console.log("1"+"2"); //12
//   console.log("1"+2+2); //122
//   console.log(1+2+"2")  //32

//   console.log(3+4*5 % 3); //dont write like this,use proper parenthesis
//     console.log((3+4)*5 % 3); //write like this

    console.log(true);
    console.log(+true); //1 because true is boolean and it is incremented by 1
                        // as true cant be incremented so,it gives value as 1
    //console.log(true+); //error
    console.log(+""); //0

    let num1,num2,num3
    num1=num2=num3=2+2  //not a good way of writing

    let gameCounter=100
    gameCounter++; //or ++gameCounter
    console.log(gameCounter); //101

    /*prefix and postfix increment
    a=3
    prefix=++a;
    let b=a   first a is incremented and then value is assigned to be
              b=4 and a=4
    postfix=a++
    let b=a  first value is assigned to b and then a is incremented
             a=4,b=3 
     */
    //link to study
    //   https://tc39.es/ecma262/2023/#sec-type-conversion                  
 