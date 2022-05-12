let query = "";
let apiKey = "870497d4cbd4ab3e7f3141e5439ffad1";
let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`
let meteoTable = document.querySelector('meteoTable');
let current = [];
let name = [];

const search = document.getElementById("search");

const fetchMeteo = async () => {
    meteo = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`).then((response)=>response.json());
}

const meteoDay = async () => {
    await fetchMeteo();
    console.log(meteo)

meteoTable.innerHTML = query.name.map(
    (query)=>
    `<div>  
        <h2>${location.name}</h2>
    </div>`
    ).join("")
    //(picture)=>    
    // <div>
    //     <h2>${newDate}</h2>
    //     <img src="${picture.img_src}" alt="${picture.camera.full_name}">
    // </div>`
}

search.addEventListener('submit', (event)=> {
    event.preventDefault();
    query = document.querySelector('#city').value;
    meteoDay()
})

