import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { LabelModule } from '../label/label.module';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LabelModule,
  ],
  exports: [
    InputComponent,
  ]
})
export class InputModule { }
