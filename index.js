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
const presupuestoRoute = require('./routes/presupuesto')
const aberturaRoute = require('./routes/abertura')
const piezaRoute = require('./routes/pieza')
const perfilRoute = require('./routes/perfil')
const proveedorRoute = require('./routes/proveedor')
const clienteRoute = require('./routes/cliente')
const vidrioRoute = require('./routes/vidrio')
const accesorioRoute = require('./routes/accesorio')




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
app.use('/api/abertura', aberturaRoute)
// Presupuestos
app.use('/api/presupuesto', presupuestoRoute)
// Vidrios
app.use('/api/vidrio', vidrioRoute)
// Accesorios
app.use('/api/accesorio', accesorioRoute)




app.listen(process.env.PORT || 5000, () => {
    console.log("Server Start", process.env.PORT || 5000)
})
