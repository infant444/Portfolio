import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../../model/message';
import { MessageService } from '../../Services/Message/message.service';
import { ConfettiService } from '../../Services/confetti/confetti.service';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrl: './getintouch.component.css'
})
export class GetintouchComponent implements OnInit {

  message!:FormGroup;
  issubmited=false;
  constructor(private formbuilder:FormBuilder,private messagey:MessageService,private confilitservices:ConfettiService){}
  ngOnInit(): void {
    this.message=this.formbuilder.group({
      name:["",[Validators.required]],
      email:["",[Validators.required,Validators.email]],
      messagex:["",[Validators.required]]
    })
  }
  get Fc(){
    return this.message.controls;
  }

  submit(){
    this.issubmited=true;
    if(this.message.invalid){
      return;
    }
    const c=this.message.value;
    const mess:Message={
      id: '',
      name: c.name,
      email: c.email,
      message: c.messagex
    }
    this.messagey.sendMessage(mess).subscribe((x)=>{
    this.confilitservices.launchConfetti();

    })
  }
}
