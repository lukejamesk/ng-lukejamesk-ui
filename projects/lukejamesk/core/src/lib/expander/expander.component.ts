import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ljk-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css'],
})
export class ExpanderComponent {
  @Input() open = false;
  @Input() id = '';
  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  get ariaLabelId() {
    return `Expander-${this.id}`;
  }
}
