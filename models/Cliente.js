const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    telefono: { type: Array },
    email: { type: Array },
    direccion: { type: String }
})

module.exports = mongoose.model('Cliente', ClienteSchema)