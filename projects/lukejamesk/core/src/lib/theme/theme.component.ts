import { Component, Input } from '@angular/core';

export type Theme = 'light' | 'dark';

@Component({
  selector: 'ljk-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  @Input() public theme: Theme = 'light';
}
