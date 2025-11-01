//object based syntax -old method
const User={
    _email:'h@hc.com',       // _ -> Naming convention for “private” properties
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)  //isme dena hota hai,ki kis object basis pe main nya function bna kr du
                               //it is just like 'new' in constructor
console.log(tea.email);  //H@HC.COM

/**
 
class User {
  #email = "h@hc.com";

  get email() {
    return this.#email.toUpperCase();
  }

  set email(value) {
    this.#email = value;
  }
}

const u = new User();
console.log(u.email);  // H@HC.COM
console.log(u.#email); // ❌ SyntaxError: Private field not accessible


#email is genuinely private — cannot be accessed or modified directly.
 */