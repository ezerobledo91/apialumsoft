const router = require('express').Router()
const Proveedor = require('../models/Proveedor')

// Create Proveedor
router.post('/', async (req, res) => {
    const newProveedor = new Proveedor(req.body)
    try {
        const savedProveedor = await newProveedor.save()
        res.status(200).json(savedProveedor)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Proveedor
router.put("/:id", async (req, res) => {
    try {
        console.log(req.body)
        const updateProveedor = await Proveedor.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })
        res.status(200).json(updateProveedor)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Proveedor

router.delete("/:id", async (req, res) => {
    try {
        await Proveedor.findByIdAndDelete(req.params.id)
        res.status(200).json({id:req.params.id, msg:'Proveedor Borrado'})
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get Proveedor
router.get('/find/:id', async (req, res) => {
    try {
        const proveedor = await Proveedor.findById(req.params.id)
        res.status(200).json(proveedor)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get  All Proveedor
router.get('/', async (req, res) => {
    const qCategory = req.query.categoria
    try {
        let proveedores
        if (qCategory) { //By Category
            proveedores = await Proveedor.find({
                categoria: {
                    $in: [qCategory]
                }
            })
        } else { // Get All
            proveedores = await Proveedor.find()
        }

        res.status(200).json(proveedores)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router