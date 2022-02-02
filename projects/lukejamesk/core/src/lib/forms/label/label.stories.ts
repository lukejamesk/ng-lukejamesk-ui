
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Theme } from '../../theme/theme.component';
import { ThemeModule } from '../../theme/theme.module';
import { LabelComponent } from './label.component';
import { LabelModule } from './label.module';

export default {
  title: 'Forms/Label',
  component: LabelComponent,
  decorators: [
    moduleMetadata({
      imports: [ThemeModule, LabelModule],
    }),
  ],
  args: {
    theme: 'light',
    required: true,
    label: 'My Label',
  }
} as Meta;

const Template: Story<{
  theme: Theme,
  required: boolean,
  value: string,
}> = (args) => ({
  props: args,
  template:`
    <ljk-theme [theme]="theme">
      <ljk-label for="test" [required]="required">
        {{label}}
      </ljk-label>
    </ljk-theme>
  `
});

export const Default = Template.bind({});
Default.args = {}

