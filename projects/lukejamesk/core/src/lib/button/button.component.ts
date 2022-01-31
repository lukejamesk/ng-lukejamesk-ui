import { Component, Input } from '@angular/core';
import { IconName } from '../icon/icon.component';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
@Component({
  selector: 'ljk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent  {
  @Input() icon?: IconName;
  @Input() variant: ButtonVariant = 'primary';
}
