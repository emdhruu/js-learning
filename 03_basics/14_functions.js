// function sayMyName(){
//     console.log("D");
//     console.log("H");
//     console.log("R");
//     console.log("U");
//     console.log("T");
//     console.log("I");
// };

// sayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }
// function addTwoNumbers(number1 , number2){
    // console.log(number1 + number2);
    // let result= number1 +number2;
    // return(result);
    // console.log(number1 + number2); // after  return not reachable statement
//     return number1 +number2;
// }
// console.log(addTwoNumbers(3,4));
// let result = addTwoNumbers(3,4);
// console.log("result is : ",result);


function loginUserMessage(username){
    return `${username} just logged in`;
};

loginUserMessage("dhruti"); //it doesn't give any o/p as it's not store in variables or not printed .
console.log(loginUserMessage("dhruti")); 

function loginUserMessage(username){
    if(!username){
        console.log('Please pass argument in username');
        return;
    }
    return `${username} just logged in`;
};

//rest parameter used here 
//common situation add multiple value in cart without knwing number of arguments
function calculateCartPrice(...num1){
    return num1;
}           
console.log(calculateCartPrice(200,400,500));

//interview question
function calculate(value1, value2,...num1){
    return num1;
}           
console.log(calculate(200,400,500,1000,300,600));

//Object in function
const user ={
    username : "dhruti",
    price :100,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user); 
//another way to pass object is below:
handleObject({
    username : "sam",
    price : 399,
});

//Array in function

// const myArray = [200, 400, 300 , 500];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,300,500]));