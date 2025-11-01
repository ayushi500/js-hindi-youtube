class User{
    constructor(username){
      this.username=username
    }

    //Method
    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){    //we give static,so that not everyone can access this method
        return `123`
    }
}

const hitesh=new User("hitesh")
//console.log(hitesh.createId())  //123   when there is no static keyword used
//but when static keyword is used,so so error will come,as we dont have any access to createId

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","iphone@apple.com")
iphone.logMe()  //Username:iphone
console.log(iphone.createId())   //children cannot also acces createId() because it is static