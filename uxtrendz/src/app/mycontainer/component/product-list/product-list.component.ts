import { Component, OnInit } from '@angular/core';
import { ProductList } from '../product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  mySearch:string='';
  public prodLists:ProductList[] = [
    {'name':"Laptop",'price':25000,'availablity':"Available"},
    {'name':"Laptop x-serires",'price':55000,'availablity':"Available"},
    {'name':"Mobile",'price':5000,'availablity':"Available"},
    {'name':"Mobile L-series",'price':55000,'availablity':"Not Available"},
    {'name':"Apple iphone",'price':65000,'availablity':"Available"},
    {'name':"TV",'price':80000,'availablity':"Available"},

  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
