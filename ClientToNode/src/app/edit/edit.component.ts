import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']})
export class EditComponent implements OnInit {

  emp= {"No": "123", "Name": "", "Age":""};

  constructor(private route: ActivatedRoute, 
              private service: DataService,
              private router: Router) 
   {
    console.log("Edit Component Created...");
   }

  ngOnInit() 
  {
     this.route.paramMap.subscribe((result)=>{
     let No= result.get("No");
     console.log(No);

     let observableResult = 
             this.service.SelectByNo(No);

      observableResult.subscribe((recordsFound)=>{
        console.log(recordsFound[0]);
        this.emp =  recordsFound[0];
      });
      
   }); 
  }

  OnUpdateCallMe(entireFormContent)
  {
    console.log("--------------------------------------");
    console.log(this.emp);
    console.log("--------------------------------------");
    console.log(entireFormContent);
    
    let observableResultOfUpdate = 
       this.service.Update(this.emp);

    observableResultOfUpdate.subscribe((resultOfUpdate)=>{

      console.log(resultOfUpdate);
      //Check if no error

      this.router.navigate(['/home']);
    });
  }

  CancelUpdate()
  {
    this.router.navigate(['/home']);
  }
}