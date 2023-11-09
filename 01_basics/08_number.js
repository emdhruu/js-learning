const score = 400;
// console.log(score);

const number = new Number(500);
console.log(number);

//***********************Now we'll see number methods */
console.log(number.toString()); //it'll change data type to number
console.log(number.toString().length); // here, we can access the string method also in number type
console.log(typeof number);

console.log(number.toFixed());
console.log(number.toFixed(1));
console.log(number.toFixed(2));

const num = new Number(1234.567);
console.log(num.toFixed(5));     // 1234.56700
console.log(num.toFixed(2));    //1234.57
console.log(num.toFixed(1));    //1234.6
console.log(num.toFixed()); //1235

function precise (x){
    return x.toPrecision(4);
}
console.log(precise(1234.4567));
console.log(precise(0.004));
console.log(precise(1.23e5));
console.log(precise(0));

const otherNum = 1123.8966;
console.log(otherNum.toPrecision(3));

const hundered = 1000000;
console.log("this will in us standard form =>", hundered.toLocaleString());
console.log("this will in indian standard form =>", hundered.toLocaleString('en-IN'));

//++++++++++++++++++++++  Maths libary by-default ++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(3.3)); //round-off acc to after decimal pt 
console.log(Math.ceil(3.2));
console.log(Math.floor(2.9));
console.log(Math.max(3,9,10,2,1)); //gives max value from array
console.log(Math.min(3,9,10,2,1)); //gives min value from array

let x = (Math.floor(Math.random()*7)); // 0 to 6 produces number less then 7 till 6 where 6 is included.
console.log(x);
console.log((Math.floor(Math.random()*100))); // 0 to 99 produces number less then 100 till 99 where 99 is included.
console.log((Math.floor(Math.random()*101)));   // 0 to 100 produces number less then 101 i.e. till 100 where 100 is included
console.log((Math.floor(Math.random()*10)));    // 0 to 9
console.log((Math.floor(Math.random()*11)));    // 0 to 10

console.log((Math.floor(Math.random()*10)) + 1);  // 1 to 10 here, 0 is excluded

//++++++++++++++ MAX inclusive and MIN exclusive++++++++++++++++++++
function getRandom(max, min){
    let x = Math.floor(Math.random() * (max - min)) + min;
    return x;
}
console.log(getRandom(10,20));

//++++++++++++++ Max and Min both are inclued++++++++++++++++
function getValue(max,min){
    let y= Math.floor(Math.random() * (max - min +1)) + min;
    return y;
}
console.log(getValue(10,20));
