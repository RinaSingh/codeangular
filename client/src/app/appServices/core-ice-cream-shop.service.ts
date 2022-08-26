import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreIceCreamShopService {
 url = "https://trapezeicecreamapi.azurewebsites.net/ice-cream-shop/transaction";
 headers = new HttpHeaders();
 //{'Authorization':'Basic YW1vc3Zhbmk6VFc5emRtRnVhWGg0'}
  constructor(private _http:HttpClient) { }

  sendInfo(objVal:any){
    return this._http.post<any>(this.url,objVal,{'headers':this.headers})
  }
}
