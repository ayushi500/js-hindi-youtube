const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        /*agr current context ko refer krna h,current context->jo user 
        wale curly braces ke andar h,then we use this i.e this.username*/
        console.log(`${this.username}, welcome to website`);
        //we can also use 
        //console.log(`${user.username},welcome to website);
        console.log(this) 
    }
}
 //user.welcomeMessage()  //hitesh, welcome to website
 //user.username="sam"
 //user.welcomeMessage()  //sam, welcome to website


/*
 hitesh, welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/



//console.log(this) //=>  {},this refers to empty object,as global ke andar abhi koi context hi nhi h,ye object se bhr h
// Important->browser ke andar  WINDOW global object hai

//*********************************************************** */



// function chai(){
//     console.log(this);
// }
// chai()
//agr kisi function ke andar this ko print krate hain.then  hume this ke baare me bhtt kchpta chlta h


// function chai(){
//     let username="ayushi";
//     console.log(this.username);
// }
// chai();  //  undefined .This means 'this' cant be use with functions only be used with object


// const chai=function(){
//     let username="ayushi";
//     console.log(this.username);
// }
//chai(); // undefined


const chai=() => {   //ARROW FUNCTION
    let username="ayushi";
    console.log(this)  //{}
    console.log(this.username); // => undefined
}
chai(); // => undefined

//SYNTAX OF ARROW FUNCTION  () => {}
 //EXPLICIT RETURN -> Jb hume return ka use krna ho rha h
    const addTwo=(num1,num2)=>{
        return num1+num2
    }

    console.log(addTwo(3,4))  //7

    //IMPLICIT RETURN
    const add=(num1,num2) =>  num1+num2
    console.log(add(2,8)) //10
    // or
/* *NOTE->jb curly braces hoga,then hume return likhna hoga,but jb parenthesis
 hoga,then return nhi likhna hoga */
    const add2=(num1,num2) =>  (num1+num2)
    console.log(add2(2,4)) //6


    //if we have to return an object using implicit return
    const add3=(num1,num2) => ({username:"ayushi"})
    console.log(add3(4,5))  //{ username: 'ayushi' }


// const myArray=[2,5,3,7,8]
// myArray.forEach()