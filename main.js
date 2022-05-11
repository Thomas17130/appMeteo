let query = "";
let apiKey = "12d0af88ad3576efac6006eb8a83d65e ";
let url = `hhtp://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`;

const search = document.getElementById("search");

const fetchMeteo = async ()=>
search.addEventListener('submit', (event)=> {
    event.preventDefault();
    query = document.querySelector('#city').value;
    console.log(query);
})  