const { MongoClient, ObjectId } = require('mongodb')

const getConnectedClient = async () => {
    const connectionString = process.env.MONGO_CONNECTION_STRING
     const client = new MongoClient(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return await client.connect()
}

const getfavoriteVideogamesCollection = async (client) => {
    return await client.db('CRUD-Project').collection('Favorite Videogames')
}

const getfavoriteVideogames = async () => {
    const client = await getConnectedClient()

    try {
        const collection = await getfavoriteVideogamesCollection(client)
        return await collection.find().toArray()
    } finally {
        await client.close()
    }
}

module.exports = {
    getfavoriteVideogames
}

