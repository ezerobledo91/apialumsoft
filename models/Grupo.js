const mongoose = require('mongoose')
const GrupoSchema = new mongoose.SchemaTypeOptions(
    {
        nombre: { type: String, required: true, unique: true },
        piezas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pieza', require: true }],
        categoria: { type: Array, required: true },
        modelo: { type: Array, required: true },
        accesorios: { type: mongoose.Schema.Types.ObjectId, ref: 'Accesorios', },
        revestimiento: { type: mongoose.Schema.Types.ObjectId, ref: 'Revestimiento', },
        adicionales: { type: Object }
    }
)


module.exports = mongoose.model('Grupo', GrupoSchema)
