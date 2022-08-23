const mongoose = require('mongoose')
const PiezaSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true, unique: true },
        perfil: { type: mongoose.Schema.Types.ObjectId, ref: 'Perfil' },
        descripcion: { type: String },
        categoria: { type: Array, required: true },
        linea: { type: Array, required: true },
        variable: {
            type: String, required: true,
        },
        constante_m: { type: Number, required: true },
        cortes: { type: Number, required: true },
    }
)


module.exports = mongoose.model('Pieza', PiezaSchema)