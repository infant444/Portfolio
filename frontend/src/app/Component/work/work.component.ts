import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../Services/Work/work.service';
import { Work } from '../../model/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit {

  isShow=false;
  id="";
  work?:Work[];
  constructor(private workservices:WorkService){}
  ngOnInit(): void {
    this.workservices.getWork().subscribe((work)=>{
      this.work=work;
    })
  }

  show(x:any) {
    this.isShow=true;
    this.id=x;
    // this.isShow=false;
    }
  close(){
    this.isShow=false;
    this.id="";

  }
}
