const mongoose = require('mongoose')

const VidrioSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        categoria: { type: String, required: true },
        espesor: { type: Number,required:true },
        proveedor: { type: String },
        costo: { type: Number,required:true },
        precio: { type: Number,required:true },
        iva: {type: String},
        porcentaje: {type:Number}

    }
)

module.exports = mongoose.model('Vidrio', VidrioSchema)