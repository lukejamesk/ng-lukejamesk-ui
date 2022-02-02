import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ModalComponent } from './modal.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    PortalModule,
    ThemeModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class ModalModule { }
