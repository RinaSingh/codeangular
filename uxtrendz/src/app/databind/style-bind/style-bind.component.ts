import { Component, Input, OnInit } from '@angular/core';
import { BtnProp } from './btn-prop';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.css']
})
export class StyleBindComponent implements OnInit {
  
  public btnColors:BtnProp[] =[
    {
      'colorName':'btn-danger'
    },
    {
      'colorName':'btn-success'
    },
    {
      'colorName':'btn-warning'
    },
    {
      'colorName':'btn-secondary'
    },
    {
      'colorName':'btn-dark'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
