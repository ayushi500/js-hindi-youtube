//for

for (let i = 0; i <= 10; i++) {
    const element = i;   //ctrl+d to select all the same words 
    if(element==5){
        console.log("5 is the best number");
    }
    
    console.log(element)
}  //0 1 2 3 4 5 is the best number 5 6 7 8 9 10

for (let i = 1; i <=10; i++) {
    //console.log(`outer loop value:${i}`)
    for (let j = 1; j <=10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`)
        //console.log(i + '*' + j +' = ' + i*j)  //table from 1 to 10
    } 
}


let myArray=["flash","batman","superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);  //flash,batman,superman
    
}


//break and continue

// for (let i = 1; i <=20; i++) {
//     if(i==5) break;   
//    console.log(`value of i is${i}`)
    
// }
for (let i = 1; i <=20; i++) {
    if(i==5) continue;   //skip 5
   console.log(`value of i is ${i}`)
    
}

