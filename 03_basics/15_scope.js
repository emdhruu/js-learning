var c = 300;
let b = 50;
 
/**********  Scope: local and global scope */
if(true){
    let a = 10;  //local scope
    const b= 20;  //local scope
    console.log("inner: ", b);
    var c= 30;  //global scope
}

for (let i = 0; i < array.length; i++) {
    const element = array [i];
    
}

// console.log(a);
// console.log(b);
// console.log(c);

/***************** nested function ****/
function one(){
    const username = "dhruti";

    function two(){
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website); this will show error 
    two();
}
one(); //error : outside one() function accessing it.

if(true){
    const username ="dhruti"; 
    if(username === "dhruti"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website); error
}
// console.log(username); error

/**************** hositing declaration context */ 
console.log(addone(5)); // can access before initialization as function is declared without variable
function addone(num){
    return num + 1;
}

// addTwo(5); can't access before initialization as it stored in variable shows error
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5));