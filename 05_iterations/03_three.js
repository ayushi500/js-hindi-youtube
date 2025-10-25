//for of ->basically for arrays and objects

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const i of arr) {
    //console.log(i)
}  //1 2 3 4 5

const greetings="hello world"
for (const i of greetings) {
    console.log(`each char is ${i}`);
    
}

//maps

const map=new Map() //Map is object in JS
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

map.set('IN','Korea')
//console.log(map)

/* 'IN' => 'Korea',
  'USA' => 'United States of America',
  'Fr' => 'France' */

  for (const i of map) {
    console.log(i);         
  }

  /* [ 'IN', 'Korea' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ] */

 for (const [i,j] of map) {
    console.log(i,':-',j);         
  }
  /* IN :- Korea
     USA :- United States of America
     Fr :- France */

  for (const [i] of map) {
    console.log(i);         
  }    
  /*
IN
USA
Fr
  */



//***************************OBJECT**************************************** */
const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for (const [key,value] of myObject) {
//   console.log(key,':-',value);   //error->not iterable like this
// }


