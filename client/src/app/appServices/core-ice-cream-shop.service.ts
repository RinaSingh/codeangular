import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreIceCreamShopService {
 url = "https://trapezeicecreamapi.azurewebsites.net/ice-cream-shop/transaction"
  constructor(private _http:HttpClient) { }

  sendInfo(){
    this._http.post(`this.url`,{
      "paymentAmount": 0,
      "base": "Cup",
      "flavours": [
        "Vanilla"
      ]
    })
  }
}
