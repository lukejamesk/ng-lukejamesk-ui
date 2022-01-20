import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridColComponent } from './grid-col.component';

@NgModule({
  declarations: [
    GridComponent,
    GridColComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GridComponent,
    GridColComponent,
  ],
})
export class GridModule { }
