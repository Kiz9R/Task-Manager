

// const Task = require(`../models/task`);
const express = require('express');
const app=express();
const task=require(`./routes/task`);
const connectDB=require(`./db/connect`);
require(`dotenv`).config();

//middleware

app.use(express.static('./public'));
app.use(express.json());


//routes

app.use(`/api/v1/tasks`,task);


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