import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTitle',
  standalone: true
})
export class LimitTitlePipe implements PipeTransform {

  transform(limitTitle: string, ): string {


    const  newTitle: string = limitTitle.slice(0,30)

    return newTitle;
  }

}
