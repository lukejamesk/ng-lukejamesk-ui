import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { LabelModule } from './label/label.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputModule,
    LabelModule,
  ]
})
export class FormsModule { }
