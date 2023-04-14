import express from 'express'
import db from './db.js'
import userRoutes from './routes/imovelRoutes.js'
import clienteRoutes from './routes/clienteRoutes.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

db.sync(() => console.log('Database synced'))
app.use('/imoveis', userRoutes)
app.use('/clientes', clienteRoutes)
app.listen(port, () => console.log("Server up and running, port: "+port))