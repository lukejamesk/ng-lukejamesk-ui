import { Component, Optional, SkipSelf } from '@angular/core';
import { Theme } from '../theme/theme.component';
import { Plate } from './types';


@Component({
  selector: 'ljk-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent {
  public plate: Plate = '1';

  get themeClass (): Theme {
    return `plate-${this.plate}`;
  }

  constructor(
    @Optional() @SkipSelf() parentPlate: PlateComponent
  ) {
    if (parentPlate?.plate === '1') {
      this.plate = '2'
    } else {
      this.plate = '1'
    }
  }
}
