function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2  //dot operator is used with object,it means function is an object

console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power); //2
console.log(multiplyBy5.prototype); //{}

//in JS everything is object,function is object too

function createUser(username,score){
    this.username=username   
    this.score=score
}

//we can inject our own function
createUser.prototype.increment=function(){
   this.score++;   //jisne bhi bulaya hai uska kaam kr do
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`)  //isme ye hi ki kiska score btau? chai ya coffee ka
                                           // ans=>jisne bhi score poocha hai uska score bta do,so we use 'this' keyword
}


// const chai=createUser("chai",25)  //this is wrong,we need to use new keyword
// const tea= createUser("tea",250) //isme jb humne createUser se tea me property 
// transfer kri to btaya nhi..ki isme new additional properties bhi add huyi hain,so we use 'new'



const chai=new createUser("chai",25)  //this is wrong,we need to use new keyword
const tea= new createUser("tea",250)

//instead of writing myArr.prototype.map , we can simply write myArr.map to acces the prototypes of objects

chai.printMe()   //price is 25




//about new keyword**************************************************
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a 
new JavaScript object.

A prototype is linked: The newly created object gets linked 
to the prototype property of the constructor function. This 
means that it has access to properties and methods defined 
on the constructor's prototype.

The constructor is called: The constructor function is 
called with the specified arguments and this is bound to 
the newly created object. If no explicit return value is 
specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function 
has been called, if it doesn't return a non-primitive 
value (object, array, function, etc.), the newly created 
object is returned.

*/