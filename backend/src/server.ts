import dot from 'dotenv';
dot.config()
import express from 'express';
import cors from 'cors';

import { dbconnect } from './config/mongodb.config';
import { firebaseconnection } from './config/firebase.config';
import workrouter from './router/work.router';
import messagerouter from './router/message.router'; 
import path from 'path';
dbconnect()
firebaseconnection()



const app=express();

app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))


app.use("/api/work",workrouter);
app.use("/api/message",messagerouter);


app.use(express.static('public'))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','browser','index.html'))
})

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT)
})