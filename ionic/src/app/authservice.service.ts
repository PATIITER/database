import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


let apiUrl = "http://127.0.0.1/servicephp/";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(public http: HttpClient) { }




  customer(_obj) {
    console.log("addcustomer =>", _obj);
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'customer.php', _obj).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });

    })
  }
}


