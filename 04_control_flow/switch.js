// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//agr bhtt saari conditions check krni ho,then we use switch
// const month=3;

// switch (month) {  //key->wo value jo mujhe hr baar check krni ho
//     case 1:
//         console.log("january");
//         break;

//         //to duplicate-> select the content->shift+alt+down arrow
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }
//ans=> march
/*Note-> if break is not there,so jha pe meri key match hogi,wha se poora
code execute ho jaayega except default one*/

const month="march";

switch (month) {  //key->wo value jo mujhe hr baar check krni ho
    case "jan":
        console.log("january");
        break;

        //to duplicate-> select the content->shift+alt+down arrow
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
//ans=> march