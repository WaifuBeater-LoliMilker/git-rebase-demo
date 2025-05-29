const express = require('express')
const app = express()
app.get('', (req, res) => {
    res.send('THROUGH HEAVEN AND EARTH I ALONE AM THE HONORED ONE')
})
app.listen(5656, 'localhost', () => {
    console.log('http://localhost:5656');
})