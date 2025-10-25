const myObject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

//here we use for in loop
for (const key in myObject) {
    console.log(key);
}
/* js
   cpp
   rb
   swift */

for (const key in myObject) {
    console.log(myObject[key]);
}
/*
swift
javascript
C++
ruby
swift by apple
*/

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
 */

//********************************Array************************************** */

const programming=["js",'rb','py','java','cpp']

for(const key in programming){
    console.log(key);
}  //=> 0 1 2 3 4 ->these are the keys of arrays as for in loop gives array
for(const key in programming){
    console.log(programming[key]);
}  //=> js,rb,py,java,cpp



//*****************************MAP******************************* */
const map=new Map() //Map is object in JS
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

map.set('IN','Korea')

for (const key in map) {

    console.log(key)  //map is not iterable using for in loop
    
}
