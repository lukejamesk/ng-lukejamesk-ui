
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CoreModule } from '../core.module';
import { IconName } from '../icon/icon.component';
import { ButtonVariant } from './button.component';

export default {
  title: 'Button',
  decorators: [
    moduleMetadata({
      imports: [CoreModule],
    }),
  ],
} as Meta;

const Template: Story<{
  icon: IconName | '';
  variant: ButtonVariant;
}> = (args) => ({
  props: args,
  template: `
    <ljk-theme>
      <ljk-button
        [icon]="icon"
        [variant]="variant"
      >
        This is a test
      </ljk-button>
    </ljk-theme>
  `
});

export const Primary = Template.bind({})
Primary.args = {
  icon: '',
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  icon: '',
  variant: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  icon: '',
  variant: 'tertiary',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: 'coffee',
  variant: 'primary',
}
