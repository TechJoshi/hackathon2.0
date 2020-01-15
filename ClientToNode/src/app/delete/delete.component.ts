import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private service: DataService,
              private router:Router) 
  {

  }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
      console.log(result);
      let No =  result.get("No");
      console.log("U r deleting " + No);
      
      let observableResult =  this.service.Delete(No);
      observableResult.subscribe((deleteResult)=>{
        console.log(deleteResult);
        
        //In case of error display err

        this.router.navigate(['/home']);
      });



    });
  }

}




