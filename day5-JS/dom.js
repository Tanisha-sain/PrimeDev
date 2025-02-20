// console.dir(document); -> document object represents DOM
// console.dir(window); -> window object represents BOM
// document is given by window. So, window.document -> document

document.write("Hello");

// Searching the element

// 1. document.getElementById() -> null / Element
    const elem1 = document.getElementById("text-1"); 
    console.dir(elem1);
    elem1.style.color = "blue"

// 2. document.getElementsByClassName() -> HTMLCollection
    const elem2 = document.getElementsByClassName("cl");
    console.dir(elem2);

// 3. document.getElementsByTagName() -> HTMLCollection
    const elem3 = document.getElementsByTagName("h1");
    console.dir(elem3);

// 4. document.querySelectorAll() -> NodeList
    const elem4 = document.querySelectorAll('.cl');
    console.dir(elem4);

// 5. document.querySelector() -> null / Element
    const elem5 = document.querySelector("p.cl");
    console.dir(elem5);

// ----------------------------------------------------------------------------

// Example 1

// console.dir(document)
// console.dir(document.children)
// console.dir(document.children[0])
// console.dir(document.children[0].children);
// console.dir(document.children[0].children[1]);
// console.dir(document.children[0].children[1].children);
// console.dir(document.children[0].children[1].children[2]);
// console.dir(document.children[0].children[1].children[3].children);


// document.children[0].children[1].children[2].style.color = "Red";
document.querySelector("h1").style.color = "Red";


// document.children[0].children[1].children[3].style.backgroundColor = "Blue";
const divs = document.querySelectorAll("div");
console.dir(divs);
const outerdiv = divs.item(1);
outerdiv.style.backgroundColor = "Blue"


// const innerDivs = document.children[0].children[1].children[3].children;
// console.dir(innerDivs)

// Ways to iterate over HTMLCollection

// 1. For loop
// for(let i = 0; i<innerDivs.length; i++){
//     innerDivs.item(i).style.backgroundColor = "Yellow";
// }

// 2. For of 
// for(let ele of innerDivs){
//     ele.style.backgroundColor = "Yellow";
// }

// 3. Convert HTMLCollection to Array using Array.from(iterable)
// const arr = Array.from(innerDivs);
// arr.forEach((ele) => {
//   elem.style.backgroundColor = "Yellow";
//})


for(let i = 2; i<divs.length; i++){
    divs.item(i).style.backgroundColor = "Yellow";
}


// -------------------------------------------------------------------------------

const mappings = {
    Invitation: "Your are invited for event",
    Reminder: "You are reminded for task",
    Notice: "You have a notice from college",
    Message: "You have 7 messages",
}

for(let i = 2; i<divs.length; i++){
    divs.item(i).children[1].innerText = mappings[divs.item(i).children[0].innerText]
    console.dir(divs.item(i).children[0]);
}

// ----------------------------------------------------------------------------------

const newElement = document.createElement("div");
const rootElement = document.querySelector("body");

// newElement.innerText ="Hi from DOM";

Object.entries(mappings).forEach((entry) => {
    const newEle = document.createElement("div");

    // const h3 = document.createElement("h3");
    // h3.innerText = entry[0];
    // const p = document.createElement("p");
    // p.innerText = entry[1];
    // newEle.appendChild(h3);
    // newEle.appendChild(p);

    newEle.innerHTML = `
    <h3 style="color: orange">${entry[0]}</h3>
    <p>${entry[1]}</p>
    `;

    newElement.appendChild(newEle);
})

rootElement.appendChild(newElement);






// Difference between Node and Element
// NodeList
// HTMLCollection
// append, appendChild
// remove, removechild
// prepend