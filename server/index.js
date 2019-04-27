const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require("axios");
require('dotenv').config();



const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/api/test', (req,res,next) => {
    debugger
    res.send("This worked!")
})



const port = process.env.PORT || 8060;
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})