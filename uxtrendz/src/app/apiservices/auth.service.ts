import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError,tap } from 'rxjs';
import { AuthResponse } from '../app.interfaces.ts/authresponse.interface';
import { UserModel } from '../app.interfaces.ts/user.model';
import { config } from '../config';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = config.API_KEY;
  constructor(private http:HttpClient , private errorService:ErrorService) { }
  //error = new Subject<String>();
  user = new Subject<UserModel>();
  signUp(email:string,password:string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`https://123identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.api}`,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(catchError(
      err => {return this.errorService.handleError(err)}
      ),
      tap( res => this.AuthenticatedUser(res.email,res.localId,res.idToken,+res.expiresIn))
    )
  }
  signIn(email:string,password:string){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.api}`,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(catchError(err => {return this.errorService.handleError(err)}),
    tap( res => this.AuthenticatedUser(res.email,res.localId,res.idToken,+res.expiresIn)))
  }

  private AuthenticatedUser(email:string, userId:string, token:string, expiresIn:any){
    const expireDate = new Date(new Date().getTime()+ expiresIn*1000)
    const user = new UserModel(email,userId,token,expireDate);
    console.log('user::', user);
    this.user.next(user);
  }
 
}
