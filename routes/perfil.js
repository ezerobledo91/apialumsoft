const router = require('express').Router()
const Perfil = require('../models/Perfil')

// Create Perfil
router.post('/', async (req, res) => {
    const newPerfil = new Perfil(req.body)
    try {
        const savedPerfil = await newPerfil.save()
        res.status(200).json(savedPerfil)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Perfil
router.put("/:id", async (req, res) => {
    try {
        const updatePerfil = await Perfil.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })

        res.status(200).json(updatePerfil)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Perfil

router.delete("/:id", async (req, res) => {
    try {
        await Perfil.findByIdAndDelete(req.params.id)
        res.status(200).json("Perfil Borrado...")
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get Perfil
router.get('/find/:id', async (req, res) => {
    try {
        const perfil = await Perfil.findById(req.params.id)
        res.status(200).json(perfil)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get  All Perfil
router.get('/', async (req, res) => {
    const qCategory = req.query.categoria
    try {
        let perfiles
        if (qCategory) { //By Category
            perfiles = await Perfil.find({
                categoria: {
                    $in: [qCategory]
                }
            })
        } else { // Get All
            perfiles = await Perfil.find()
        }

        res.status(200).json(perfiles)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router