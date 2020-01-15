import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { 
    console.log("About Component Created");
  }

  ngOnInit() {
  }

  ngOnDestroy()
  {
    console.log("About component destroyed..");
  }

}
