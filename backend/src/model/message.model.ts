import { Schema,model } from "mongoose";


export interface Message{
    name:string;
    email:string;
    message:string;
  }
  
  export const MessageSchema=new Schema<Message>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
  },
    {
      toJSON:{
          virtuals:true
      },
      toObject:{
          virtuals:true
      },
      timestamps:true
  
  }
  )
  
  export const MessageModel=model<Message>("Message",MessageSchema);