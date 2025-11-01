//class based-new method
class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

     get email(){
        return this._email.toUpperCase()
     }
     set email(value){
        this._email=value
     }

    //agr koi password get krna chah rha h
    get password(){
        return this._password.toUpperCase()
    }
    //but agr hum get define kr rhe hain,to set bhi define krenge

    set password(value){   //set me hume parameter dena hota hai,kyunki wo value set krta hai
        this._password=value
    }
}

const hitesh=new User("hitesh.ai","abc")
console.log(hitesh.password)    //ABC
console.log(hitesh.email)   //HITESH.AI
/*bhtt baar aisa hota h ki kisi ne password manga,to hum uska access 
 sbko nhi dena chahte hain,ya us password ko customise krke dena chahte
  hain,so we use getters and setters
*/