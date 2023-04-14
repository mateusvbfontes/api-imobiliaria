import express from 'express'
import clienteController from '../controllers/clienteController.js'

const router = express.Router()

router.get('/', clienteController.getAllClientes)
router.post('/', clienteController.createCliente)
router.delete('/:id',clienteController.deleteCliente)
router.put('/:id',clienteController.updateCliente)
router.get('/:id',clienteController.getClienteById)

export default router