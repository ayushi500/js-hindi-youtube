// let myName="Hitesh     "
// console.log(myName.length); //11 which is not a true length..so we make a trueLength property

// console.log(myName.truelength) //hume truelength metod bnana hoga


let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    //here getSpiderPower is key and instead of string,number,function is its value
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

/*injecting a new function into object instead on heroPower because agr object me 
inject krenge,to wo automatically string,array me bhi inject ho jaayega   
**********heroPower.prototype.hitesh=function(){}  -> X not doing this
*/
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`)
}

//heroPower bhi object se aaya hai,so iske paas bhi hitesh() method hona chahiye
heroPower.hitesh()  //hitesh is present in all object
myHeros.hitesh()   //hitesh is present in all object  ,myHeros array ke paas bhi Hitesh() method available hai

//if we inject method into Array,so will object have the access of it?

Array.prototype.heyHitesh=function(){
    console.log('Hitesh says hello')
}

myHeros.heyHitesh()   //Hitesh says hello
// heroPower.heyHitesh()  //this is an object and it do not have access of method define for array


//inheritance->kisi aur ki property ko access krna



const User={
    name:"chai",
    email:"cai@google.com"
}

const Teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport   //to link TeachinSupport with TAsupport
} 
//to link 2 objects,we too use prototype

Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

//now to get True length
let anotherUsername="chaiaurcode       "
String.prototype.trueLength=function(){
   // console.log(`${this.name}`)
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`)
}
anotherUsername.trueLength()
/*chaiaurcode
True length is:11
*/
"hitesh".trueLength()   //jisne call kiya,wo this hai
/**
hitesh
True length is:6
 */
"iceTea".trueLength()
/*
iceTea
True length is:6
*/