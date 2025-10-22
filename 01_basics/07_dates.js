//dates

let myDate=new Date()
console.log(myDate.toString()); // Wed Oct 22 2025 12:28:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Wed Oct 22 2025
console.log(myDate.toLocaleString()); // 10/22/2025, 12:30:15 PM
console.log(typeof myDate); //date is object in JS

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
//in Js,month starts from 0

let myCreatedDate2=new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString()); //1/23/2023, 5:03:00 AM

let myCreatedDate3=new Date("2023-01-14") //YY-MM-DD
// if single 0,so month starts from 0->jan...but if double zero,so month starts from 01->Jan
console.log(myCreatedDate3.toLocaleString());  // 1/14/2023, 12:00:00 AM

let myCreatedDate4=new Date("01-14-2023");
console.log(myCreatedDate4.toLocaleString()); // 1/14/2023, 12:00:00 AM


let myTimeStamp=Date.now()
console.log(myTimeStamp); //1761137411255 ->value in ms at 22 Oct 2025 since Jan 1,1970

console.log(myCreatedDate4.getTime());  //1673654400000 ->time passed between January 1, 1970, 00:00:00
                                        //and 🕐 January 14, 2023, 00:00:00 (your local time).

/*The getTime() method returns the number of milliseconds that have passed since
👉 January 1, 1970, 00:00:00
*/

console.log(Date.now()); // 1761138320 ->    time passed in ms since 1/14/1970
// *Always do comparison in ms
//but if we want to convert ms into sec
console.log(Math.floor(Date.now()/1000)); //1761138320


let newDate=new Date();
console.log(newDate);  //2025-10-22T13:06:34.620Z
console.log(newDate.getMonth()); //9 ->0 based indexing
console.log(newDate.getDay()); //3 -> Wednesday

newDate.toLocaleString('default',{
    weekday:"long"                        //Ctrl+space -> to get all the properties
    
})