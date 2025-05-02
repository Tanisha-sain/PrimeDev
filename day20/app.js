const express = require("express");
const {requestLog} = require("./utils/logger.js");
const {saveData} = require("./utils/Data.js");

const PORT = 2100;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    requestLog(req);
    next();
})


app.get("/", (req, res) => {
    // requestLog(req);
    res.json({
        status: "success",
        message: `Server is running on port ${PORT}`
    })
})

app.use((req, res, next) => {
    requestLog(req);
    next();
})

app.post("/products", (req, res) => {
    // requestLog(req);
    const data = req.body;
    saveData(data);
    res.json({
        status: "fail",
        message: "work in progress"
    })
})

app.use((req, res, next) => {
    res.status(404)
    res.json({
        status: "fail",
        message: "You are trying to access a route which is not defined yet"
    })
})

app.listen(PORT, () => {
    console.log(`App is running on PORT : ${PORT}`)
})