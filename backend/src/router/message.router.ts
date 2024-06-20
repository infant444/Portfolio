import { Router } from 'express';
import asynhandler from 'express-async-handler';
import { Message, MessageModel } from '../model/message.model';

const rout = Router();

rout.post("/enquire",asynhandler(
    async(req,res)=>{
        const {name,email,message}=req.body;

        const x:Message={
            name,
            email,
            message
        }
        const y=await MessageModel.create(x);
        res.send(y);
    }
))


export default rout;