// const handleInnerCall = () => {
//     console.log("Step Y");
// };
// const handleCall = () => {
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// }

let products = [];
const getData = (e) => {
    const pr = fetch("https://dummyjson.com/products");
    pr.then((a) => {
        const pr2 = a.json();
        pr2.then((data) => {
            products = data.products;
            console.log(products);
            showUI(products);
        })
    })
    .catch((e) => {
        console.log("Error: ", e.message);
    });
}

getData();

function showUI(products) {
    let parent = document.querySelector(".parent");
    products.forEach((item) => {
        const {id, title, images, price, discountPercentage, rating} = item;
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <div class="image-container>
            <img src="${images[0]}"></img>
        </div>
        <div class="text-container">
        <h1>${title}</h1>
        <h2>${price} (${discountPercentage}% off)</h2>
        <h4>Raing : ${rating}</h4>
        <button>View</button>
        <button onclick="addToCard(event, ${id})">Add To Cart</button>`;
        parent.appendChild(card);
    })
}

const search = () => {
    let parent = document.querySelector(".parent");
    let input = document.querySelector("input");
    let arr = products.filter(product => product.category == input.value);
    console.log(arr);
    parent.innerHTML = "";
    showUI(arr);
    storeData(arr);
}

function addToCard(e, id){
    console.log(e.target);
    console.log(id);
    const idx = products.findIndex((ele) => ele.id == id);
    const oldData = localStorage.getItem("cart");
    const arr = JSON.parse(oldData || "[]");
    arr.push(products[idx]);
    localStorage.setItem("cart", JSON.stringify(arr));
}

function showCart(){
    const oldData = localStorage.getItem("cart");
    const arr = JSON.parse(oldData || "[]");
    console.log(products);
    console.log(arr);
    showUI(arr);
} 

function storeData(data){
    const oldData = localStorage.getItem("searches");
    const arr = JSON.parse(oldData || "[]");
    arr.push(data);
    localStorage.setItem("searches", JSON.stringify(arr));
}
function showHistory(){
    const oldData = localStorage.getItem("searches");
    const arr = JSON.parse(oldData || "[]");
    arr.forEach(showUI(data));
}