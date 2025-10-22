const name="ayushi"
const repoCount=50
console.log(name.__proto__); //{}
console.log(name[0]); //a
console.log(name+repoCount+" value"); // ayushi50 value (outdated)
//so we use this(Modern way) called as String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('ayushi-sh-com') //declaring string through constructor
console.log(gameName) // [String: 'ayushi'] ->this shows that string is object having index as key and chars as value
console.log(gameName[0]) //a
console.log(gameName.__proto__); //{}



console.log(gameName.length) //8
console.log(gameName.toUpperCase()); //AYUSHI (but original value doesnt change)
console.log(gameName.charAt(2)); //u
console.log(gameName.indexOf('h')); //4

const newString=gameName.substring(0,4) //ei is excluded
console.log(newString) //ayus

const anotherString=gameName.slice(0,4) //in slice we can give negative values too
console.log(anotherString); //ayus


const myname=gameName.slice(-8,4);
console.log(myname); //yus
//Note-> substring cant use negative values

const newString1="   hitesh   "
console.log(newString1);
console.log(newString1.trim());

const url="https://hitesh.com/hitesh%20choudhary " //browser automatically converts space into %20
console.log(url.replace('%20','-')) //https://hitesh.com/hitesh-choudhary 

console.log(url.includes('hitesh')) //true
console.log(url.includes('sundar')) //false


console.log(gameName.split('-')); //[ 'ayushi', 'sh', 'com' ]
//it splits gamename wrt '-' nad convert it into array





