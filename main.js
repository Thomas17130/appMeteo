let query = "";
let apiKey = "870497d4cbd4ab3e7f3141e5439ffad1";
let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`

const search = document.getElementById("search");

search.addEventListener('submit', (event)=> {
    event.preventDefault();
    query = document.querySelector('#city').value;
    console.log(query);
})