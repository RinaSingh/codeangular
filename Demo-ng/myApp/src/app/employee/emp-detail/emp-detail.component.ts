import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  public employeeDetails:Array<any> = [];
  constructor(private _employeeServices : EmpServiceService) { }

  ngOnInit(): void {
    this._employeeServices.getEmployeeData().subscribe(response =>
      this.employeeDetails = response
    );
  }

}
