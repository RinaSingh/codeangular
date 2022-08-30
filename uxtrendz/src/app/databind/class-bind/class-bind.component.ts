import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BtnProp } from '../style-bind/btn-prop';
import { CarsProp } from './cars-prop';

@Component({
  selector: 'app-class-bind',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ClassBindComponent implements OnInit {
  @Input() myBtnColor:any;
  public myPro:boolean = true;
  public isActive:boolean =false;
  public cars:CarsProp[] =[
    {
      "name": "MG Hector",
      "color": 'blue'
    },
    {
      "name": "Ford",
      "color": 'olive'
    },
    {
      "name": "Kia",
      "color": 'orange'
    },
    {
      "name": "BMW",
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "color": 'green'
    },
    {
      "name": "Suzuki",
      "color": 'purple'
    },
    {
      "name": "Odi",
      "color": 'lime'
    }
  
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
