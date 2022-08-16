import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { EmpagecalService } from './empagecal.service';
import { catchError, Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: EmpagecalService,
})
export class EmpServiceService {
  private _url:string = "../../assets/employees.json";
  constructor(private http: HttpClient) { }
  getEmployeeData():Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url)
    
  }
  
}
