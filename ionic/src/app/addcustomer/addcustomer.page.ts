import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
 Data ={
   "namecus":"",
   "telcus":"",
   "emailcus":""
 };

  constructor(public auth:AuthserviceService) { 

    
  }

  ngOnInit() {
  }

  createCustomer(){

    console.log(this.Data);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.Data));
    dataFrom.append("Function_Name","addcustomer");
    console.log(dataFrom);
    this.auth.customer(dataFrom).then((res)=>{
      console.log("555");
      
    });
    
    
  }
}
