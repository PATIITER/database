import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.page.html',
  styleUrls: ['./edit-customer.page.scss'],
})
export class EditCustomerPage implements OnInit {
  datacus : any = {};
  aa:any;
  Datacustomer ={
    "name_customer":"",
    "tel":"",
    "email":"",
  };
  Datacus2 = {
    "name_customer":"",
  };

  constructor(public auth:AuthserviceService,private router:Router,public activate:ActivatedRoute) {
    this.Datacus2.name_customer = this.activate.snapshot.paramMap.get('_id');
    console.log(this.Datacus2.name_customer);
    this.getcustomerById()

   }

  ngOnInit() {
  }
  editCus(){
    let dataFrom = new FormData();
    dataFrom.append("_Data",JSON.stringify(this.Datacustomer));
    dataFrom.append("Function_Name","updateCustomer");
    this.auth.customer(dataFrom).then((it)=>{
      console.log(it);
      
    });
    this.router.navigate(['/customer']);
  }

  getcustomerById(){

    let dataFrom = new FormData();
    dataFrom.append("_Data",JSON.stringify(this.Datacus2));
    dataFrom.append("Function_Name","getCustomerById");
    this.auth.customer(dataFrom).then((result)=>{
      this.Datacustomer = result[0];
      console.log(this.Datacustomer);
  });
}
}
