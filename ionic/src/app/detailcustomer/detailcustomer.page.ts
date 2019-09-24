import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailcustomer',
  templateUrl: './detailcustomer.page.html',
  styleUrls: ['./detailcustomer.page.scss'],
})
export class DetailcustomerPage implements OnInit {

  Datacus2 = {
    "name_customer" :"",
  };
  Datacustomer : any = {} ;


  constructor(public auth:AuthserviceService,private router:Router,public activate:ActivatedRoute) { 
    this.Datacus2.name_customer = this.activate.snapshot.paramMap.get('_id');
    console.log(this.Datacus2.name_customer);
    let dataForm = new FormData();
    dataForm.append("_Data",JSON.stringify(this.Datacus2));
    dataForm.append("Function_Name","getCustomerById");
    this.auth.customer(dataForm).then((result)=>{
      this.Datacustomer = result[0];
      console.log(this.Datacustomer);
      
    });
    
  }

  ngOnInit() {
  }

  goBack(){
this.router.navigate(['/customer'])

  }
}
