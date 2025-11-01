const user={   //object literal
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
      console.log("got user details from database")
      console.log(`Username:${this.username}`)
      console.log(this)
    }
}
//console.log(user.username)   //hitesh
//console.log(user.getUserDetails())   //got user details from database
                                     //Username:hitesh
                                    //undefined
                                    /**
                                     {
                                       username: 'hitesh',
                                       loginCount: 8,
                                       signedIn: true,
                                       getUserDetails: [Function: getUserDetails]
}
                                     */
//this keyword is used for current context
// console.log(this) //=>{},  in console window=>console.log(this) is window(whish is a global object)

// const promiseOne=new Promise()
//const date=new Date()   //new is a constructor function

function User(username,loginCount,isLoggedIn){
    this.username=username  //left side wala variable hai and right side wala jo hum argument pass kr rhe hain
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    return this  //agr return this likhe chahe na likhe ye return hota hi h
}

// const userOne=User("hitesh",12,true)
// const userTwo=User("Chai aur code",11,false)
// console.log(userOne)  //humne userTwo ko kbhi print hi nhi kraya,but still it overwrites on userOne

//thats why we use constructor new
const userOne=new User("hitesh",12,true)
const userTwo= new User("Chai aur code",11,false)
console.log(userOne)
console.log(userTwo)

/**  ans
User { username: 'hitesh', loginCount: 12, isLoggedIn: true }
User { username: 'Chai aur code', loginCount: 11, isLoggedIn: false }
 */

// Step1->jaise hi new keyword use krte hain to empty object create hota h,which is known as instance
//step2->constructor function call hota hai beacuse of new keyword 
// step3->jo bhi arguments likhe hain,wo sb this keyword me inject ho jaate hain
// step4->hume mil jaate hain function ke andar


//we can also writ methods into it like:

function User2(username,loginCount,isLoggedIn){
    this.username=username  //left side wala variable hai and right side wala jo hum argument pass kr rhe hain
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }

    return this  //agr return this likhe chahe na likhe ye return hota hi h
}

const userOne2=new User2("hitesh",12,true)
const userTwo2= new User2("Chai aur code",11,false)
console.log(userOne2)
console.log(userTwo2)
/*
User2 {
  username: 'hitesh',
  loginCount: 12,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
}
User2 {
  username: 'Chai aur code',
  loginCount: 11,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}
  */
 console.log(userOne2.constructor)   //[Function: User2]
 //constructor property is the refernce jo ki khud hi ke baare me hoti hai




 //instanceof - pdhna h