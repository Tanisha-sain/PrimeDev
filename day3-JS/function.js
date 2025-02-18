// ----- Function Decalaration -----

// 1. Can call function before its declaration
// 2. Can create two functions with same name

print1("Mohan");

function print1(a, b, c){
    console.log("Hello, "+ a);
};
print1("Rakesh");

// ----- Function Assignment -----

const view = function print2(a, b, c){
    console.log("Hiii, " + a);
}
view("Ramesh");
// print2("Mahesh");

// ----- Anonymous Function Assignment -----

const view2 = function (a, b, c){
    console.log("Hloo, " + a);
}

// ----- Arrow Function Assignment -----

const view3 = (a,b,c) => {
    console.log("Hello, => " + a);
}

// Function to calculate sum and get its mod 10 values using type 1

// Type 1
function sumAndMod(a, b){
    return (a+b)%10;
}

// Type 2
const sumMod = function smd(a, b){
    return (a+b)%10;
}

// Type 3 
const sumMod10 = function(a, b){
    return (a+b)%10;
}

// Type4
// const sumAndMod10 = (a, b) => {
//     return (a+b)%10;
// }
const sumAndMod10 = (a, b) => (a+b)%10;

console.log(sumAndMod10(12, 13));

