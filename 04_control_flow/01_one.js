// Control Flow or Logic Flow 
//if

// if(when condition is true statement is excute){
//     here it's scope of if 
// }

const isUserloggedIn = true;
if(isUserloggedIn){

}

if ( 3 == "3") {
    console.log("executed");
}

if ( 2 === "2") {
    console.log("executed");
}
else{
    console.log("false");
}

// < , >, <= , >=, == , ===, !=, !==
const score = 200;

if(score> 100){
    const power =  "fly";
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);

const balance = 1000;
if (balance > 500) console.log("test"); //implict scope

const level = 10;
if (level >5)  console.log("level one completed"),
console.log("level is scored "); //not prefered to write this type of code

//multiple condition check
if(balance < 500){
    console.log("less than 500");
}
else if (balance< 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userloggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userloggedIn && debitCard) {
    console.log("Allow to access course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}