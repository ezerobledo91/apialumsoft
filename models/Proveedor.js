const mongoose = require('mongoose')

const ProveedorSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    categoria: { type: Array, required: true },
    telefono: { type: Array },
    email: { type: Array },
    direccion: { type: String },
    web: { type: String }
})

module.exports = mongoose.model('Proveedor', ProveedorSchema)