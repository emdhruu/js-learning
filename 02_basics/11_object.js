//Object can be defined in two ways : 1. literal syntax 2.Constructor
//defined in literal way:
let user = {
    name:"Dhruti",
    age: 30,
    location: "rajasthan",
    email : "dhruti@google.com",
}
//"for..in" loop
for(let key in user){
    console.log(key);
    console.log(user[key]);
}
// //value can be access by dot and square brackets
// console.log(user.name);   //dot
// console.log(user["age"]);   //square brackets
 
// //multi-word property name used be in qouted. and adding it to objects list.
// user["like birds"] = true;
// //adding new key:value in object list.
// user.isAdminLogged = true;

// //printing object 
// console.log(user);

// //thier is no limitations on properties names they can be any name such as strings, symbols.
// let obj={
//     let: 1,
//     const : 2,
//     for: 3,
//     return : 4,
// };
// //accessing value of object
// console.log(obj.const);
// console.log(obj.const + obj.for + obj.let + obj.return);

// //we can access name as number too
// let obj1 ={
//     0 : "test",
// }

//Take a symbol key and access in object and print it..
const mySym = Symbol("key1");
const jsUser ={
    score1 : 100,
    score2 : 200,
    [mySym] : "mykeyvalue",
};
console.log(jsUser[mySym]);
console.log(jsUser);

//we can locked value of object so further can't change value of objects.
let userId = {
    address: "Gujarat",
    language : "hindi",
    email: "dhruti-gmail.com"
};
userId.language = "gujarati";
console.log(userId);
//after freezing object the value of object can't be changed.
Object.freeze(userId);
userId.email= "dhruti@gmail.com" // this can't change value of email

//using this. property
const jsUser1 = {
    name : "John",
    age : 30,
}
//Normal function with .this
jsUser1.greetingTwo = function(){
    console.log("Hello in this funciton no this. is used");
}
console.log(jsUser1.greetingTwo());
//Function with this. function
jsUser1.greeting = function(){
    console.log(`Hello this JsUser, ${this.name}. here this. is used`);
}
console.log(jsUser1.greeting());