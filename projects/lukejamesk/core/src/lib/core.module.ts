import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpanderModule } from './expander/expander.module';
import { GridModule } from './grid/grid.module';
import { PanelModule } from './panel/panel.module';
import { ButtonModule } from './button/button.module';
import { ThemeModule } from './theme/theme.module';
import { IconModule } from './icon/icon.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    ExpanderModule,
    GridModule,
    IconModule,
    PanelModule,
    ThemeModule
  ],
})
export class CoreModule { }
