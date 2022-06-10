const input = document.querySelector('input');
const map = document.querySelector('iframe');
const mapOuter = document.querySelector('.mapouter');
let apiData = [];

input.addEventListener('change', () => {
    let value = input.value;
    map.src = `https://maps.google.com/maps?q=${value}&t=&z=4&ie=UTF8&iwloc=&output=embed`;
    mapOuter.style.display = 'block';
    // console.log(value)
    fetch(`https://restcountries.com/v3.1/name/${value}?fullText=true`)
        .then(res => res.json())
        .then(data => {
            apiData.push((data[0].name.common))
            apiData.push((data[0].languages))
            apiData.push((data[0].latlng))
            apiData.push((data[0].flags.svg))
        })
})


    console.log(apiData)