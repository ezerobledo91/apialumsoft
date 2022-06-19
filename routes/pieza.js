const router = require('express').Router()
const Pieza = require('../models/Pieza')

// Create Pieza con propiedades calculadas antes de guardar
router.post('/', async (req, res) => {
    const newPieza = new Pieza(req.body)
    try {
        const savedPieza = await newPieza.save()
        res.status(200).json(savedPieza)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Pieza por medida
router.put("/:id", async (req, res) => {
    try {
        const updatePieza = await Pieza.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })

        res.status(200).json(updatePieza)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Pieza

router.delete("/:id", async (req, res) => {
    try {
        await Pieza.findByIdAndDelete(req.params.id)
        res.status(200).json("Pieza Borrado...")
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get Piezas
router.get('/find/:id', async (req, res) => {
    try {
        const pieza = await Pieza.findById(req.params.id)
        res.status(200).json(pieza)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get  All Pieza Por modelo o Categoria
router.get('/', async (req, res) => {
    const qCategory = req.query.categoria
    const qModelo = req.query.modelo
    try {
        let piezas
        if (qModelo) {
            piezas = await Pieza.find({
                modelo: {
                    $in: [qModelo]
                }
            })
        }
        else if (qCategory) { //By Category
            piezas = await Pieza.find({
                categoria: {
                    $in: [qCategory]
                }
            })
        } else { // Get All
            piezas = await Pieza.find().populate('perfil')
        }

        res.status(200).json(piezas)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router