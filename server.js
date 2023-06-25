const express = require('express');
const cors = require('cors')
const sendTable = require('./sendDB')
const app = express();

const router = express.Router();
router.use(cors())

router.get('/', (req, res) => {
    sendTable()
    .then((result) => {
        res.send(result)
    })
})

app.use('/', router)

const listener = app.listen(3001,() => {
    console.log('Server started on port ' + listener.address().port)
})
