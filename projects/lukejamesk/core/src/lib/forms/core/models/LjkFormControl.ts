import { ControlValueAccessor } from "@angular/forms";

export interface LjkFormControl<T> extends ControlValueAccessor {
  label: string;
  id: string;
  name: string;
  required: boolean;
  disabled?: boolean;
  value: T;

  writeValue: (value: T) => void;
}
