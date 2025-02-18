// // -----------------------------
// // Two Separate Functions
// // Separation of concern

// const sum = (a, b) => {
//     const ans = a+b;
//     return ans;
// }
// const printPretty = (txt) => {
//     console.log("--------");
//     console.log("---" + txt + "---");
//     console.log("--------");
// }
// const res = sum(20, 30);
// printPretty(res);

// // -----------------------------

// // Callbacks (inversion of control)
// // sumcb is a Higher order function and printPretty is callback function
// const sumcb = (a, b, c) => {
//     const ans = a+b;
//     c(ans);
// }
// sumcb(20, 32, printPretty);

// // -----------------------------

const getMetaData = () => {
    const name = prompt("Please Enter your name");
    console.log("Hello", name);
    // parseFloat(), Number(), parseInt() for typecasting
    const numOfSub = parseInt(prompt("Please enter the number of Subjects"));
    return numOfSub;
}

const getSubjects = (numOfSub) => {
    const record = {};
    for(let i = 0; i<numOfSub; i++){
        const subName = prompt(`Please enter the name of subject ${i+1}`);
        const marks = Number(prompt(`Please enter the marks of subject ${i+1}`));
        record[subName] = marks;
    }
    return record;
}

const getPercentage = (record) => {
    let sum = 0;

    // Object.values(obj) // Array of values
    // Object.keys(obj) // Array of keys
    // Object.entries(obj) // Array of Array of key and value

    let marks = Object.values(record);
    // marks.forEach(ele => {
    //     sum += ele;
    // });

    marks.map((ele) => sum+=ele);


    return sum/marks.length;
}

const getHighestScoringSubject = (obj) => {
    const entries = Object.entries(obj);
    let maxMarks = entries[0][1];
    let maxSub = entries[0][0]
    // entries.forEach((ele) => {
    //     if(maxMarks < ele[1]){
    //         maxMarks = ele[1];
    //         maxSub = ele[0];
    //     }
    // });

    entries.reduce((acc, ele) => {
        console.log(acc + " " + ele);
        if(ele[1] > obj[acc]){
            acc = ele[0];
        }
        return acc;
    }, maxSub)
    return maxSub;
}

const getGrades = (percentage) => {
    const grades = [
        [90, "A+"],
        [80, "A"],
        [70, "B+"],
        [60, "B"],
        [50, "C"],
        [40, "D"],
        [30, "E"]
    ]
    let grade;
    // grades.forEach((ele) => {
    //     if(percentage >= ele[0] && !grade){
    //         grade = ele[1];
    //     }
    // })
    const val = grades.find((ele) => (ele[0] <= percentage))
    // console.log(val)
    if(!val) return "F";
    return val[1];
    // if(!grade) return "F";
    // return grade;
}

const sub = getMetaData();
const record = getSubjects(sub);
// const record = {
//     Maths : 40,
//     English : 70,
//     Hindi : 80
// }
const percentage = getPercentage(record);
const maxSub = getHighestScoringSubject(record);
console.log(percentage);
console.log(maxSub);
console.log(getGrades(percentage));

// let arr = [10, 20, 30];
// const printPretty = (ele, idx, a, b, c) => {
//     console.log(`${ele} -> ${idx} ${a} ${b} ${c}`)
// }
// arr.forEach(printPretty)