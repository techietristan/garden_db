import { MongoClient } from 'mongodb'

const mongoHostName = process.env.MONGO_HOST || 'localhost'
const mongoPort = process.env.MONGO_PORT || 27018
const connectionString = `mongodb://${mongoHostName}:${mongoPort}`

const client = new MongoClient(connectionString)

let conn
try {
    conn = await client.connect()
} catch(error) {
    console.error(error)
}

let db = conn.db('seeds')

export default db