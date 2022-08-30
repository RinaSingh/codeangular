import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simplegrouptempform',
  templateUrl: './simplegrouptempform.component.html',
  styleUrls: ['./simplegrouptempform.component.css']
})
export class SimplegrouptempformComponent implements OnInit {

  constructor() { }
  public dataStore ={
    'emailaddress': "",
    'hobbies': "",
    'password': "",
    'username': ""
  }
  ngOnInit(): void {
  }
  submitForm(form:NgForm){
    console.log(form);
    this.dataStore.username = form.value.username;
    this.dataStore.hobbies = form.value.hobbies;
    this.dataStore.password = form.value.password;
    this.dataStore.emailaddress = form.value.emailaddress;
    console.log(this.dataStore);
  }
}
