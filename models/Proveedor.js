const mongoose = require('mongoose')

const ProveedorSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    telefono: { type: Number },
    email: { type: String },
    direccion: { type: String },
    web: { type: String }
})

module.exports = mongoose.model('Proveedor', ProveedorSchema)