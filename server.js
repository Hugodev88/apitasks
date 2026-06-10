const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({message: "teste"})
})

app.listen(port, () => {
    console.log(`server running in port ${port}`)
})