import { Component, OnInit } from '@angular/core';
import { ConfettiService } from '../../Services/confetti/confetti.service';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit{

  copyx="Copy Email";
  constructor(private confilitservices:ConfettiService,private clipboard:Clipboard){}
  ngOnInit(): void {

  }

  show(){
    this.clipboard.copy("infant0467@gmail.com")
    this.confilitservices.launchConfetti();
    this.copyx="Mail Copied🎉"
  }

}
