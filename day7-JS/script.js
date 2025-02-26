const data = [
    {
        email: "tanisha@gmail.com",
        name: "Tanisha",
        city: "Modinagar",
    },
    {
        email: "ravi@gmail.com",
        name: "Tanya",
        city: "Aligarh",
    },
    {
        email: "kavi@gmail.com",
        name: "Riya",
        city: "Ghaziabad",
    }
];
const root = document.getElementById("root");

const selectElement = document.getElementsByTagName("select")[0];
console.log(selectElement);


const showOptions = (data) => {
    selectElement.innerHTML = "";
    const citiesObj = {};
    data.forEach((ele) => (citiesObj[ele.city] = true));
    const cities = Object.keys(citiesObj);
    console.log(cities)
    cities.forEach((city) => {
        const newOptions = document.createElement("option");
        newOptions.value = city;
        newOptions.innerText = city;
        selectElement.appendChild(newOptions);
    });
};
const showCards = (newData) => {
    showOptions(newData);
    root.innerHTML = "";
    newData.forEach((ele, idx) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h4>${ele.name}</h4>
        <p>${ele.city}</p>
        <button onClick="deleteCard(event, '${ele.email}')">Delete</Delete>`;
        root.appendChild(card);
    });
};
showCards(data);

const deleteCard = (event, id) => {
    // e.target.parentElement.remove() // will not affect the array
    // data.splice(idx, 1) // will affect the array
    const idx = data.findIndex((ele) => ele.email == id);
    console.log(idx);
    data.splice(idx, 1);
    showCards(data);
}

const handleSelect = (e) => {
    const selectCity = e.target.value;
    const newData = data.filter((ele) => ele.city === selectCity);
    showCards(newData);
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(e.target[0].value);

    const isEmailExist = data.some((ele) => ele.email === e.target.email.value);
    if(isEmailExist){
        alert("Email already exists");
        return;
    }
    const obj = {};
    obj.email = e.target.email.value;
    obj.name = e.target.name.value;
    obj.city = e.target.city.value;
    data.push(obj);
    showCards(data);
    console.log(data);
}


// const handleTextChange = (e) => {
//     // console.log(e);
//     console.log("Change: ", e.target.value);
// }

// const handleKeyDown = (e) => {
//     console.log(e.key);
//     console.log("Key Down: ", e.target.value);
// }
// const handleKeyUp = (e) => {
//     console.log(e);
//     console.log("Key Up: ", e.target.value);
// }


/// Difference between target and srcElement
// Difference between Key up and key down