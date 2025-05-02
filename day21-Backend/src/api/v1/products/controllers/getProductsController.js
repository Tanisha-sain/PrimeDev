const {ProductModel} = require("../../../../models/product-schema.js");

const getProductsController = async (req, res) => {
    const {page = 1, limit=5, q=""} = req.query;

    let query = ProductModel.find();

    const regexMatch = new RegExp(q, "i");

    query = query.where('title').regex(regexMatch);

    const queryClone = query.clone();
    const totalProducts = await queryClone.countDocuments();

    query = query.sort("_id");
    query = query.skip((page-1)*limit);
    query = query.limit(limit);

    const productList = await query;

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    })
    
    res.send({
        status:"success",
        data: {
            products: productList,
            page,
            limit,
            total: totalProducts
        },
    })
}

module.exports = {
    getProductsController
}