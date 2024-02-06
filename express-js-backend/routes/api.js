let express = require('express');
let router = express.Router();
let cors = require('cors');

let sendEmail = require('../services/EmailService.js')

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

    let results = await collection.find({show: true})
        .project({ _id: 0 })
        .toArray();

    res.send(results).status(200)
})


router.post('/commendations', async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.message) {
        res.status(400).json({ message: 'Missing required fields' })
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

    let url = process.env.FE_URL + '/commendations/confirm/' + newDocument.comment_id

    let context = {
        name: req.body.name,
        commendation: req.body.message,
        url: url
    }


    await sendEmail('dylanbrassard1@gmail.com','dylan.brassard@outlook.com','New Commendations for portfolio!', 'confirmCommendation', context).catch(
        (err) => {
            console.log(err)
            res.status(422).json({message:'error sending email'})

        }
    )

    res.status(201).send(result)
})


router.patch('/commendations/:id', async (req, res) => {

    if(req.body.pwd !== process.env.PASSWORD){
        res.status(401).send('Unauthorized')
        return
    }

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

