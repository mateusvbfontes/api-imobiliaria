import { Sequelize } from "sequelize"
import db from "../db.js"
import postgre_db from "../postgredb.js"

const Cliente = postgre_db.define("cliente",{
    id_cliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_cliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Cliente