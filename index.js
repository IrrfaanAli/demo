const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsData = require('./data/chefs.json');

app.use(cors());

app.get('/',(req,res)=>{
   res.send(chefsData);
})

app.get('/chef',(req,res)=>{
   res.send(chefsData);
})

app.get('/chef/:id',(req,res)=>{

    const id = req.params.id;
    
    const selectedChef = chefsData.find(data => data.chef_id === parseInt(id));

    res.send(selectedChef);
})


app.listen(port,()=>{
    console.log("App running");
})