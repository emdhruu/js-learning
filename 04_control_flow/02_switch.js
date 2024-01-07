// Switch Statement 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 5

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuaray");
        break; 
    case 3:
        console.log("march");
        break; 
    case 4:
        console.log("april");
        break; 
    default:
        console.log("default case match");
        break;
}

const score = 3
//when break statement is not written then other below case will be after matched case
switch (score) {
    case 1:
        console.log("Level 1");
        break;
    case 2:
        console.log("Level 2");
        break; 
    case 3:
        console.log("Level 3");
        // break; 
    case 4:
        console.log("Level 4");
        // break; 
    default:
        console.log("default case match");
        break;
}

const level = 3
//when case doesn't match default case will be written
switch (score) {
    case 1:
        console.log("Level 1");
        break;
    case 2:
        console.log("Level 2");
        break; 
    default:
        console.log("default case match");
        break;
}
