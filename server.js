const express = require('express');
const cors = require('cors')
const sendTable = require('./sendDB')
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    sendTable()
    .then((result) => {
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('Server started')
})