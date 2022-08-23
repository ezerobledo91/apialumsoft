const mongoose = require('mongoose')
const PresupuestoSchema = new mongoose.SchemaTypeOptions(
    {
        aberturas: { type: Array, required: true },
        precio: { type: Number, required: true },
        observaciones: { type: String },
        cliente: { type: String, require: true },
        numero: { type: Number, required: true },
        fecha:{ type: String, require: true },
        visible: {type: Boolean, default:true}
    }
)


module.exports = mongoose.model('Presupuesto', PresupuestoSchema)