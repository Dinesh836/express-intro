const http = require('http');

const express =require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('in the  middle');
    next();
})
app.use((req,res,next)=>{
    console.log('in the another middle');
    res.send('<h2>hello from express !</h2>')
})

app.listen(4000);
