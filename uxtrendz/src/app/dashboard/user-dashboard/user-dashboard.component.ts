import { Component, OnInit } from '@angular/core';
import { UserDashboardService } from 'src/app/apiservices/user-dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private _userdash:UserDashboardService) { }
  empArr:any;
  ngOnInit(): void {
    this.fetchData();
  }
 fetchData(){
  this._userdash.fetchData().subscribe(res => {
     this.empArr = res;
     console.log(this.empArr);
  });
 }


}
