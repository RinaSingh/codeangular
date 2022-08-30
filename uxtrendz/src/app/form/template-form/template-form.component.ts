import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  [x: string]: any;

  constructor() { }
  //@ViewChild('f',{static:true}) f !:NgForm
  defaultVal:any ="Angular";
  checkedVal:any ="Female";
  isDataSubmitted:boolean =false;
  formChecked:boolean = false;
  public genders:any = [
    {'id':1, 'gender':'Female'},
    {'id':2,'gender':'Male'}
  ];
  submittedDataModel = {
    'username':'',
    'email':'',
    'password':'',
    'course':'',
    'gender':'',
    'formCheck':false
  };
  ngOnInit(): void {
  }
  onSubmit(data:NgForm){
    //console.log(this.f);
    console.log(data.value);
    this.isDataSubmitted =true;
    this.submittedDataModel.username = data.value.userName;
    this.submittedDataModel.email = data.value.email;
    this.submittedDataModel.formCheck = data.value.formCheck;
    this.submittedDataModel.gender = data.value.gender;
    this.submittedDataModel.password = data.value.pass;
    this.submittedDataModel.course = data.value.default;
    console.log(this.submittedDataModel);
    //Reset the form with form state
    data.reset();
  }
 
  // showDataSet(data:NgForm){
  //   data.setValue({
  //     userDetails:{
  //         username: 'shreya singh',
  //         emailaddress: 'shreya@gmail.com',
  //         password:''
  //       },
  //       hobbies:''
  //   })
   
  // }
}
