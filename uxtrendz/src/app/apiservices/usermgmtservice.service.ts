import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../user/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UsermgmtserviceService {

  constructor(private _httpclient:HttpClient) { }

  url = 'https://product-details-b4dbf-default-rtdb.firebaseio.com/user.json';

  headers = new HttpHeaders({'content-type':'userapplication/json'});

  onAddUser(userMangmntDetails:UserInterface[]){
    return this._httpclient.post<UserInterface[]>(this.url,userMangmntDetails,{'headers':this.headers})
  }
  //Data fetch from database
  OnfetchUser(){
    return this._httpclient.get<UserInterface[]>(this.url);
  }
}
