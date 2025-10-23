//Objects declaration using constructor

const tinderUser=new Object(); //->singleton object
console.log(tinderUser) //{} ->It means declaring empty object

//if
const tinderUser2={} //->non-singleton object
console.log(tinderUser2) // {}

 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false;
 console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//objects ke andar objects
 const regularUser={
    email:"ayu@google.com",
    fullName:{
       userfullname:{
            firstname:"ayushi",
            lastname:"sharma"
       }  
    }
 }

 console.log(regularUser.fullName); //{ userfullname: { firstname: 'ayushi', lastname: 'sharma' } }
 console.log(regularUser.fullName.userfullname.lastname); //sharma

 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}
 const obj6={5:"a",6:"b"}

 //const obj4={obj1,obj2}
 //console.log(obj4); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


 const obj3=Object.assign(obj1,obj2)
 console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

 //but we must use this syntax
 const obj5=Object.assign({},obj1,obj2)
  console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 
  const obj7=Object.assign({},obj1,obj2,obj6)
  console.log(obj7); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

  //using spread operator
  const obj8={...obj1,...obj2}
  console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }




  //Array Of Objects
  const users=[
    {
        id:1,
        email:"ayuGoogle.com"
    },
     {
        id:1,
        email:"ayuGoogle.com"
    },
     {
        id:1,
        email:"ayuGoogle.com"
    }
  ]

   console.log(users[1].email) //ayuGoogle.com

   console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

   console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ] ->It gives array
   console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ] ->It gives array
   console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//to check whether the value exist
   console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true;

   //destructuring
   const course={
    coursename:"js in Hindi",
    price:"999",
    courseInstructor:"hitesh"
   }
//   course.courseInstructor ->'hitesh
//More cleaner way
const {courseInstructor}=course
console.log(courseInstructor) //hitesh

//also we can do this like this
const {courseInstructor:instructor}=course
console.log(instructor)  //hitesh


//Methods ->props by default hota h
const navbar=({company})=>{

}
navbar(company="hitesh");

//*****************************API*************************************

//api object ke format me milti hain
//JSON-it is like object ->keys and values both are string
{
   "name":"ayushi",
   "coursename":"js in hindi",
   "price":"free"
}

//kai baar api array ke form me bhi milti hain
[
   {},
   {},
   {}
]
//JSON formatter converts the api into readable form
