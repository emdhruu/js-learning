const arr= [0,1,2,3,4,5];
console.log(arr);

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(5);
console.log(arr);

arr.shift();
arr.shift();

const arr1 = [6,7,8,9,10];

console.log(arr.concat(arr1));
console.log(arr);
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf(5));

const newArr = arr.join();
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

console.log("original array ", arr);

const  newArr1 = arr.slice(1,5);
console.log("slice array",newArr1);

console.log("original array ", arr);

const myArr = arr.splice(3,5);
console.log("splice array ", myArr);

console.log("original array ", arr);

// example 2 of splice 
const months = ['jan', 'march', 'april', ' may', 'july'];
// adding one element at index[1], count =0 means no element deletion, item to insert
// insert at index[1]
months.splice(1,0,'feb');
console.log("insert at index[1] \n",months);

months.splice(5,1,'june');
console.log(months);

const hero = ['spiderman', 'shaktiman', 'batman'];
const marvel= ['ironman', 'flash','thor'];
// hero.push(marvel);
// console.log(hero); // o/p : [ 'spiderman', 'shaktiman', 'batman', [ 'ironman', 'flash', 'thor' ] ]

const allHero = hero.concat(marvel);
console.log(allHero); // o/p : [ 'spiderman', 'shaktiman', 'batman', 'ironman', 'flash', 'thor' ]

//++++++++++++++++++ Spread Operator (...) triple dot 
//+++++++++++ Apply for new operator 
// const dateFields = [1970, 0, 1]; // 1 Jan 1970
// const d = new Date(...dateFields).toLocaleString();
// console.log(d);

// let arr1 = [0, 1, 29];
// const arr2 = [3, 4, 5];

// arr1 = [...arr1, ...arr2];
// console.log(arr1);

//++++++++++++++ .flat() operator
const arr3 = [0, 1, 2, [3, 4]];

console.log(arr3.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr4 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr4.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr4.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr4.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]

// to identify whether it's array or not the selected data 
console.log(Array.isArray('Dhruti')); // it's string therefore o/p false

//to covert it into array
console.log(Array.from("dhrruti"));
