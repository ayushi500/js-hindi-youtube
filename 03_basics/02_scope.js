//if ke bhr jo bhi likha h,wo global scope hai


//{} ->scope jb ye kisi if-else,loop,function,etc ke saath aata h
//  and jb ye koi object ke saath  en it is only object declaration

if(true){    //if ke andar jo bhi likha h wo block scope h..scope ke andar 
              //jo bhi likhte hain wo bhr nhi jani chahiye
    let a=10
    const b=20
    var c=30
   // console.log("Inner:",a) //Inner:10
}

//console.log(a) ->error  as a is local variable
//console.log(b) ->error as b is local variable
//console.log(c) //30..this is the problem of var,as if variables are declared locally,so how can it treat it as globally
 let a=300;
//global scope variable is completely independent of block scope variable
 //console.log(a);  //300

/***************Nested Scope************** */

function one(){
    const username="hitesh"

    function two(){              //two can access all variables of one but vice-versa is not true
        const website="youtube"  //two is child function and one is parent function
        console.log(username);  //so in nested function,child function can access parent variables
    }
    //console.log(website);
    //two()
    
}

//one()   //hitesh


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        console.log(username+website);  //hitesh youtube
    }
    //console.log(website); //error
}
//console.log(username) //error
 
//**********************Interesting*************************************************


//we can do this console.log(addOne(5)),and it will give answer because function
//  is declared not variable is declared
function addOne(num){
    return num+1
}
console.log(addOne(5)) //=>6


//we can also declare function by using expression
//we cant do this -> console.log(addTwo(5))..otherwise error can occur because
//addTwo variable is declared below this
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5)) //->7

