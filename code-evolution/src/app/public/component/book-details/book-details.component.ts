import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/appservices/header.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit,OnDestroy {
  public id:number =0;
  public authorId:number =0;
  constructor(
    private route:ActivatedRoute, 
    private _header:HeaderService
    ) { }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe((param) =>{

      console.log(param);
      this.id = param['id'];
      this.authorId = param['authorId'];
    });
    this._header.mainNav.next(false);
    this._header.goBackNav.next(true);
    this._header.creadNav.next(false);
  }
  ngOnDestroy(): void {
    this._header.mainNav.next(true);
    this._header.goBackNav.next(false);
    this._header.creadNav.next(true);
  }

}
