

// const Task = require(`../models/task`);
const express = require('express');
const app=express();
const task=require(`./routes/task`);
const connectDB=require(`./db/connect`);
require(`dotenv`).config();

//middleware

app.use(express.json());


//routes
app.get('/hello',(req,res)=>{
res.send(`task manager app`);
});

app.use(`/api/v1/task`,task);


const port=3000;

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`listening on port ${port}`));

    }catch(error){
        console.log(error);
    }
};

start();