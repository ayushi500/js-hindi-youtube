// function SetUsername(username){
//     //complex DB calls
//     this.username=username
// }

// function createUser(username,email,password){
//     SetUsername(username)
//     this.email=email
//     this.password=password
// }

// const chai=new createUser("chai","chai@fb.com",123)
// console.log(chai)


//createUser { email: 'chai@fb.com', password: 123 }

/**
 yha username nhi aa rha h..username call to ho rha hai but jaise hi call ho 
 rha hai,waise hi call stack se ht jaa rha,uska refernce aa hi nhi rha hai
 so hum chahte hain ki uska refernce ko hold kr ske
 */

 function SetUsername(username){
    //complex DB calls
    this.username=username
}

function createUser(username,email,password){
    SetUsername.call(this,username)  //call humara current execution context kisi aur function ko pass kr deta hai
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com",123)
console.log(chai)
//createUser { username: 'chai', email: 'chai@fb.com', password: 123 }