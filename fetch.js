let searchBtn = document.getElementById('searchBtn');
const newurl = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
const searchInput = document.getElementById('search')



async function search() {
    try {
        
        const response = await fetch(newurl);
        const { results, pagination } = await response.json();

        const searchValue = searchInput.value

        const data = results.find(result => result.name === searchValue) 
       


       

        if(!data) {
            return result.innerHTML = `
             Parece que hubo un error, escriba correctamente su peticion 💙
            `
        
        }
//MDN arrays methods
// js trusthy and falsy values
        return result.innerHTML = `
         Ciudad de ${data.name} esta ${data.skydescriptionlong}
            y la temperatura es de:${data.tempc} °C 
          
    `; 
 


    } catch (error) {
        console.log(error);
    }
 
};

searchBtn.addEventListener('click', search);

searchBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        search();
    }
});
