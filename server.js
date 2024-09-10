
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.options('*',cors())


app.get('/',(req,res) => {
    res.send(`hi welcome to home route`)
})

app.get('/add',(req,res) => {
    console.log(req.query)
    res.send("addition:"+(+req.query.num1+ + req.query.num2))
}) 

app.post('/add',(req,res) => {
    console.log(req.body)
   res.json({add: +(+req.body.num1+ +req.body.num2)})
})


const port = 3700

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})