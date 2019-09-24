import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

    listcustomer:any;
    customer:any =[];
  constructor(private router:Router,public auth:AuthserviceService) { }

  ngOnInit() {
    this.getdataall();
  }

addcustomer(){

  this.router.navigate(['./addcustomer']);
}
getdataall(){
  let datafrom = new FormData();
  datafrom.append("_Data",JSON.stringify(""));
  datafrom.append("Function_Name","getCustomerAll");
  this.auth.customer(datafrom).then((result)=>{
    this.listcustomer = result;
    console.log(result);
    console.log(this.listcustomer);
  });

}
goDetail(id){
    this.router.navigate(['/detailcustomer',{_id:id}])
}
goEditcustomer(id){
  this.router.navigate(['/edit-customer',{_id:id}])
}

}
