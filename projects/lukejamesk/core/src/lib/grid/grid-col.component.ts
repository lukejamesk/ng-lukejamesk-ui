import { Component, HostBinding, Input } from '@angular/core';

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

@Component({
  selector: 'ljk-grid-col',
  templateUrl: './grid-col.component.html',
  styleUrls: ['./grid-col.component.scss']
})
export class GridColComponent {
  @Input() public span: ColumnSpan = 1

  @HostBinding('class') get hostClasses() {
    return `span-${this.span}`;
  }
}
