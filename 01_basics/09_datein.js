// Dates
let myDate = new Date();
console.log(JSON.parse( JSON.stringify(myDate)));
console.log(myDate.toString());
console.log(myDate);

//-------------- different way of writing date in date-string method which can be readable
console.log("01=>",myDate.toDateString());
console.log("02=>",myDate.toISOString());
console.log("03=>",myDate.toJSON());
console.log("04=>",myDate.toLocaleDateString());
console.log("05=>",myDate.toLocaleString("en-In"));
console.log("06=>",myDate.toLocaleTimeString);
console.log("07=>",myDate.toTimeString());
console.log("08=>", myDate.toUTCString());

let myCreateDate = new Date(2023, 1, 14); //single array will count month 0 as january
console.log(myCreateDate.toString());

// let newDate = new Date(2023, 0, 25, 5, 4);
// let newDate = new Date("01-14-2023");
// let newDate = new Date("11,11,2023");
console.log(newDate.toString());
console.log(newDate.toLocaleString());

//++++++++++++++++++ Date.now() is used for timespam 
const start = Date.now();

console.log('starting timer...');
console.log(start);
// Expected output: "starting timer..."

setTimeout(() => {
  const end = Date.now();
  console.log(end);
  const millis = end- start;
  console.log(millis);

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);


//+++++++++++++++++++++ date.toLocaleString("locales",options);
//we can give locales as en-In , default , us , indonaisa, etc countries &  option such as example.
let newDate = new Date("11,11,2023");
console.log(newDate.toLocaleString("en-in", {
  weekday:"long",
  year:"2-digit",
  month:"long",
  day:"numeric"
}));