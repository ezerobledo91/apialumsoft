const mongoose = require('mongoose')
const AberturaSchema = new mongoose.SchemaTypeOptions(
    {
        nombre: { type: String, required: true, unique: true },
        piezas: { type: Array, require: true },
        categoria: { type: String, required: true },
        linea: { type: String, required: true },
        accesorios: { type: Array },
        // revestimiento: { type: mongoose.Schema.Types.ObjectId, ref: 'Revestimiento', },
        // adicionales: { type: Object }
    }
)


module.exports = mongoose.model('Abertura', AberturaSchema)
