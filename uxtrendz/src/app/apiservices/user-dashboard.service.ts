import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {config} from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
  api = config.API_URL;
  constructor(private _httpclient:HttpClient) { }

  fetchData(){
    return this._httpclient.get<any>(`${this.api}/data.json`)
    .pipe(map(resData => {
      //console.log(resData);
        const empArr = [];
        for(const key in resData){
          //console.log(key);
          if(resData.hasOwnProperty(key)){
            console.log(resData[key])
            empArr.push({'empID':key, ...resData[key]})
          }
        }
        return empArr;
    }))

  }
}
