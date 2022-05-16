const mongoose = require('mongoose')

const PerfilSchema = new mongoose.Schema(
    {
        codigo: { type: Number, required: true },
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
        categoria: { type: Array, required: true },
        linea: { type: Array, required: true },
        // medidas: { type: Object },
        alto: { type: Number },
        ancho: { type: Number },
        peso: { type: Number, required: true },
        largo_std: { type: Number, required: true },
        provedor: { type: String },
        // proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor' },
        costo_u: { type: Number },
        precio_u: { type: Number },
    }
)

module.exports = mongoose.model('Perfil', PerfilSchema)