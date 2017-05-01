import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CCNumberDirective } from './cc-number.directive';
import { CCNumberPipe } from './cc-number.pipe';
import { CCNumberService } from './cc-number.service';

export * from './cc-number.directive';
export * from './cc-number.pipe';
export * from './cc-number.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CCNumberDirective,
    CCNumberPipe
  ],
  exports: [
    CCNumberDirective,
    CCNumberPipe
  ]
})
export class CCNumberModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CCNumberModule,
      providers: [CCNumberService]
    };
  }
}
