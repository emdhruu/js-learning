let score = 33 //-->> number as not in double qoute
console.log(typeof score); //both way of printing datatype in browser 
console.log(typeof (score));

score= "33" //double qoute ->> string
console.log(typeof score); //printing data type of score

let valueConversion = Number(score) //conversion of string into Number data type
console.log(typeof valueConversion);
console.log(valueConversion); //printing value

let password= "33abc" //not a number nor a string 
console.log(typeof password);  // but it'll print datatype as string 

let conversionInput = Number(password) //conversion to Number data type
console.log(typeof conversionInput);
console.log(conversionInput); //print value as NaN NOT A NUMBER

let isLoggedIn =1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

let isEmpty="001"
/*
let isEmpty --> false
let isEmpty =" "--> false
let isEmpty ="dhruti" --> true
let isEmpty = "001"--> true
let isEmpty = 1 --> true
let isEmpty = 0 --> false
*/ 
let booleanIsEmpty= Boolean(isEmpty)
console.log(booleanIsEmpty);

//Number to String datatype Conversion 
let someNumber =45

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// **************************** Operations ***********************************
let value=5;
let negValue = -value;
console.log(negValue);

console.log(2+3);
console.log(2-2);
console.log(2*2);
console.log(2**3);  //for power 2^3
console.log(2/3);
console.log(2%3);

let str1 = "hello,";
let str2 ="dhruti!" ;

let str = str1 + str2;
console.log(str);

let x= -1
console.log(-x);
//     - - +
//     + + +
//     - + -
//     + - -
// ************************************* Increment / Decrement Operator ********************************

let counter =1;
counter++;   //postfix
console.log(counter);

let count = 1;
++count;   //prefix
console.log(count);

let goal = 1;
let a = goal++;
console.log(goal);

let w= 1;
let b = w++;
console.log(b);

let y = 1;
let c = ++y;
console.log(c);

let sum = 1;
console.log(2 * ++sum);

let add =0;
console.log(--add);


