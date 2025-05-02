console.log("Team B loading")

const sum = (...args) => {
    // let s = 0;
    // for(ele of args){
    //     s += ele;
    // }
    let s = args.reduce((acc, curr) => acc += curr, 0);
    return s;
}
module.exports = sum;

console.log("Team B ends")
