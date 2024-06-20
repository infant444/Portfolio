import { Schema,model } from "mongoose";

export interface Work{
    title:string;
    discription:string;
    images:string[];
    used_program:string[];
    github_id:string;
    demo_link:string;
}

export const WorkSchema=new Schema<Work>({
  title:{type:String,required:true},
  discription:{type:String,required:true},
  images:{type:[String],required:true},
  used_program:{type:[String],required:true},
  github_id:{type:String,required:true},
  demo_link:{type:String,default:""}
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

export const WorkModel=model<Work>("WorK",WorkSchema);
