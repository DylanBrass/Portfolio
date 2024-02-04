let express = require('express');
let router = express.Router();
let cors = require('cors');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const connectToDatabase = require('../server/db/conn.js')
const { v4: uuidV4 } = require('uuid');


router.use(cors(corsOptions))
/* GET home page. */
router.get('/commendations', async (req, res) => {
    const db = await connectToDatabase();

    let collection = await db.collection("portfolio")

    let results = await collection.find({})
        .project({ _id: 0 })
        .toArray();

    res.send(results).status(200)
})


router.post('/commendations', async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.message) {
        res.status(400).send('missing fields')
        return
    }

    const db = await connectToDatabase();

    let collection = await db.collection("portfolio");



    let newDocument = {
        comment_id: uuidV4(),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    newDocument.show = false;
    newDocument.date = new Date();

    let result = await collection.insertOne(newDocument);
    res.status(201).send(result)
})


router.patch('/commendations/:id', async (req, res) => {
    const db = await connectToDatabase();
    const query = { comment_id: req.params.id };
    const updates = {
        $set: { show: true }
    };

    console.log(query);
    let collection = await db.collection("portfolio");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
})


module.exports = router;

