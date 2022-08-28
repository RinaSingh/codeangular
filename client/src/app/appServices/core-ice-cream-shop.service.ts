import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreIceCreamShopService {
 url = "https://trapezeicecreamapi.azurewebsites.net/ice-cream-shop/transaction";
 
 constructor(private _http:HttpClient) { }

  sendInfo(objVal:any,userToken:any){
    return this._http.post<any>(this.url,objVal,{headers: new HttpHeaders({'Authorization':userToken})})
  }
}
