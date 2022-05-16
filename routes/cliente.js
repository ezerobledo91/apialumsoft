const router = require('express').Router()
const Cliente = require('../models/Cliente')

// Create Cliente
router.post('/', async (req, res) => {
    const newCliente = new Cliente(req.body)
    try {
        const savedCliente = await newCliente.save()
        res.status(200).json(savedCliente)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Cliente
router.put("/:id", async (req, res) => {
    try {
        const updateCliente = await Cliente.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })

        res.status(200).json(updateCliente)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Cliente

router.delete("/:id", async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id)
        res.status(200).json({ id: req.params.id, msg: 'Cliente Borrado' })
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get Proveedor
router.get('/find/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id)
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get  All Proveedor
router.get('/', async (req, res) => {
    try {
        // Get All
        const clientes = await Cliente.find()
        res.status(200).json(clientes)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router