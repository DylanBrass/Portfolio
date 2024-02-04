require('dotenv').config({ path: '.env' });
const { MongoClient } = require('mongodb');

const connectToDatabase = async () => {
    const connectionString = process.env.ATLAS_URI || "";
    const client = new MongoClient(connectionString);
    let conn;

    try {
        conn = await client.connect();
        console.log("Connected to the database");
    } catch (e) {
        console.error(e);
    }

    return conn.db("Portfolio");
};

module.exports = connectToDatabase;
