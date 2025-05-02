const express = require("express");
const {getProductsController} = require("../controllers/getProductsController.js");
const {addProductsController} = require("../controllers/addProuctsController.js");
const {validateAddProductDto} = require("../dto/validateAddProductDto.js");

const productRouter = express.Router();

productRouter.get("/", getProductsController);
productRouter.post("/addProduct", validateAddProductDto, addProductsController);

module.exports = {
    productRouter
};