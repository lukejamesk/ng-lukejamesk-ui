import { Component, Host } from '@angular/core';
import { ExpanderComponent } from '../expander/expander.component';

@Component({
  selector: 'ljk-expander-header',
  templateUrl: './expander-header.component.html',
  styleUrls: ['./expander-header.component.css'],
})
export class ExpanderHeaderComponent {
  constructor(
    @Host() public expander: ExpanderComponent
  ) { }
  doToggle() {
    this.expander.openChange.emit(!this.expander.open);
  }
}
