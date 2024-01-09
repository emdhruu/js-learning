//truthy and falsy value

const userLoggedWithEmail = [];

if(userLoggedWithEmail){
    console.log("user logged with email");
}
else
{
    console.log("not have an email address");
}

//fasy values 
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " "(space in barces), [], {}, function(){}

// if (userLoggedWithEmail.length === 0) {
//     console.log("array is empty");
// } 

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1, val2, val3;
val1 = 5 ?? 10; //5
val2 = null ?? 10;  //10
val3 = undefined ?? 30;   //30
val4 = null ?? 10 ?? 20;  //10

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

//condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");