import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
   url = 'https://product-details-b4dbf-default-rtdb.firebaseio.com/rinaproducts.json';
   headers = new HttpHeaders()
    .set('content-type', 'rinaapplication/json')
    .set('Access-Control-Allow-Origin', '*');
    saveDataToDb(productDetails:any[]){
      return this.http.put(this.url,productDetails,{ 'headers': this.headers });
    }
    fetchDataToDb(){
      return this.http.get(this.url);
    }
    fetchTitle(){
      return this.http.get('https://product-details-b4dbf-default-rtdb.firebaseio.com/prodTitle.json');
    }
}
