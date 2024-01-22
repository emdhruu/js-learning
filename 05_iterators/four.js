//for-in loop
//Object

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift in applev '
}
for (const key in myObject) {
//    console.log(` ${key} shorcut is for ${myObject[key]}`);
    // console.log(key);  for key in object
    // console.log(myObject[key]); for value in object
} 

//Array
const programming = ["js", "rb" ,"py", "java", "cpp" ];
for (const key in programming) {
    //  console.log(key); //  o/p 0 1 2 3 4 5
    // console.log(programming[key]); //it will print value major diff in array to print value
}

