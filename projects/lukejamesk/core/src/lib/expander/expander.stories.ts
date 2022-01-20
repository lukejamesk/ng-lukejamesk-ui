
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PanelModule } from '../panel/panel.module';
import { ThemeModule } from '../theme/theme.module';
import { ExpanderModule } from './expander.module';

export default {
  title: 'Expander',
  decorators: [
    moduleMetadata({
      imports: [ThemeModule, ExpanderModule, PanelModule],
    }),
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template:`
    <ljk-theme [theme]="theme">
      <ljk-expander id="TestExpander" [(open)]="open">
        <ljk-expander-header>
          The title
        </ljk-expander-header>
        <ljk-expander-body>
          This is my content
        </ljk-expander-body>
      </ljk-expander>
    </ljk-theme>
  `
});

export const Primary = Template.bind({});

Primary.args = {
  open: false,
  theme: 'light'
};
