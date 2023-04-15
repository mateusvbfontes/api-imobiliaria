import express from 'express'
import clienteController from '../controllers/clienteController.js'

const router = express.Router()

router.get('/', clienteController.getAllClientes)
router.post('/', clienteController.createCliente)
router.delete('/:id_cliente',clienteController.deleteCliente)
router.put('/:id_cliente',clienteController.updateCliente)
router.get('/:id_cliente',clienteController.getClienteById)

export default router