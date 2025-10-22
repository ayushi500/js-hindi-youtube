//objects having key value pair
//we can declare objects in 2 ways : literals and constructors
//singleton ->agr koi constructor se object bnate hain,to wo ek hi object bnta h
//Object.create

//object literals

//Q->Ek symbol lo use object ki key me add kro and use prin krke dikhao
const mySym=Symbol("key1") //Symbol is data type

const JsUser={
    name:"Hitesh",
    "full name":"hitesh choudhary", //this value can never be access through dot,so we use square braces wala method
    //mySym:"mykey1", -> used as string not as a dataType
    [mySym]:"mykey1",
    age : 18,
    location:"Jaipur",
    email:"ayushi@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]
}
 //to access objects
 console.log(JsUser.email)  //ayushi@google.com
 console.log(JsUser["email"]) //ayushi@google.com
 console.log(JsUser["full name"]) //hitesh choudhary
 /* here mySym is used as string not as a dataType
 console.log(JsUser.mySym)   //mykey1 ->not a data type,but a string
 console.log(typeof JsUser.mySym)  //here symbol is used as string,not as data type
*/
console.log(JsUser[mySym])  //mykey1 -> now it is dataType(Symbol)

JsUser.email="ayushi@chatgpt.com"
//Object.freeze(JsUser) //ab koi bhi ise change nhi kr paayega
JsUser.email="ayushi@microsoft.com"
console.log(JsUser); /*{name: 'Hitesh',
                      'full name': 'hitesh choudhary',
                       age: 18,
                       location: 'Jaipur',
                       email: 'ayushi@chatgpt.com',
                       isLoggedIn: false,
                       lastLoginDays: [ 'Monday', 'Wednesday' ],
                       [Symbol(key1)]: 'mykey1'
                        }   
 */
//to add function in JsUser
JsUser.greeting=function(){
    console.log("Hello JS User");
}

//console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); //Hello JS User
                                //undefined


JsUser.greeting2=function(){
    console.log(`Hello JS User,${this.name}`);
}
/*this->jb bhi same object ko refernce krna ho ,so we use this.If we 
use dot after this,so object ke andar jitni propertie
 hain wo sb mil jayengi*/
console.log(JsUser.greeting2()); //Hello JS User,Hitesh
                                 //undefined
