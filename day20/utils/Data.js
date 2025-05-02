const fsPromises = require("fs/promises");
const {ulid} = require("ulid");

const saveData = async (data) => {
    try {
        data.id = ulid();
        const oldArr = await getProductsArray();
        oldArr.push(data);
        await fsPromises.writeFile("data.json", `${JSON.stringify(prevArr)}\n`);
    } catch (error) {
        console.log(error.message);
    }
}

const getProductsArray = async () => {
    const prev = await fsPromises.readFile("data.json");
    const prevArr = JSON.parse(prev);
    return prev;
}

module.exports = {
    saveData
}