const http = require("http");
const fsPromises = require("fs/promises");

const port = 1200;

const getData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    return data.products;
}

const getProductsHtmlCode = (products) => {
    let result = "";
    products.forEach(({title, price}) => {
        result += `
        <h4>${title}</h4>
        <p>${price}</p>`
    })
    return result;
}

const server = http.createServer(async (req, res) => {
    console.log("--- request received ---");
    // console.log(typeof req);
    // console.log(Object.keys(req));
    console.log(req.url);

    res.setHeader('content-type', 'text/html');
    res.setHeader('my-name', 'Tanisha');
    // const resp = await fsPromises.readFile("./pages/homePage.html");
    
    if(req.url == "/" || req.url == "/home"){
        const resp = await fsPromises.readFile("./pages/homePage.html", {
            encoding: "utf-8",
        });
    
        const products = await getData();
        const productsHtmlCode = getProductsHtmlCode(products);
        const newPage = resp.replace("__Products", productsHtmlCode)
        // console.log(resp);
        res.end(newPage);
    }else if(req.url == "/about"){
        res.end("About page")
    }else{
        res.end("404 Page not found")
    }
})

server.listen(port, () => {
    console.log(`---------Server is running on port ${port}---------`);
    console.log(`--------- http://localhost:${port} ---------`)
});