const router = require('express').Router()
const Grupo = require('../models/Grupo')

// Create GRUPO con propiedades calculadas antes de guardar
router.post('/', async (req, res) => {
    const newGrupo = new Grupo(req.body)
    try {
        const savedGrupo = await newGrupo.save()
        res.status(200).json(savedGrupo)
    } catch (error) {
        res.status(500).json(error)
    }
})


// async function calculatePeso(newGrupo) {
//     const { dimension, piezas } = newGrupo
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


// Update GRUPO
router.put("/:id", async (req, res) => {
    try {
        const updateGrupo = await Grupo.findByIdAndUpdate(req.params.id, {
            $set: req.body

        }, { new: true })

        res.status(200).json(updateGrupo)
    } catch (err) {
        res.status(500).json(err)
    }
})

// // Delete Grupo

router.delete("/:id", async (req, res) => {
    try {
        await Grupo.findByIdAndDelete(req.params.id)
        res.status(200).json("Grupo Borrado...")
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get Grupos
router.get('/find/:id', async (req, res) => {
    try {
        const grupo = await Grupo.findById(req.params.id)
        res.status(200).json(grupo)
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
        let grupos
        if (qCategory) { //By Category
            grupos = await Grupo.find({
                categoria: {
                    $in: [qCategory]
                }
            })
        } else { // Get All
            grupos = await Grupo.find().populate({ path: 'piezas', select: 'nombre' })

        }

        res.status(200).json(grupos)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router