const data = [
    {
        name: "Anuj",
        city: "Delhi",
        email: "anuj@gmail.com",
    },
    {
        name: "Rakesh",
        city: "Mumbai",
        email: "rakesh@gmail.com",
    },
    {
        name: "Mohan",
        city: "Hyderabad",
        email: "mohan@gmail.com",
    },
    {
        name: "Ajay",
        city: "Noida",
        email: "ajay@gmail.com",
    }
]

const root = document.getElementById("parent");

data.forEach((entry) => {
    const {name, city, email} = entry;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h4>${name}</h4>
    <h6>${email}</h6>
    <p class="text">${city}</p>`;
    root.appendChild(card);
    card.addEventListener("click", (e) => {
        // console.log(e);
        console.log('div clicked')
        card.style.backgroundColor = randomColor();
    }, true) // true Means capturing else bubbling
});


const handleBgChange = (e) => {
    console.log("Button clicked");
    const body = document.querySelector("body");
    body.style.backgroundColor = randomColor();
}

const randomColor = () => {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

// -> Caturing and <- bubbling
// doc -> html -> body -> div -> div -> p (capturing)
const textElement = document.querySelectorAll(".text");
console.log(textElement)
textElement.forEach((ele) => {
    ele.addEventListener("click", (event) => {
        console.log("para clicked")
        ele.style.backgroundColor = randomColor();
        console.log(event)
        event.stopPropagation();
    });
})
// textElement.addEventListener("click", () => {
//     textElement.style.backgroundColor = randomColor();
// })