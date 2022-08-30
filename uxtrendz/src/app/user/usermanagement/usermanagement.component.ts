import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UsermgmtserviceService } from 'src/app/apiservices/usermgmtservice.service';
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  @ViewChild('formData') formData !:NgForm

  public userMangmntDetails:UserInterface[] = [];

  constructor(private _userservice:UsermgmtserviceService) { }

  ngOnInit(): void {
    this.fetchUser();
  }
  
  onSubmitted(userData:UserInterface){
    console.log(userData.name,userData.technologies);
    this.userMangmntDetails.push(
      {'name':userData.name,'technologies':userData.technologies}
    );
    this.addUser();
  }

  addUser(){
    this._userservice.onAddUser(this.userMangmntDetails).subscribe((response) => console.log(response));
  }
  fetchUser(){
    this._userservice.OnfetchUser()
    .pipe(map(resData => {
      const userArray =[];
      console.log(resData);
      for(const key in resData){
        console.log(resData[key]);
        if(resData.hasOwnProperty(key)){

          userArray.push({'userId':key,...resData[key]})
          console.log(userArray);
        }else{
          console.log('bye');
        }
      }
      return userArray;
    }))
    .subscribe(res => { 
      console.log(res);
      this.userMangmntDetails = res
    })
  }
}
