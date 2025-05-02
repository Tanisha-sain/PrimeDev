
console.log("Manager Loading")
const obj = require("./teamA");
const sum = require("./teamB")

console.log(`Our current revenue is ${obj.REVENUE} with ${obj.PROFIT} profit`);

const REVENUE = sum(100, 100);
console.log(REVENUE);
console.log("Manager ends");


// What happens when we require a module?
// Resolving & Loading -> Wrapping -> Execution -> Returning Exports -> Caching
// -- Stages of Resolving -> user defined modules => internal modules => external modules
// -- Wrapping -> Variables of one module will not collide with that of other

// (() => {})() [IIFE -> Immediately Invoked Function Expression]

(() => {
    console.log("IIFE")
})();