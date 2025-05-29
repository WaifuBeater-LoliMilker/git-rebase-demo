const express = require('express')
const app = express()
app.get('', (req, res) => {
    res.send('Hello worlds')
})
app.listen(5656, 'localhost', () => {
    console.log('http://localhost:5656');
})