const fsPromises = require("fs/promises");

const requestLog = (req) => {
    const {method, url} = req;
    const date = new Date();
    saveLogs(`${date.toLocaleString()} - ${method} - ${url}\n`);
}

const saveLogs = async (data) => {
    try {
        await fsPromises.appendFile("logs.txt", data);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    requestLog,
    saveLogs
}