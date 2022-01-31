import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateComponent } from './plate.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [
    PlateComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [
    PlateComponent,
  ],
})
export class PlateModule { }
