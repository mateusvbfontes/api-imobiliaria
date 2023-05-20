import { Sequelize } from "sequelize"

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,        
    {
        dialect: "postgres",
        database : ""

    }
)

export default postgre_db