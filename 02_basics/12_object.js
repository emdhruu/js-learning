// Singleton Object 
const user = new Object();
console.log(user);

// non-singleton Object
const tinderUser = {};
tinderUser.id = "123xyz";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

//whenever working in database these such things are usefull to access keys and value separating in arrays forms.
console.log(Object.keys(tinderUser)); //only keys in array
console.log(Object.values(tinderUser)); // return only values
console.log(Object.entries(tinderUser)); // returns pair of keys : values


//Object inside Objects
const regularUser = {
    email : "www.google.com",
    names :  {
        usersName : {
            firstname : "dhruti",
            lastname : "thakkar",
        }
    }
}
console.log(regularUser.names.usersName?.firstname);
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));

//to idenify does it contain these such property in object and it doesn't work with nested object
console.log(regularUser.hasOwnProperty("names"));

//Merge objects together
const obj1 = {1: "a", 2: "b",};
const obj2 = {3: "c", 4: "d",};
// const obj3 = {obj1 , obj2}; o/p=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3= Object.assign({}, obj1, obj2) //here, their willbe no affect on other object values
console.log(obj3);

// // The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); //target object itself is changed
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);

console.log(returnedTarget === target);
// Expected output: true

//Most commonly you'll use spread operator to merge in objects and array too. It'll gives the same results.
const obj4 = {...obj1, ...obj2};
console.log(obj4);

//Objects consists of array
const users = [
    {
        id : 1,
        email : "gmail.com"
    },
    {
        id : 2,
        email : "google.com"
    },
    {
        id: 3,
        email : "yahoo.com"
    },
]
console.log(users);
console.log(users[1]);
console.log(users[1].email);

