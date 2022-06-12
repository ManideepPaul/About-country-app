const input = document.querySelector('input');
const map = document.querySelector('iframe');
const mapOuter = document.querySelector('.mapouter');
const ul = document.querySelector('.languages');
const langHeader = document.querySelector('.langHeader');
const countryName = document.querySelector('.name');
const latLang = document.querySelector('.latLang');
const flag = document.querySelector('.flag');
const description = document.querySelector('.description');


input.addEventListener('change', () => {
    let value = input.value;
    let apiData = [];

    //This is for removing the previous languages.
    if(document.querySelector('li')){
        const li = document.querySelectorAll('li')
        li.forEach(item => ul.removeChild(item))
    }  

    //Setting the map source.
    map.src = `https://maps.google.com/maps?q=${value}&t=&z=4&ie=UTF8&iwloc=&output=embed`;
    
    //Fetching the data from the api
    fetch(`https://restcountries.com/v3.1/name/${value}?fullText=true`)
    .then(res => res.json())
    .then(data => {
        //The country name.
        countryName.innerText = (data[0].name.common)

        //Looping through the language list and displaying them on DOM.
        for (const key in data[0].languages) {
            let li = document.createElement("li")
            li.innerHTML = data[0].languages[key]
            ul.appendChild(li);
        }

        //The gps location
        latLang.innerText = `Latitude & Longitude: ${data[0].latlng}`;

        //The flag image
        flag.src = `${(data[0].flags.svg)}`;

        //Description about country.
        description.innerText = `Official name of the ${data[0].name.common} is ${data[0].name.official}. The population of the country ${data[0].population}.`
    })

    //Removing the hidden class after the country search.
    countryName.classList.remove('hidden')
    ul.classList.remove('hidden')
    langHeader.classList.remove('hidden')
    mapOuter.classList.remove('hidden')
    latLang.classList.remove('hidden')
    flag.classList.remove('hidden')
    description.classList.remove('hidden')
})

