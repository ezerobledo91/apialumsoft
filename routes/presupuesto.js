const router = require('express').Router()
const Presupuesto = require('../models/Presupuestos')

// Create Presupuesto
router.post('/', async (req, res) => {
    const newPresupuesto = new Presupuesto(req.body)
    try {
        const savedPresupuesto = await newPresupuesto.save()
        res.status(200).json(savedPresupuesto)
    } catch (error) {
        res.status(500).json(error)
    }
})


// Get PRESUPUESTOS
router.get('/', async (req, res) => {
    try {
        const presupuestos = await Presupuesto.find()
        res.status(200).json(presupuestos)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Presupuesto
router.put("/:id", async (req, res) => {
    try {
        const updatePresupuesto = await Presupuesto.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })

        res.status(200).json(updatePresupuesto)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Presupuesto
router.delete("/:id", async (req, res) => {
    try {
        await Presupuesto.findByIdAndUpdate(req.params.id, {visible: false})
        res.status(200).json("Presupuesto Borrado...")
    } catch (err) {
        res.status(500).json(err)
    }
})





// // // Get  All Pieza Por modelo o Categoria
// // router.get('/', async (req, res) => {
// //     const qCategory = req.query.categoria
// //     const qModelo = req.query.modelo
// //     try {
// //         let piezas
// //         if (qModelo) {
// //             piezas = await Pieza.find({
// //                 modelo: {
// //                     $in: [qModelo]
// //                 }
// //             })
// //         }
// //         else if (qCategory) { //By Category
// //             piezas = await Pieza.find({
// //                 categoria: {
// //                     $in: [qCategory]
// //                 }
// //             })
// //         } else { // Get All
// //             piezas = await Pieza.find()
// //         }

// //         res.status(200).json(piezas)
// //     } catch (err) {
// //         res.status(500).json(err)
// //     }
// // })


// router.get('/', async (req, res) => {
//     const qCategory = req.query.categoria
//     try {
//         let grupos
//         if (qCategory) { //By Category
//             grupos = await Grupo.find({
//                 categoria: {
//                     $in: [qCategory]
//                 }
//             })
//         } else { // Get All
//             grupos = await Grupo.find().populate('piezas')

//         }

//         res.status(200).json(grupos)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


module.exports = router