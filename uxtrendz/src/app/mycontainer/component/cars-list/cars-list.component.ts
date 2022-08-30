import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  public carTitle:any ="Driving your dream car at lowest than you expect"
public carLists:any =[
  {'name':"BMW", price:'25c'},
  {'name':"MG Hector", price:'2c'},
  {'name':"Suzuki", price:'55c'},
  {'name':"Jaguar", price:'35c'},
  {'name':"Odi", price:'15c'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
