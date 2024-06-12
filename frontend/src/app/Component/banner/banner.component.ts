import { Component, OnInit } from '@angular/core';
import { Social, socialmedia } from '../../model/basicinfo';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {

  socialMedia?:Social[];

  ngOnInit(): void {
    this.socialMedia=socialmedia;
  }

}
