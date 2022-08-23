const router = require('express').Router()
const Abertura = require('../models/Abertura')

// Create Abertura con propiedades calculadas antes de guardar
router.post('/', async (req, res) => {
    const newAbertura = new Abertura(req.body)
    try {
        const savedAbertura = await newAbertura.save()
        res.status(200).json(savedAbertura)
    } catch (error) {
        res.status(500).json(error)
    }
})


// async function calculatePeso(newAbertura) {
//     const { dimension, piezas } = newAbertura
//     let peso_total = 0

//     for (const pieza_id of piezas) {
//         const _Pieza = await Pieza.findById(pieza_id)
//         const { perfil, variable, constante_m, cortes } = _Pieza
//         const _Perfil = await Perfil.findById(perfil)
//         const { peso } = _Perfil
//         const peso_pieza = peso * constante_m * cortes * dimension[variable]
//         peso_total = peso_pieza + peso_total
//     }

//     return peso_total
// }


// Update Abertura
router.put("/:id", async (req, res) => {
    try {
        const updateAbertura = await Abertura.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })

        res.status(200).json(updateAbertura)
    } catch (err) {
        res.status(500).json(err)
    }
})

// // Delete Abertura

router.delete("/:id", async (req, res) => {
    try {
        await Abertura.findByIdAndDelete(req.params.id)
        res.status(200).json("Abertura Borrado...")
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get Aberturas
router.get('/find/:id', async (req, res) => {
    try {
        const abertura = await Abertura.findById(req.params.id)
        res.status(200).json(abertura)
    } catch (error) {
        res.status(500).json(error)
    }
})

// // Get  All Pieza Por modelo o Categoria
// router.get('/', async (req, res) => {
//     const qCategory = req.query.categoria
//     const qModelo = req.query.modelo
//     try {
//         let piezas
//         if (qModelo) {
//             piezas = await Pieza.find({
//                 modelo: {
//                     $in: [qModelo]
//                 }
//             })
//         }
//         else if (qCategory) { //By Category
//             piezas = await Pieza.find({
//                 categoria: {
//                     $in: [qCategory]
//                 }
//             })
//         } else { // Get All
//             piezas = await Pieza.find()
//         }

//         res.status(200).json(piezas)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


router.get('/', async (req, res) => {
    const qCategory = req.query.categoria
    try {
        let aberturas
        if (qCategory) { //By Category
            aberturas = await Abertura.find({
                categoria: {
                    $in: [qCategory]
                }
            })
        } else { // Get All
            aberturas = await Abertura.find()
        }

        res.status(200).json(aberturas)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router