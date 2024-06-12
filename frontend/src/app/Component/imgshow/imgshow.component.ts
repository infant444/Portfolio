import { Component, Input, OnInit } from '@angular/core';
import { WorkComponent } from '../work/work.component';

@Component({
  selector: 'app-imgshow',
  templateUrl: './imgshow.component.html',
  styleUrl: './imgshow.component.css'
})
export class ImgshowComponent implements OnInit{
  @Input()
  show=false

  constructor(private xyz:WorkComponent){}
  ngOnInit(): void {
  }
  cx(){
    this.xyz.close()
  }
}
