let message="hello";
message= 12345;

console.log(message);

let n = 123;
n=12.34;
console.log(n);

if(typeof window !== 'undefined') {
    console.log('you are on the browser');
    //can use alert
}
else{
    console.log('you are on the server');
    //can't use alert
}

console.log(typeof window);

console.log(NaN ** 0);

console.log("9abc"/3);

console.log(9007199254740991 + 1); //even is printed
console.log(9007199254740991 + 2); //odd integer is not printed when number range in larger then (2^56-1) safe range.