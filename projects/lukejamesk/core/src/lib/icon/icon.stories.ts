
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ThemeModule } from '../theme/theme.module';
import { IconComponent, IconName, IconSize } from './icon.component';
import { IconModule } from './icon.module';

export default {
  title: 'Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [ThemeModule, IconModule],
    }),
  ],
} as Meta;

const Template: Story<{
  size: IconSize,
  name: IconName,
  fontSize: number,
}> = (args) => ({
  props: args,
  template: `
    <ljk-theme>
      <ljk-icon [name]="name" [size]="size"></ljk-icon>
    </ljk-theme>
  `
});

export const Default = Template.bind({});
Default.args = {
  name: 'coffee',
  size: 'auto',
};
