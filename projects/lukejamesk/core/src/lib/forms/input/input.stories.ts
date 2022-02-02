
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { GridModule } from '../../grid/grid.module';
import { Theme } from '../../theme/theme.component';
import { ThemeModule } from '../../theme/theme.module';
import { InputComponent } from './input.component';
import { InputModule } from './input.module';

export default {
  title: 'Forms/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [ThemeModule, InputModule, FormsModule, ReactiveFormsModule, GridModule],
    }),
  ],
  args: {
    theme: 'light',
    required: false,
    value: '',
  }
} as Meta;

const TemplateWithReactiveForm: Story<{
  theme: Theme,
  required: boolean,
  value: string,
}> = (args) => {
  const form = new FormGroup({
    testInput1: new FormControl(''),
    testInput2: new FormControl(''),
    testInput3: new FormControl(''),
  });

  return {
    props: {
      ...args,
      form,
    },
    template:`
      <ljk-theme [theme]="theme">
        <h3>My Form</h3>
        <form [formGroup]="form">
          <ljk-input
            id="TestInput1"
            name="testInput1"
            label="Test Input 1"
            formControlName="testInput1"
          ></ljk-input>
          <ljk-grid>
            <ljk-grid-col span="6">
              <ljk-input
                id="TestInput2"
                name="testInput2"
                label="Test Input 2"
                formControlName="testInput2"
              ></ljk-input>
            </ljk-grid-col>
            <ljk-grid-col span="6">
              <ljk-input
                id="TestInput3"
                name="testInput3"
                label="Test Input 3"
                formControlName="testInput3"
              ></ljk-input>
            </ljk-grid-col>
            <ljk-grid-col span="12">
              <pre>
                {{form.value | json}}
              </pre>
            </ljk-grid-col>
          </ljk-grid>
        </form>
      </ljk-theme>
    `
  };
};

export const ReactiveForm = TemplateWithReactiveForm.bind({});
ReactiveForm.args = {
}

const Template: Story = (args) => ({
  props: args,
  template:`
    <ljk-theme [theme]="theme">
      <ljk-input
        id="TestInput1"
        name="testInput1"
        label="Test Input 1"
      ></ljk-input>
    </ljk-theme>
  `
});

export const Default = Template.bind({});
Default.args = {
  theme: 'light'
}

