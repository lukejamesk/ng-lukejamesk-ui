import { Component, Input } from '@angular/core';

@Component({
  selector: 'ljk-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent  {
  @Input() for!: string;
  @Input() required!: boolean;
}
