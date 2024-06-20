import { Router } from 'express';
import multer from 'multer';
import { firebaseconnection } from '../config/firebase.config';
import asynhandler from 'express-async-handler';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { Work, WorkModel } from '../model/work.model';


const rout = Router();
const fire = firebaseconnection();
const storage = getStorage(fire);
const s = multer.memoryStorage();

const upload = multer({
    storage: s,
    limits: { fieldSize: 1024 * 1024 }
});

rout.get("/",asynhandler(
    async(req,res)=>{
        const works=await WorkModel.find();
        const orderwork=works.reverse();
        res.send(orderwork);
    }
))

rout.get("/getonework/:id",asynhandler(
    async(req,res)=>{
        const works=await WorkModel.findById(req.params.id);
        res.send(works);
    }
))
rout.post("/addwork", upload.array("files"), asynhandler(
    async (req, res) => {
        try{
        
        const {title, discription, usedprogram, githublink, demo_link} = req.body;
        // console.log(title);
        const imgs=req.files as Express.Multer.File[];
        let a:any[]=[];
        var l=imgs.length;
        var i=0;
        imgs.map(async (files)=>{
            var y:any={
                type:files.mimetype,
                buffer: files.buffer
            }
            const buildImage = await uploadImage(y, title+"/"+files.originalname);
            // console.log(String(buildImage))
            // a.push(buildImage); 
            const storageref=ref(storage,String(buildImage))
            getDownloadURL(storageref).then(async url=>{

               
                //
                i=i+1;
                const urlz=url
                var xy=urlz;
               a.push(xy);
        if(l==i){
            // console.log(a)
            const x:Work={
                title: title,
                discription: discription,
                images: a,
                used_program: usedprogram.split(","),
                github_id: githublink,
                demo_link: demo_link
            }
                const work=await WorkModel.create(x);
                res.send(work)
          
        }
            })


        })      
        }
        catch(e){
            res.send(e);
        }
    }
))


async function uploadImage(file: { type: any; buffer: any; }, name: string) {
    
    const fileName = "Work/"+name;
    const storageRef = ref(storage, fileName)

    // console.log(storageRef);
    const metadata = {
        contentType: file.type,
    }
    await uploadBytesResumable(storageRef, file.buffer, metadata);


   return storageRef
}
export default rout;