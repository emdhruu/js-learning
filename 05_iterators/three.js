// Array's specific loop 

//for-of loop
const arr= [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greatings = "hello world!";
for (const greets of greatings) {
    if (greets.indexOf(' ') >= 0) {
        continue
    }
    console.log(greets);
}