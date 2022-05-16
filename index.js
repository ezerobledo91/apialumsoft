const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()
app.use(express.json())
app.use(cors())
// Conect Mongoose
mongoose.connect(process.env.MONGO_URL).then(() => console.log('DBConection Success')).catch(err => console.log(err))

// Import Routes
const proveedorRoute = require('./routes/proveedor')
const perfilRoute = require('./routes/perfil')
const piezaRoute = require('./routes/pieza')
const grupoRoute = require('./routes/grupo')
const clienteRoute = require('./routes/cliente')



// Router API URL
// Proveedores
app.use('/api/proveedor', proveedorRoute)
// Clientes
app.use('/api/cliente', clienteRoute)
//Perfiles
app.use('/api/perfil', perfilRoute)
//Piezas 
app.use('/api/pieza', piezaRoute)
// Grupos
app.use('/api/grupo', grupoRoute)





app.listen(process.env.PORT || 5000, () => {
    console.log("Server Start", process.env.PORT || 5000)
})
