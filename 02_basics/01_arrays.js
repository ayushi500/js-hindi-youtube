const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[4]); //4

//Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr)  //[ 0, 1, 2, 3,4, 5, 6,7]
 myArr.pop() 
 console.log(myArr)  //[ 0, 1, 2, 3,4, 5, 6]

 myArr.unshift(9) //add at first
  console.log(myArr) //[9, 0, 1, 2,3, 4, 5, 6]
  myArr.shift()
  console.log(myArr)  //[0, 1, 2, 3, 4, 5, 6]
 myArr.shift()
  console.log(myArr) //[ 1, 2, 3, 4, 5, 6 ]

  console.log(myArr.includes(9))  //false
  console.log(myArr.indexOf(9))  //-1


  const newArr=myArr.join()
  console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ] type-object
  console.log(newArr)  //1,2,3,4,5,6     type-string
  console.log(typeof myArr);  //object
  console.log(typeof newArr);  //string


  //slice,splice  slice return a copy of section of array
  console.log("A->",myArr); // A-> [ 1, 2, 3, 4, 5, 6 ]
  //slice
  const myn1=myArr.slice(1,3)
  console.log("B->",myArr) // B-> [ 1, 2, 3, 4, 5, 6 ] ->no change in original array
  console.log(myn1)  // [ 2, 3 ] ->last idx is excluded
 
  
  //splice
  const myn2=myArr.splice(1,3)
  console.log("C->",myArr)  //C-> [ 1, 5, 6 ] ->original array changes
  console.log(myn2)   // [ 2, 3, 4 ]->last idx is included 
  