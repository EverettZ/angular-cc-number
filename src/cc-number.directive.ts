import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sampleDirective]'
})
export class CCNumberDirective {

  constructor(private el: ElementRef) {
  }

}
