const marvel_heroes=["thor","IronMan","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);  //[ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]); //flash

// const allHeroes=marvel_heroes.concat(dc_heroes);
// console.log(allHeroes)  //[ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ]
//* Note- concat returns new Array whereas push pushes in existing array

//spread operator
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)  //[ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)  //here we take depth as infinity
console.log(real_another_array) //[1, 2, 3, 4, 5 ,6, 7, 6, 7, 4,5]
  
  
  console.log(Array.isArray("Hitesh")) //false
  console.log(Array.from("Hitesh"))  //[ 'H', 'i', 't', 'e', 's', 'h' ]
  //agr Array.from ..array me convert nhi kr payega to empty array dega
  console.log(Array.from({name:"Hitesh"})) //[]  ->interesting

  let score1=100
  let score2=200
  let score3=300

  console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ]

