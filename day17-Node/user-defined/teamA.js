console.log("Team A loading")

const sum = require("./teamB");
// console.log(sum(10));
// console.log(sum(10, 20));
// console.log(sum(10, 20, 30));
// console.log(sum(10, 13, 99, 71));

const PROFIT = 100;
const EXPENSES = 20;
const REVENUE = sum(PROFIT + EXPENSES);
module.exports = {
    PROFIT,
    EXPENSES,
    REVENUE
}

console.log("Team A ends")
