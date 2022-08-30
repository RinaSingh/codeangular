import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appservices/header.service';
import { BookPosts } from './book-posts';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit, OnDestroy {
  public blogPosts:BookPosts[] = [];


  constructor(private _header:HeaderService,private route:ActivatedRoute) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this._header.addressNav.next(false);
    this._header.creadNav.next(false);
    let bookPost1 = new BookPosts(
      'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg',
      'Title One',
      'Some quick example text to build on the card title and make up the bulk of the card'
    );
    let bookPost2 = new BookPosts(
      'http://clipart-library.com/images/rinKKgXnT.png',
      'Title Two',
      'In ES5, when you declare a variable using the var keyword, the scope of the variable is either global or local. If you declare a'
    );
    let bookPost3 = new BookPosts(
      'http://clipart-library.com/images/8cA6bXpRi.jpg',
      'Title Three',
      'You declare a variable using the var keyword, If you declare a'
    );
    this.blogPosts.push(bookPost1,bookPost2,bookPost3);

    // this.route.firstChild?.params.subscribe((param) =>{

    //   console.log(param);
      
    // });
    
  }

}
