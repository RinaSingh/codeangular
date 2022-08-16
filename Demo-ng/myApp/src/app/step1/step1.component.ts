import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  public departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"Mongo"},
    {"id":4, "name":"express"},
    {"id":5, "name":"Vue"}
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(value:any){
    this.router.navigate(['/step1', value.id]);
  }
}
