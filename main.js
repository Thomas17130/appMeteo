let query = "";
let apiKey = "870497d4cbd4ab3e7f3141e5439ffad1";
let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`

const search = document.getElementById("search");

const fetchMeteo = async () => {
    meteo = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`).then((response)=>response.json());
}

const meteoDay = async () => {
    await fetchMeteo()
    console.log(meteo)
}

search.addEventListener('submit', (event)=> {
    event.preventDefault();
    query = document.querySelector('#city').value;
    meteoDay()
})

