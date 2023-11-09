// Dates
let myDate = new Date();
// console.log(JSON.parse( JSON.stringify(myDate)));
// console.log(myDate.toString());
// console.log(myDate);

//-------------- different way of writing date in date-string method which can be readable
// console.log("01=>",myDate.toDateString());
// console.log("02=>",myDate.toISOString());
// console.log("03=>",myDate.toJSON());
// console.log("04=>",myDate.toLocaleDateString());
// console.log("05=>",myDate.toLocaleString("en-In"));
// console.log("06=>",myDate.toLocaleTimeString);
// console.log("07=>",myDate.toTimeString());
// console.log("08=>", myDate.toUTCString());

let myCreateDate = new Date(2023, 1, 14); //single array will count month 0 as january
console.log(myCreateDate.toString());

// let newDate = new Date(2023, 0, 25, 5, 4);
// let newDate = new Date("01-14-2023");
let newDate = new Date("07,01,2023");
console.log(newDate.toString());
console.log(newDate.toLocaleString());

