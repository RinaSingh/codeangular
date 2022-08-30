import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtShortPipe'
})
export class TxtShortPipePipe implements PipeTransform {

  transform(value: any,limit:number): any {
    //console.log(value)
    if(value.length > limit){
      return value.substr(0,limit) + "....";
    }else{
      return value.substr(0,limit);
    }
  }

}
