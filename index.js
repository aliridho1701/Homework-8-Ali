const express =require('express')
const app = express()
const pool = require('./config')
const router = require('./queries')

app.use(router)

app.listen(3000)