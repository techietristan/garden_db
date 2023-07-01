import express from 'express'
import db from '../db/conn.mjs'
//import { ObjectId } from 'mongo'

const router = express.Router()

router.get('/seeds', async (req, res) => {
    console.log('/seeds route accessed.')
    let collection = await db.collection('seeds')
    let results = await collection.find({})
        .limit(50)
        .toArray()
    res.send(results).status(200)
})

export default router