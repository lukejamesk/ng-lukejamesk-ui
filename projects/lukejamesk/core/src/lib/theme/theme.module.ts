import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';

@NgModule({
  declarations: [
    ThemeComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ThemeComponent,
  ],
})
export class ThemeModule { }
