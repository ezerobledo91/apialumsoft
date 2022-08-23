const mongoose = require('mongoose')

const AccesorioSchema = new mongoose.Schema(
    {
        codigo: { type: String, required: true },
        nombre: { type: String, required: true },
        descripcion: { type: String},
        categoria: { type: String, required: true },
        unidad: { type: String },
        proveedor: { type: String },
        precio: { type: Number,required:true },
        costo: { type: Number,required:true },
        iva: {type: String},
        porcentaje: {type:Number}


    }
)

module.exports = mongoose.model('Accesorio', AccesorioSchema)