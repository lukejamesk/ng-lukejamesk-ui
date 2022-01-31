import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, IconName as fasIconName } from '@fortawesome/free-solid-svg-icons';

export type IconSize = 'auto' | 's' | 'm' |'l';
export type IconName = fasIconName;

@Component({
  selector: 'ljk-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() name: IconName
  @Input() size: IconSize = 'auto'

  constructor(
    library: FaIconLibrary
  ) {
    library.addIconPacks(fas)
  }
}
