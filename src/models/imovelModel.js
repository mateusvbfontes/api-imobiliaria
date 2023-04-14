import { Sequelize } from "sequelize"
import db from "../db.js"

const Imovel = db.define("imovel",{
    id_imovel: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    venda: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    aluguel: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    num_quartos: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    area_m2: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

export default Imovel