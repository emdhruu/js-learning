// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element); 
}
// console.log(element); not defined outside loop error will be soon

for (let i = 0; i <= 10; i++) {
    // console.log(`Outter loop of index ${i} \n`);
    for (let j = 0; j <= 10; j++) {
        console.log(i+ ' x ' + j + ' = ' + i*j + '\n');
    }
}

//to print with array defined
let myArray = ["flash" , "batman" , "superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}

//break
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log('detected 5');
        break;
    }
    console.log(`value of i is ${index}`);
}
//continue
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log('detected 5');
        continue;
    }
    console.log(`value of i is ${index}`);
}