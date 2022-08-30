import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductserviceService } from 'src/app/apiservices/productservice.service';
export interface ProductDetails{
  sno:number,
  name:string,
  price:number
}
@Component({
  selector: 'app-productmanagement',
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css']
})
export class ProductmanagementComponent implements OnInit {
   
  public productDetails:ProductDetails[]=[];
  isLoader:boolean = false;
  isEdit:boolean = false;
  editedIndex !:number;
  @ViewChild('sno') sno !:ElementRef;
  @ViewChild('prodname') name !:ElementRef;
  @ViewChild('prodprice') price !:ElementRef;

  constructor(private _prodquctsDetails:ProductserviceService) { }

  productTitle = this._prodquctsDetails.fetchTitle();
  
  ngOnInit(): void {
    this.fetchData();
    
  }

   time = new Observable(observer => {
    const d = new Date();
    let seconds = d.getSeconds();
    setInterval(() => {observer.next(seconds)},2000)
   
  });
  
  onEditItem(indexItem:number){
    console.log("on edit btn trigger");
    this.isEdit = true;
    this.editedIndex = indexItem;
    this.sno.nativeElement.value =this.productDetails[indexItem].sno;
    this.name.nativeElement.value =this.productDetails[indexItem].name;
    this.price.nativeElement.value =this.productDetails[indexItem].price;
  }

  onDeleteItem(indexItem:number){
    //console.log(indexItem);
    this.productDetails.splice(indexItem,1);
    this.saveData();
  }

  addData(sno:any,name:any,price:any){
    if(this.isEdit){
      //edit..
      this.productDetails[this.editedIndex] = {
        'sno':sno,
        'name':name,
        'price':name
      }
      this.isEdit =false;
     
    }else{
      this.productDetails.push({
        'sno':sno,
        'name':name,
        'price':price
      });
      console.log(this.productDetails);
    }
    this.saveData();
  }
  fetchData(){
    this.isLoader = true;
    this._prodquctsDetails.fetchDataToDb().subscribe(
      (res) => {
        //console.log(res);
        const dataResponse = JSON.stringify(res);
        this.productDetails = JSON.parse(dataResponse);
        this.isLoader = false;
      }
    )
  }
  saveData(){
    this._prodquctsDetails.saveDataToDb(this.productDetails).subscribe(
      (response) => console.log(response)
    )
  }
}
