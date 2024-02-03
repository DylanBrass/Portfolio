var express = require('express');
var router = express.Router();
var cors = require('cors')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.use(cors(corsOptions))
/* GET home page. */
router.get('/commendations', (req, res) => {
    res.send(['hello world', 'goodbye world'])
})

module.exports = router;

