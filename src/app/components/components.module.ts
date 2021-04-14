import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCheckoutComponent } from './list-checkout/list-checkout.component';



@NgModule({
  declarations: [
    ListCheckoutComponent
  ],
  exports: [
    ListCheckoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
