import { CCType, ccTypes } from './cc-types';
import { Injectable } from '@angular/core';
import { ICreditCardService } from './i-credit-card';
import './cc-types';

@Injectable()
export class CCNumberService implements ICreditCardService {

  public card: CCType;

  public ccNumber: string;
  public cvc: number;
  
  constructor() { 
    
  }

  setCCNumber(value: string) {
    this.ccNumber = value
  }

  getCCType(value: string): string {
    ccTypes.forEach(element => {
      if (element.test(value))
    });
  }

}
