import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpanderComponent } from './expander.component';
import { ExpanderHeaderComponent } from './expander-header.component';
import { ExpanderBodyComponent } from './expander-body.component';
import { GridModule } from '../grid/grid.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    ExpanderComponent,
    ExpanderHeaderComponent,
    ExpanderBodyComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    IconModule,
  ],
  exports: [
    ExpanderComponent,
    ExpanderHeaderComponent,
    ExpanderBodyComponent,
  ],
})
export class ExpanderModule { }
