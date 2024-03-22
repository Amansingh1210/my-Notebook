const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

// Routes 
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(` app listening on port http://localhost:${port}`)
})