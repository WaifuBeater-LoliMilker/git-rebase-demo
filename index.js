const express = require('express')
const app = express()
app.get('', (req, res) => {
    res.send('DOMAIN EXPANSION')
})
app.listen(5656, 'localhost', () => {
    console.log('http://localhost:5656');
})