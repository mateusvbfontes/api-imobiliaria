import express from 'express'
import db from './db.js'
import userRoutes from './routes/imovelRoutes.js'
import clienteRoutes from './routes/clienteRoutes.js'

const app = express()
const port = 3000

app.use(express.json())

db.sync(() => console.log('Database synced'))
app.use('/imoveis', userRoutes)
app.use('/clientes', clienteRoutes)
app.listen(port, () => console.log("Server up and running, port: "+port))