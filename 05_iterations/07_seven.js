const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.map( (nums)=>nums+10)      //map uses call back function and it also returns the answer
console.log(newNums);
/*  //ans=>
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//CHAINING
//const newNums=myNums.map().map().filter()

const newNums2=myNums
                 .map( (num)=> num*10)
                 .map( (num)=>num+1)
console.log(newNums2)
/**   ans
 [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
 */

const newNums3=myNums
                 .map( (num)=> num*10)
                 .map( (num)=>num+1)
                 .filter( (num)=>num>=40)
console.log(newNums3)
/**  ans
 [
  41, 51,  61, 71,
  81, 91, 101
]
 */