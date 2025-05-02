const validateAddProductDto = (req, res, next) => {
    try {
        console.log("Validating product")
        const {title, price, stock} = req.body;
    
        if(title === undefined || title === null || typeof(title) !== "string" || title.length < 2){
            throw new Error("Invalid Title")
        }
    
        if(!price || Number(price) === NaN  || Number(price) <= 0){
           throw new Error("Invalid price")
        }
    
        if(stock && (Number(stock) === NaN || Number(stock) <= 0)){
            throw new Error("Invalid stock");
        }
    
        next();

    } catch (error) {
        res.status(400);
        res.json({
            status: "fail",
            message: error.message
        })
    }
}

module.exports = {
    validateAddProductDto
}