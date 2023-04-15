import express from 'express'
import imovelController from '../controllers/imovelController.js'

const router = express.Router()

router.get('/', imovelController.getAllImoveis)
router.post('/', imovelController.createImovel)
router.delete('/:id_imovel',imovelController.deleteImovel)
router.put('/:id_imovel',imovelController.updateImovel)
router.get('/:id_imovel',imovelController.getImovelById)

export default router