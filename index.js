const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsData = require('./data/chefs.json');

app.use(cors());



app.listen(port,()=>{
    console.log("App running");
})