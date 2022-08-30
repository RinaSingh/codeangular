import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { AuthService } from '../apiservices/auth.service';
import { ErrorService } from '../apiservices/error.service';
import { AuthResponse } from '../app.interfaces.ts/authresponse.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  onModeLogin:boolean = true;
  Form!: FormGroup;
  errorMsg:any;
 errservice:any =this.errService.errorMsg;
  constructor(private fb:FormBuilder,
              private auth:AuthService,
              private errService:ErrorService
     ) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    });
    // this.auth.error.subscribe(errMsg =>
    //   this.errorMsg = errMsg
    //   )
  }
  onModeSwitch(){
    this.onModeLogin = !this.onModeLogin;
  }
  
  onSubmitData(){
    if(this.Form.valid){
    console.log(this.Form.value);
      const email = this.Form.value.email;
      const password = this.Form.value.password;
      let  authObservable = new Observable<AuthResponse>;
      if(this.onModeLogin){
        authObservable = this.auth.signIn(email,password)
      }else{
        authObservable = this.auth.signUp(email,password)
      }
      authObservable.subscribe(
        res => {console.log(res)}
        ,err => { this.errorMsg = err}
      );
    }else{
      console.log("Not valid form");
    }
  }
}
