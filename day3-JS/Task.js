const username = prompt("Enter your name: ");
const noOfSubs = prompt("Enter number of subjects: ");
const subAndMarks = {}
let highest;
let sum = 0;
for(let i = 0; i<noOfSubs; i++){
    const subName = prompt("Enter the subject name: ");
    const marks = Number(prompt("Enter the marks in given subject (out of 100): "));
    subAndMarks[subName] = marks;
    sum += marks;
    if(i == 0){
        highest = subName;
    }else{
        if(subAndMarks[highest] < marks){
            highest = subName;
        }
    }
}

let per = sum/noOfSubs;

console.log("Username -> " + username)
console.log("Percentage of marks is " + per);
console.log("Name of highest scoring subject is " + highest);

console.log("Subjects and their grades --> ");
for(key in subAndMarks){
    let val = subAndMarks[key];
    let grade;
    if(val > 90){
        grade = "A+";
    }else if(val > 80){
        grade = "A";
    }else if(val > 70){
        grade = "B+";
    }else if(val > 60){
        grade = "B";
    }else if(val > 50){
        grade = "C";
    }else if(val > 40){
        grade = "D";
    }else{
        grade = "E";
    }
    console.log(key + " -> " + grade);
}

