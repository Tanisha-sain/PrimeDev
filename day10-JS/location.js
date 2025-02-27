let timeoutid = null;
const handleSearch = (e) => {
    if(timeoutid) clearTimeout(timeoutid);
    timeoutid = setTimeout(() => {
        getData(e.target.value);
    }, 1000);
}

const getData = (text) => {
    const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,
        {
            headers: {
                "x-rapidapi-host": "google-map-places.p.rapidapi.com",
                "x-rapidapi-key": "cf87fabc76mshffd5d0eb30ac59dp1d49b5jsnaca2a826bd91"
            }
        }
    );
    pr.then((res) => {
        const res2 = res.json();
        res2.then((data) => {
            showLocations(data);
        })
    })
    .catch((err) => {
        console.log(err.message);
    })
}
const root = document.getElementById("locations");
const showLocations = (data) => {
    root.innerHTML = "";
    const {predictions} = data;
    predictions.forEach(element => {
        const p = document.createElement("p");
        p.innerText = element.description;
        root.appendChild(p);
    });
}


const getSpecificLocation = (placeId) => {
    const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${placeId}&region=en&fields=all&language=en&reviews_no_translations=true`,
        {
            headers: {
                "x-rapidapi-host": "google-map-places.p.rapidapi.com",
                "x-rapidapi-key": "cf87fabc76mshffd5d0eb30ac59dp1d49b5jsnaca2a826bd91"
            }
    });
    pr.then((res) => {
        const res2 = res.json();
        res2.then((data) => {
            console.log(data);
            showSpecificLocation(data);
        })
    })
    .catch((err) => {
        console.log(err.message);
    })
}

const showSpecificLocation = (data) => {
    console.log(data);
    const {result} = data;
    console.log(result);
    const rootNew = document.getElementById("location-info");
    rootNew.innerText = `
        <h4>${result.name}</h4>
        <p>${result.formatted_address}</p>
        <img src="${result.icon}">
        <a href='${result.url}' target="_blank">Open</a>
    `;
}

root.addEventListener("click" , (e) => {
    root.innerHTML = "";
    getSpecificLocation(e.target.id);
});

