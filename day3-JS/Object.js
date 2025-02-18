// const obj = {
//     "name": "Ramesh",
//     "city": "Delhi",
// };

const obj = {
    name : "Ramesh",
    name : "Raj",
    city : "Delhi"
}

// Accessing value of specific key
const username = obj.name;
console.log(username);

// Adding or updating a key-value pair
obj.country = "India";
console.log(obj);

// If the key is not present in object, then its values is undefined
console.log(obj.address)

// Accessing a value dynamically
const key = prompt("Please enter a key");
console.log(obj[key]);

obj.city = "Mumbai";

delete obj.city;