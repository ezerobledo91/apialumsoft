const router = require('express').Router()
const Accesorio = require('../models/Accesorio')

// Create Accesorio
router.post('/', async (req, res) => {
    const newAccesorio = new Accesorio(req.body)
    try {
        const savedAccesorio = await newAccesorio.save()
        res.status(200).json(savedAccesorio)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Accesorio
router.put("/:id", async (req, res) => {
    try {
        const updateAccesorio = await Accesorio.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })

        res.status(200).json(updateAccesorio)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Accesorio

router.delete("/:id", async (req, res) => {
    try {
        await Accesorio.findByIdAndDelete(req.params.id)
        res.status(200).json("Accesorio Borrado...")
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get Accesorio
router.get('/find/:id', async (req, res) => {
    try {
        const Accesorio = await Accesorio.findById(req.params.id)
        res.status(200).json(Accesorio)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get  All Accesorio
router.get('/', async (req, res) => {
    const qCategory = req.query.categoria
    try {
        let Accesorios
        if (qCategory) { //By Category
            Accesoris = await Accesorio.find({
                categoria: {
                    $in: [qCategory]
                }
            })
        } else { // Get All
            Accesorios = await Accesorio.find()
        }

        res.status(200).json(Accesorios)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router