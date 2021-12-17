const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cors = require('cors')
app.use(cors())

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())

//Connects to mongo database
mongoose.connect('mongodb+srv://admin:Password@cluster0.domwa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    })

const Schema = mongoose.Schema

var stratocasterSchema = new Schema({
    Name: String,
    Year: String,
    Colour: String,
    Owner: String,
    Picture: String,
    Description: String
})

var guitarModel = mongoose.model("strats", stratocasterSchema)
//Server side to get data
app.get('/read', (req,res)=>{
    guitarModel.find((err, data)=>{
        res.json(data)
    })

})
//Link to read by ID
app.get('/read/:id', (req,res)=>{
    guitarModel.findById(req.params.id,(err, data)=>{
        res.json(data)
    })
})

//Server side post data to create
app.post('/create', (req,res)=>{
 guitarModel.create({
        Name: req.body.Name,
        Owner: req.body.Owner,
        Year: req.body.Year,
        Colour: req.body.Colour,
        Description: req.body.Description,
        Picture: req.body.Picture
    })
    res.send(req.body.Name + " added")
})

//Server side update by ID
app.put('/read/:id', (req,res)=>{
    guitarModel.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (error, data)=>{
            res.send(data)
        })
})

//Server side delete by ID
app.delete('/read/:id', (req,res)=>{
    guitarModel.findByIdAndDelete(req.params.id, (error, data)=>{
        res.send(data)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})