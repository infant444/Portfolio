import {HostListener, Component, ElementRef, OnInit } from '@angular/core';
import { Navinfo } from '../../model/basicinfo';
import { gsap } from 'gsap'
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navinfo = Navinfo;
  icon = "menu";
  iconchange = false;

  constructor(private element: ElementRef,private router:Router) { }
  @HostListener('window:scroll', ['$event'])
  scroll(){
    if (window.scrollY > 82.2) {

    }
     else{
    }

  }
  ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    // gsap.to(Content,{
    //   top:"0%",
    //   opacity:1,
    //   duration:2,
    //   delay:9,
    //   ease:"power1.inOut",
    // })
  }

  menux() {
    if (this.iconchange) {
      this.icon = "menu"
      this.close()
      this.iconchange = false;


    } else {
      this.icon = "close"
      this.open()
      this.iconchange = true;

    }
  }
  open() {
    const Content = this.element.nativeElement.querySelector("#menu")
    const menu = this.element.nativeElement.querySelector("#icon")

    gsap.to(menu, {
      rotate: "180deg"
    })

    gsap.to(Content, {
      width: "320px",
      height: "100%",
      right: 0,
      top: 0,
      duration: 1,
      ease: "power1.inOut",
    })
  }
  close() {
    const Content = this.element.nativeElement.querySelector("#menu")
    const menu = this.element.nativeElement.querySelector("#icon")
    gsap.to(menu, {
      rotate: "-180deg"
    })
    gsap.to(Content, {
      width: "3rem",
      height: "3rem",
      right: "5px",
      top: "6px",
      duration: 1,
      ease: "power1.inOut",
    })
  }


}

