import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-types',
  templateUrl: './skill-types.component.html',
  styleUrl: './skill-types.component.css'
})
export class SkillTypesComponent implements OnInit {
  imgcount:number[]=[];
  ngOnInit(): void {
    this.imgcount=Array.from({length:24}, (_, i) => i + 1)
  }

}
