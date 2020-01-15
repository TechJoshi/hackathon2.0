import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: DataService, 
              private router: Router) { }

  message = "";
  ngOnInit() {
  }

  OnAddCallMe(entireData)
  {
    let empObj = entireData.form.value;
    console.log(empObj);

    let observableResult=
        this.service.Insert(empObj);

    observableResult.subscribe((result: any)=>{
      console.log(result);

      if(result.name == "ValidationError")
      {
        this.message = "Data is invalid!";
      }
      else{
        this.message = "Record Added!";
      }
      //In case of error print result
      //console.log(result.name);
    });

  }
  GoBackHome()
  {
    this.router.navigate(['/home']);
  }

}




