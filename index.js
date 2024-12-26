const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const { CORS_ORIGIN } = require('./config')
console.log(require('./config'))
console.log(CORS_ORIGIN)

const ID = uuidv4()
const PORT = 3333

const app = express()
app.use(express.json())

app.use(
    cors({
        origin:["http://44.199.225.45:3000"]
    })
    // res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN)
    // res.setHeader('Access-Control-Allow-Methods', 'GET')
    // res.setHeader('Access-Control-Allow-Headers', '*')
    // next();
)
app.get(/.*/, (req, res) => {
    console.log(`${new Date().toISOString()} GET`)
    res.json({id: ID})
})

app.listen(PORT, () => {
    console.log(`Backend started on ${PORT}. ctrl+c to exit`)
})

