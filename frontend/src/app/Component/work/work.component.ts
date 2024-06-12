import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit {

  isShow=false
  constructor(){}
  ngOnInit(): void {
  }

  show() {
    this.isShow=true;
    // this.isShow=false;
    }
  close(){
    this.isShow=false;

  }
}
