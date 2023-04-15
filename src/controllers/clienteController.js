import Cliente from '../models/clienteModel.js'

async function getAllClientes(req,res){
    const clientes = await Cliente.findAll()
    res.json(users)
}

async function createCliente(req,res){
    const cliente = await Cliente.create(req.body)
    res.json(cliente)
}

async function deleteCliente(req,res){
    const cliente = await Cliente.destroy({where: {id_cliente: req.params.id_cliente}})
    res.json(cliente)
}

async function updateCliente(req,res){
    const cliente = await Cliente.update(req.body,
        {
            where:{
                id: req.params.id_cliente
            }
        }
    )
    res.json(cliente)
}

async function getClienteById(req,res){
    const cliente = await Cliente.findByPk(req.params.id_cliente)
    res.json(cliente)
}

export default {getAllClientes, createCliente, deleteCliente, updateCliente, getClienteById}