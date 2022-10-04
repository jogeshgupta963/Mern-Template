const express=require('express');
const app=express();

app.get('/',async(req,res)=>{
    res.send('Basic Server');
})

app.listen(3001,()=>{console.log('Server is running on 3001...')})