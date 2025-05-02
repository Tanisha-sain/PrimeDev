const getData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = resp.json();
    return data.products;
}

const root = document.getElementById("root");

const getProductsHtmlCode = (products) => {
    let result = "";
    products.forEach(({title, price}) => {
        result += `
        <h4>${title}</h4>
        <p>${price}</p>`
    })
    return result;
}

// const showUI = (products) => {
//     products.forEach(({title, price}) => {
//         const newDiv = document.createElement("div");
//         newDiv.className = "card";
//         newDiv.innerHTML = `
//         <h4>${title}</h4>
//         <p>${price}</p>`
//         root.appendChild(newDiv);
        
//     })
// }