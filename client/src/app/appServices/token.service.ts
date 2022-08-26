import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let tokenRequest =req.clone({
      setHeaders:{
        'Authorization':'Basic YW1vc3Zhbmk6VFc5emRtRnVhWGg0'
      }
    })
    return next.handle(tokenRequest);
  }
}
