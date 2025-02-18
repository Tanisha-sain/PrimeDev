const arr = [10, 20, 30];

const arrTwo = arr.map((ele) => {
    return ele*2;
})

// console.log(arr)
// console.log(arrTwo)

// Without default value, first value is assigned to acc and iteration starts from 2nd index
arr.reduce((acc, ele, idx, ar) => {
    console.log(acc + " " + ele + " " + idx + " " + ar);
})

arr.reduce((acc, ele, idx, ar) => {
    console.log(acc + " " + ele + " " + idx + " " + ar);
}, 0)

arr.reduce((acc, ele, idx, ar) => {
    console.log(acc + " " + ele + " " + idx + " " + ar);
    return acc;
}, 0)


const ans = arr.reduce((acc, ele) => {
    return acc+ele;
});
const ans2 = arr.reduce((acc, ele) => {
    return acc*ele;
});
console.log(ans)
console.log(ans2)


// Map using reduce
const newArr = arr.reduce((acc, ele) => {
    acc.push(ele*2);
    return acc;
}, [])
console.log(newArr);

