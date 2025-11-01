//promise is a object representing eventual completion or failure
const promiseOne=new Promise(function(resolve,reject){
    //do a async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})  //creating a promise  



//consuming a promise //then se hi saari values return hoti hai
promiseOne.then(function(){   //then receives a callback which automatically receives an argument,yha pr values return hoti hai
    console.log("Promise is consumed");
    
})        //then ka seedha connection resolve ke saath hai

/*ans
Async task is complete
Promise is consumed
*/

//or we can write it like this
new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log("Async task 2");
     resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved")
})   /*Async task 2
       Async 2 resolved
*/

//************************************************************************ */
const promiseThree=new Promise(function(resolve,reject){
   setTimeout(function(){
       resolve({username:"Chai",email:"chai@example.com"})    //in resolve we pass data ,mostly that data can be object
   },1000)
})

promiseThree.then(function(user){
 console.log(user);  
})   //{ username: 'Chai', email: 'chai@example.com' }=>resolve ke andar jo bhi pass kiya gya h,wo mil jata h



const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){  //if there is no error
            resolve({username:"hitesh",password:"123"})
        }else{   //if there is error
            reject('ERROR:Something went wrong')
        }
    },1000)
})


//catch() : The callback to execute when the Promise is rejected.
// const username=promisefour.then((user)=>{
//     console.log(user);
//     return user.username
// })    =>this throws an error,so we do the function chaining using then

// console.log(username)


 const username=promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((myUsername)=>{    // jo oopar wale .then se value return ho kr aayegi..wo next .then me aayegi
  console.log(myUsername)
}).catch(function(err){
    console.log(err)
}).finally(()=>console.log("The promise is either resolved or rejected"))   
//The callback to execute when the Promise is settled (fulfilled or rejected).
//finally humesha execute hoga

//ans=>ERROR:Something went wrong
//     The promise is either resolved or rejected


//************************************************************** */
//promise using async and awaits

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){  //if there is no error
            resolve({username:"javascript",password:"123"})
        }else{   //if there is error
            reject('ERROR:JS went wrong')
        }
    },1000)
})



 /*async thodi der wait krta hai kaam ke hone ka
agr kaam ho jata hai,tbhi aage bdhta hai,nhi to whi pe error de deta hai */

/*
async keyword makes the function return a Promise automatically.

Inside it, await pauses the function execution until the Promise settles:

If the Promise resolves, await gives you the resolved value.

If the Promise rejects, await throws an error.
*/
async function consumePromiseFive(){  //jo value aayegi use consume to krna hoga.Ab jo value aayegi wo then se aayegi ya catch se aayegi
   try {
    const response= await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}  

consumePromiseFive()

//ans=>ERROR:JS went wrong

//**************************************************************** */

async function getAllUsers(){
  try {
     const response= await fetch('https://jsonplaceholder.typicode.com/users')  //fetch returns a promise
//fetch is a network request,so time lgega hence we use await
     const data=await response.json()  //jo response se data aa rha hota h,wo string hota h..so we need to convert it into json
     //response.json bhi convert krne me time lega..so ise bhi await krana hoga
     console.log(data)
  } catch (error) {
    console.log(error);
  }
}
getAllUsers()




//promise using .then and .catch format
fetch('https://jsonplaceholder.typicode.com/users')  //fetch returnns promise
.then((resp)=>{
    return resp.json()
})
.then((data)=>{  //this then will  handle the data coming from upper then
console.log(data)
})  
.catch((error)=>console.log(error))

/**
 *the data coming from api is running first instead of written in last because fetch()
 ke andar jo bhi aata hai,uski priority bht jyada hoti hai,so it will run first 
 */