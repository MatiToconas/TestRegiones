class Regiones {
    constructor() {
        this._regiones = []
    }
    
    addRegion(pais){
        if(! this._regiones.includes( this._regiones.find(r => r.nombre === pais.region))
            && pais.region !=''
        ){
            this._regiones.push({"nombre": pais.region})
        }
        return this
    }

    getRegiones() { return this._regiones}
}

module.exports = new Regiones()