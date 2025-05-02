const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL, {
    dbName: "PRIME-ABES-22"
})
.then(() => {
    console.log("DB Connected Successfully");
})
.catch((err) => {
    console.log("----DB Connection Error----");
    console.log(err.message);
    console.log("---------------------------")
})