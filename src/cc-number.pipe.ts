import { Injectable, PipeTransform, Pipe } from '@angular/core';
import {CCNumberService} from './cc-number.service';

@Pipe({
  name: 'samplePipe'
})
@Injectable()
export class CCNumberPipe implements PipeTransform {
  constructor(private _ccNumber: CCNumberService) {

  }
  transform(value: string, args: any[] = null): string {
    return this._ccNumber.formatCCNumber(value);
  }
}
