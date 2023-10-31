//*****************Primitive type memory allocation */
let firstName="Dhruti ";
let secondName=firstName;
secondName="Thakkar";

console.log(firstName); //stack implementation changes will happened only in copies data not in original 
                         //refference data
console.log(secondName);

//************************ Non-Primitive type*******/
let userOne={
    email:"dhruti@yahoo.com",
    score:55
}
let userTwo= userOne;
//ew can see their is a change in original data 
userTwo.email="user@gmail.com";
userOne.score=100;
console.log(userOne.email, userOne.score);
console.log(userTwo);

let score1= ["10", "50", "100"];
let score2 = score1;
score2=["100", "150", "200"];
console.log(score1);
console.log(score2);
