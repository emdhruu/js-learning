// *************************Normal Comparison************************
console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log(2>=1);
console.log(2<=1);

// **************************Comparison btw different datatypes**********************

//****** string & number******
console.log("2" > 1); // true, as "2" converted to number.
console.log("02" > 1);// true 

//********* null and number ***********
console.log(null > 0); //comparison convert null to number as null into 0 >0 therefore , false.
console.log(null == 0);  //equality check works differenty as it doesn't convert null to number.
console.log(null >= 0); //it's true as null convert to number as 0>=0.
console.log(null <= 0);// it's true.

//********Operators*************
// == equal to
// != not equal to 
// > greater then
// < less then
// >= greater then equal to
// <= less then equal to
// === equal value and equal type
// !== not eual value and not equal type