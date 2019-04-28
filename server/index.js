const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require("axios");
require('dotenv').config();



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/test', (req, res, next)=>{

    axios.get('https://api.chucknorris.io/jokes/random')
        .then((results)=>{
            res.send(results.data.value)
        })
        
})

let favorites = [];

app.get('/api/question', (req, res) => {
    axios.get('https://opentdb.com/api.php?amount=1&type=boolean&encode=url3986').then(result => {
        res.status(200).send(result.data)
    })
})

app.put('/api/favorite', (req, res) => {
    favorites.push(req.body);
    res.send(favorites)
})



const port = process.env.PORT || 8060;
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})