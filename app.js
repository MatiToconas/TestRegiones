
const regiones = require('./regiones')
const axios = require('axios');

 async function getPaises() {
   
    const  paises = await axios.get(`https://restcountries.eu/rest/v2/all`)
    
    const r = paises.data.reduce( (regionInstance, pais) => regiones.addRegion(pais) ,{}  )

    console.log(r.getRegiones())
 }

   getPaises()