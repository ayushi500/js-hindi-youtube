/*Immediately  invoked  funnction Expressions
// Jb function ko immediately execute krana ho and global scope uss function ko effect na kre
so we write iife
global scope ke pollution se problem hoti h kai baar,to jo us global scope ke variables
  hain,uske pollution ko htane ke liye,iife ka use kiya */




  //named iife-iss function ka name h
(function chai(){
    console.log(`DB connected`);
})(); //semicolon is compulsory  //ans=>DB connected

//syntax  ()()
// (#function definition)(#call execution)


//iife on arrow functions
//unnamed iife
( ()=>{
    console.log(`Db connected two`)
})() ; // Db connected two

( (name)=>{  //in this, name is parameter
    console.log(`Db connected two ${name}`)
})("ayushi") ;//"ayushi is argument"  just like calling => name("ayushi")

// ans=> Db connected two ayushi