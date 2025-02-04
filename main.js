const express = require('express')
const path = require('path');
const app = express()
const port = 80

app.get('/countdown', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/countdown.html'));
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})