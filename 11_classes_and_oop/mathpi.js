const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descripter) 
/*  {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
                            
* */


//console.log(Math.PI);  //3.141592653589793
Math.PI=5
//console.log(Math.PI);  //3.141592653589793

//we are declaring object
//const mynewObject=Object.create(null)   //object me by default value null hoti hai

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

   
}
//console.log(chai)     //{ name: 'ginger chai', price: 250, isAvailable: true }

//console.log(Object.getOwnPropertyDescriptor(chai,"name")); //descriptor me property ka description dena hota hai,ere property is name,price,isAvailable

/*  here we get the description of ;name' property
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// })
/**
 * Object.defineProperties() is a built-in JavaScript method that allows 
 * you to define multiple properties on an object at once, including 
 * detailed configuration for each property — such as whether it’s 
 * writable, enumerable, or configurable.
 */

//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

/*{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
  */

// for (let [key,value] of chai) {   //chai is not iterable as it is a object
//     console.log(`${key} , ${value}`);
    
// }

//for object to  be iterable
 for (let [key,value] of Object.entries(chai)) {   
    console.log(`${key} , ${value}`);  
 }
 /**
name , ginger chai
price , 250
isAvailable , true
  */

const chai2={
    name:'ginger chai',
    price:250,
    isAvailable:true,
 orderChai:function(){    
       console.log("chai nhi bni")
    }
}

//  for (let [key,value] of Object.entries(chai2)) {   
//     console.log(`${key} , ${value}`);  
//  }
/**
 name , ginger chai
price , 250
isAvailable , true
orderChai , function(){
       console.log("chai nhi bni")
    }   //we want key value pair but instead we get whole function,so we use checkes
 */

//     for (let [key,value] of Object.entries(chai2)) {  
//         if(typeof value !== 'function'){
//            console.log(`${key} , ${value}`);
//         }
       
//   }

  /**
name , ginger chai
price , 250
isAvailable , true
   */

//*************************************************************** */
//if enumeration is false, so we dont use iterative property

Object.defineProperty(chai2,'name',{
    // writable:false,
     enumerable:false
})

 for (let [key,value] of Object.entries(chai2)) {  
        if(typeof value !== 'function'){
           console.log(`${key} , ${value}`);
        }
       
  }
  /**  here there is no iteration over name as name is non enumerable
price , 250
isAvailable , true
   */