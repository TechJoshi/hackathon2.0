import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  emps: any;
  constructor(private service: DataService, private router:Router) 
  {
    console.log("Home Component Created");
  }
  
  ngOnInit() {
      let observableResult=  this.service.Select();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.emps = result;
    });
  }

  GoToRegister()
  {
    this.router.navigate(['/register']);
  }
  
  ngOnDestroy()
  {
    console.log("Home component destroyed..");
  }

}









