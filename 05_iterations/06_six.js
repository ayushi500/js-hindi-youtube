const coding=["js",'ruby','java','python','cpp']

const values=coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values)  
// ans=>js,ruby,java,python,cpp,undefined

//as the value returned is undefined,it means for-each doesn't return value 

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter( (num)  => num > 4 );  //it also uses call back function and it returns value
console.log(newNums)  //[ 5, 6, 7, 8, 9, 10 ]
 //filter syntax
 // filter((parameter) => condition) ..jo jo condition ko satisfy krenge,wo wo values hi return ki jayengi

//NOTE
 const newNums2=myNums.filter( (num)  => {
    return num > 4          //agr curly braces use kr rhe hain,to return type krna is very important
 })
 console.log(newNums2);  //[ 5, 6, 7, 8, 9, 10 ]
 
 //using FOR-EACH LOOP
 const newNums3=[]
 myNums.forEach((num) => {
    if(num>4) {
        newNums3.push(num);
    }
 });  
 
 console.log(newNums3)  //[5, 6, 7, 8, 9, 10]

 //*******************************EXAMPLE******************************************* */

 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //return those books which are having genre "History"
  const userBooks=books.filter( (bk)=>{
     return bk.genre==="History"
  })

  console.log(userBooks);
  /**  ans
   [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
   */


//return those books which are published after 2016
  const userBooks2=books.filter( (bk)=>bk.publish>=2000)
      
  console.log(userBooks2)
  /* ans
  [
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
  */

//return the books which are published after1995 and having genre "History"

  const userBooks3=books.filter( (bk)=>bk.publish>=1995 && bk.genre==="History")
      
  console.log(userBooks3)
  /**  ans
   [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
   */