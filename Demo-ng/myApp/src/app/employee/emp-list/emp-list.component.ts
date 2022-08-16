import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public employeeList:Array<any> = [];
  constructor(private _employeeServices : EmpServiceService) { }
  
  ngOnInit(): void {
   
    this._employeeServices.getEmployeeData().subscribe(response =>
        this.employeeList = response
      );
  }

}
