import { Component, OnInit } from '@angular/core';
import { NavController } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private Navctrl:NavController ) { }

  ngOnInit() {
  }

}
