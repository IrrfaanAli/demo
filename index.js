import express from 'express';
const app = express();
import cors from 'cors';
const port =  process.env.PORT || 5000;
app.use(cors());


import chefsData, { find } from './data/chefs.json';

app.get('/',(req,res)=>{
   res.send(chefsData);
})

app.get('/chef',(req,res)=>{
   res.send(chefsData);
})

app.get('/chef/:id',(req,res)=>{

    const id = req.params.id;
    
    const selectedChef = find(data => data?.chef_id === parseInt(id) );

    res.send(selectedChef);
})


app.listen(port,()=>{
    console.log("App running");
})