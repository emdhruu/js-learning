// for-each loop
const coding =  ["js" , "ruby", "java", "python", "cpp"];
//array
//normal function
coding.forEach(function (item) {
    console.log(item);
 })

//arrow function
coding.forEach( (val) => {
    console.log(val);
})

//to declared array need to call
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

//others parameters in for-Each
coding.forEach( (item , index, arr) => {
    console.log(item, index, arr);
});

//Object in for-Each
const myCoding = [
    {
        language : "javascript",
        languageFileName : "js"
    },
    {
        language : "c++",
        languageFileName : "cpp"
    },
    {
        language : "python",
        languageFileName : "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )
 