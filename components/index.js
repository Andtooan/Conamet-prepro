/*fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
      .then(response => response.json())
      .then(data => {  
         console.log(data)
      }
*/


/*  
const url = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'

fetch (url)
.then(response => response.json() )
.then(data => {
    console.log(data)
})

.catch(error) {
    console.log(error);
}

*/
/*Como buena practica las variables se declaran al principio
del codigo para evitar el hoisting*/
let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let result = document.getElementById('result');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8e70b17d5b1269028a97e1525e060954&q=';

/*GET https://api.datos.gob.mx/v1/condiciones-atmosfericas*/

async function search() {
    try {
        const newurl = URL + searchInput.value;
        const response = await fetch(newurl);
        const info = await response.json();
         console.log(info)
        result.innerHTML = `
         Ciudad de ${info.name} esta ${info.weather[0].description}
            y la temperatura es de:  ${info.main.temp} °C
    `;

    } catch (error) {
        console.log(error);
    }

 
};


searchBtn.addEventListener('click', search);

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        search();
    }
});

