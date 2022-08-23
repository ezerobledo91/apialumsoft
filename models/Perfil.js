const mongoose = require('mongoose')

const PerfilSchema = new mongoose.Schema(
    {
        codigo: { type: Number, required: true },
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
        categoria: { type: String, required: true },
        linea: { type: String, required: true },
        alto: { type: Number },
        ancho: { type: Number },
        peso: { type: Number, required: true },
        largo_std: { type: Number, required: true },
        proveedor: { type: String },
        costo_u: { type: Number },
        precio_u: { type: Number },
    }
)

module.exports = mongoose.model('Perfil', PerfilSchema)