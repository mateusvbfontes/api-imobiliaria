import Imovel from '../models/imovelModel.js'

async function getAllImoveis(req,res){
    const imoveis = await Imovel.findAll()
    res.json(imoveis)
}

async function createImovel(req,res){
    const imovel = await Imovel.create(req.body)
    res.json(imovel)
}

async function deleteImovel(req,res){
    const imovel = await Imovel.destroy({where: {id_imovel: req.params.id_imovel}})
    res.json(imovel)
}

async function updateImovel(req,res){
    const imovel = await Imovel.update(req.body,
        {
            where:{
                id_imovel: req.params.id_imovel
            }
        }
    )
    res.json(imovel)
}

async function getImovelById(req,res){
    const imovel = await Imovel.findByPk(req.params.id_imovel)
    res.json(imovel)
}

export default {getAllImoveis, createImovel, deleteImovel, updateImovel, getImovelById}