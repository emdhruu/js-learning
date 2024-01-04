const user = {
    username: "dhruti",
    price: 999,

    welcomeMessage: function () {
        console.log(` ${this.username} , welcome to website`);
        // console.log(this);
        
    }
}
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this);

function chai() {
    let username = "dhruti"
    console.log(this.username);
}
chai();

const value = function () {
    let username = "Dhruti thakkar";
    console.log(this.username);
}
value();

const coffee = () =>{
    let username = "dhruti";
    console.log(this);
    console.log(this.username);
} 
coffee();

const addTwo= ( num1, num2) =>{
    return num1 + num2;
};

console.log(addTwo(3,4));

const subTwo = (num1, num2) => num1 - num2;
console.log(subTwo(3,2));

const mulTwo = (num1 , num2) => (num1 * num2);
console.log(mulTwo(3,2));

// return Object
const obj= () =>({
    username :"dhruti",
});
console.log(obj());

const myArray = [2,5,6,7];
myArray.forEach(
    () => num +num
)