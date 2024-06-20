import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { WorkService } from '../../Services/Work/work.service';
import { Work } from '../../model/work';

@Component({
  selector: 'app-imgshow',
  templateUrl: './imgshow.component.html',
  styleUrl: './imgshow.component.css'
})
export class ImgshowComponent implements OnChanges{
  @Input()
  show=false

  @Input()
  id=""

  workimg:any;
  currentImg!:string;
  i=0;
  l!:number;
  constructor(private xyz:WorkComponent,private workservices:WorkService){}



  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.id)
    if(this.id){
      this.workservices.getOneWork(this.id).subscribe((work)=>{
       this.workimg=work.images;
       console.log(this.workimg);
       this.currentImg=this.workimg[this.i];
       this.l=this.workimg.length;

        })

    }
  }



  nm(){
    console.log(this.i)
    if(this.i<this.l-1){
    this.i++;
      this.currentImg=this.workimg[this.i];
    }
  }
  pm(){
    if(this.i>0){
    this.i--;
      this.currentImg=this.workimg[this.i];
    }
  }
  cx(){
    this.xyz.close()
  }
}
