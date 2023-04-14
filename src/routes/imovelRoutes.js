import express from 'express'
import imovelController from '../controllers/imovelController.js'

const router = express.Router()

router.get('/', imovelController.getAllImoveis)
router.post('/', imovelController.createImovel)
router.delete('/:id',imovelController.deleteImovel)
router.put('/:id',imovelController.updateImovel)
router.get('/:id',imovelController.getImovelById)

export default router