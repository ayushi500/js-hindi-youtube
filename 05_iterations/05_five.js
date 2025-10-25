//for each loop
const coding=["js",'ruby','java','python','cpp']


//in for each we use call back function,and for call back functions,we dont assign its name

/*function chai(){

}*/
coding.forEach( function (item) {   //item is parameter
   console.log(item)
} )   //ans->js,ruby,java,python,cpp




//using arrow function

/* const greet=()=>{

    } */
coding.forEach((item)=>{   //yha name nhi likhna h
   console.log(item);
})  //ans->js,ruby,java,python,cpp



function printMe(item){
    console.log(item); 
}
coding.forEach(printMe) //ans->js,ruby,java,python,cpp


coding.forEach((item,index,arr)=>{
    console.log(item , index ,arr);
})
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/



//***********************Iterations on array of object********************************************* */
const myCoding=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },

    {
        languageName:"java",
        languageFileName:"java"
    },
   
    {
        languageName:"python",
        languageFileName:"py"
    } 
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})  //javascript,java,python