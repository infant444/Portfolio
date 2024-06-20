import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkService } from '../../../Services/Work/work.service';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrl: './add-work.component.css'
})
export class AddWorkComponent implements OnInit {
  add_work!:FormGroup;
  issubmitted=false;
  selectedFiles:File[]=[]
  constructor(private formbuilder:FormBuilder, private Workservices:WorkService){}
  ngOnInit(): void {
    this.add_work=this.formbuilder.group({
      title:["",Validators.required],
      discription:["",Validators.required],
      images:["",Validators.required],
      usedprogram:["",Validators.required],
      githubId:["",Validators.required],
      demo_link:[""],

    })
  }
  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
    console.log(this.selectedFiles)
  }
  get Fc(){
    return this.add_work.controls;
  }
  submit(){
    this.issubmitted=true;
    if(this.add_work.invalid){
      return;
    }
    const formData=new FormData();

    this.selectedFiles.map((file,index)=>{
      formData.append("files",file,file.name)
  });
  const fv=this.add_work.value;
  formData.append("title",fv.title);
  formData.append("discription",fv.discription);
  // var program=fv.usedprogram;
  // program=Array.from(program.split(","))
  formData.append("usedprogram",fv.usedprogram);
  formData.append("githublink",fv.githubId);
  formData.append("demo_link",fv.demo_link);

  this.Workservices.AddWork(formData).subscribe((x)=>{
    console.log(x)
  })
  }
}
