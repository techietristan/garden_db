import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import seeds from './routes/seeds.mjs'
import './loadEnvironment.mjs'

const PORT = process.env.EXPRESS_PORT || 5050
const app = express()
app.use(cors())
app.use(express.json())

app.use('/', seeds)

app.use((error, _req, res, next) => {
    res.status(500).send("An unexpected error has occurred.")
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

