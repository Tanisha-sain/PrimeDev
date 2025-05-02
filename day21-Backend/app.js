// npm i express nodemon dotenv mongodb mongoose
require("./src/config/db.js");
const dotenv = require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {productRouter} = require("./src/api/v1/products/routes/product-routes.js")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());  
app.use(morgan("dev"));

app.use("/api/v1/products", productRouter);
 
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})


// App.js -> router -> controller -> services -> db operations