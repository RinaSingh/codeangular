import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
public dataShow:any =[];
  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    //this._dataService.sendGetRequest.subscribe()
  }

}
