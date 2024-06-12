import { Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  constructor(private element:ElementRef){

  }
  ngOnInit(): void {
    const Container=this.element.nativeElement.querySelector(".container")
    gsap.to(Container,{
      delay:5.2,
      borderBottomLeftRadius:"25%",
      borderBottomRightRadius:"25%",
      top:"-200%",
      duration:4,
    })
  }

}
