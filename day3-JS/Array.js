// Static typed -> Need not to define datatype of data while declaration
// Dynamic typed -> Need to define the datatype while declaring variable

// Loosely type -> can change the datatype of variable
// Strictly type -> Cannot change the datatype

const arr = ["Fruits", "Hello", 23]
console.log(arr);
console.log(arr.length);


// inserting element in array
arr.push("World"); // adds element at the last
console.log(arr[3])

arr[4] = 45; // adds element at particular index
arr[2] = 56 // updates the value 
console.log(arr);

// deleting element in array
arr.pop(); // delete the last element
delete arr[1] // delete the element and create empty space at that index

console.log(arr)

// shift, unshift, slice, splice