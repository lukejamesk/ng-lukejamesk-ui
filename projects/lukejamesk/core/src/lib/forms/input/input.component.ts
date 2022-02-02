import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LjkFormControl } from '../core/models/LjkFormControl';

/* eslint-disable-next-line */
const noop = () => {};

@Component({
  selector: 'ljk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements LjkFormControl<string> {
  @Input() label!: string;
  @Input() required!: boolean;
  @Input() value!: string;
  @Input() disabled!: boolean;
  @Input() id!: string;
  @Input() name!: string;

  isFocused!: boolean;

  get hasValue() {
    return this.value?.length > 0;
  }

  onChange: any = noop;
  onTouch: any = noop;

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: unknown): void {
    debugger;
    this.onChange = fn;
  }

  registerOnTouched(fn: unknown): void {
    this.onTouch = fn;
  }

  updateChanges(): void {
    this.onChange(this.value);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}
