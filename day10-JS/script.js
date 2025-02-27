// https://dummyjson.com/recipes
// https://dummyjson.com/recipes/search?q=Margherita
let timeoutid = null;
const handleSearch = (e) => {
    if(timeoutid) clearTimeout(timeoutid);
    timeoutid = setTimeout(() => {
        getData(e.target.value);
    }, 300);
}

const cardContainer = document.getElementById("cards-container");

const getData = (text) => {
    const pr = fetch(`https://dummyjson.com/recipes/search?q=${text}`);
    pr.then((res) => {
        const data = res.json();
        data.then((dt) => {
            showCards(dt.recipes)
        })
    })
    .catch((err) => {
        console.log("Error: ", err.message);
    })
}

const showCards = (data) => {
    cardContainer.innerHTML = "";
    data.forEach((ele) => {
        const newDiv = document.createElement("div");
        newDiv.className = 'card';
        newDiv.innerHTML = `
            <h4>${ele.name}</h4>
            <img src="${ele.image}">
            <p>${ele.cuisine}</p>
        `
        // console.log(ele);
        cardContainer.append(newDiv);
    })
}


