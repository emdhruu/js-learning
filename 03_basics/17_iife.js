// IIFE Immediately Invoked Function Experssions

function chai(){
    console.log(`DB Connected`);
}
chai();

(function code() {
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`this is my name ${name}`);
})("dhruti"); 