const mongoose = require('mongoose')

const VidrioSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        categoria: { type: Array, required: true },
        espesor: { type: Number,required:true },
        proveedor: { type: String },
        precio: { type: Number,required:true },
    }
)

module.exports = mongoose.model('Vidrio', VidrioSchema)