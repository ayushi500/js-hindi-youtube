class User{
    constructor(username){
      this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`)
    }
}

const chai=new Teacher("chai","chai@teacher.com","123")
chai.addCourse()   //new course was added by chai

const masalaChai=new User("masalaChai")
//masalaChai.addCourse()  // masalaChai.addCourse is not a function
masalaChai.logMe()   //Username is masalaChai
chai.logMe()  //Username is chai  ->in this logMe is defined to User but due to extend class,it is also available to Teacher 

console.log(chai===masalaChai)  //false
console.log(chai===Teacher)  //false
console.log(chai instanceof Teacher)  //true
console.log(chai instanceof User)  //true