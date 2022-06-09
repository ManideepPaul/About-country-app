const input = document.querySelector('input');
const map = document.querySelector('iframe');
const mapOuter = document.querySelector('.mapouter')

input.addEventListener('change', () => {
    let value = input.value;
    map.src = `https://maps.google.com/maps?q=${value}&t=&z=4&ie=UTF8&iwloc=&output=embed`;
    mapOuter.style.display = 'block';
    console.log(value)
})