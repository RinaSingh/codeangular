import { Pipe, PipeTransform } from '@angular/core';
import { ProductList } from '../mycontainer/component/product-list';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    // if(searchTerm.length < -1)
    // return value;
    
    return value.filter((search:any)=>{
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}
