const router = require('express').Router()
const Vidrio = require('../models/Vidrio')

// Create Vidrio
router.post('/', async (req, res) => {
    const newVidrio = new Vidrio(req.body)
    try {
        const savedVidrio = await newVidrio.save()
        res.status(200).json(savedVidrio)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Vidrio
router.put("/:id", async (req, res) => {
    try {
        const updateVidrio = await Vidrio.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })

        res.status(200).json(updateVidrio)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Vidrio

router.delete("/:id", async (req, res) => {
    try {
        await Vidrio.findByIdAndDelete(req.params.id)
        res.status(200).json("Vidrio Borrado...")
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get Vidrio
router.get('/find/:id', async (req, res) => {
    try {
        const Vidrio = await Vidrio.findById(req.params.id)
        res.status(200).json(Vidrio)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get  All Vidrio
router.get('/', async (req, res) => {
    const qCategory = req.query.categoria
    try {
        let Vidrios
        if (qCategory) { //By Category
            Vidrios = await Vidrio.find({
                categoria: {
                    $in: [qCategory]
                }
            })
        } else { // Get All
            Vidrios = await Vidrio.find()
        }

        res.status(200).json(Vidrios)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router