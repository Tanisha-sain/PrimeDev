var a = "hello";
var b = 'hello';
var c = 10;
var d = true;

// primitive datatypes - Number, String, Null, Undefined, Symbol, Boolean, BigInt
// non-primitive datatypes - Object

var e = "1"*"a";
if(e == 1){
    console.log("Yes");
    console.log(e)
}else{
    console.log("No");
    console.log(e)
}


// let   -> Block Scoped    || Cannot be redeclared  || Can be reassigned
// var   -> Function Scoped || Can be redeclared     || Cannot be reassigned
// const -> Block Scoped    || Cannot be redeclared  || Cannot be reassigned


// Process:
// 1. Memory Allocation
// 2. Execution
