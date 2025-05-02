const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    price: Number,
    stock: {
        type: Number,
        default: 1,
        min: 0,
    },
    tags: {
        type: [String]
    }
})

const ProductModel = mongoose.model("product", productSchema);
module.exports = {
    ProductModel
}