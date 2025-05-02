const {ProductModel} = require("../../../../models/product-schema.js")

const addProductsController = async (req, res) => {
    // console.log("Inside controller")
    try {
        console.log("Processing controller")
        const obj = req.body;
        console.log(obj);
    
        const newProduct = await ProductModel.create(obj);
        
        res.status(201);
        res.json({
            status: "success",
            data: {
                products: newProduct
            },
            message: "Product added successfully"
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    addProductsController
}