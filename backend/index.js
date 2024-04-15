const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

// Routes 
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes',require('./routes/note'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.listen(port, () => {
    console.log(` iNotebook Backend listening on port http://localhost:${port}`)
})