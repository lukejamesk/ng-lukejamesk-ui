
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ExpanderModule } from '../expander/expander.module';
import { Theme } from '../theme/theme.component';
import { ThemeModule } from '../theme/theme.module';
import { PanelComponent } from './panel.component';
import { PanelModule } from './panel.module';

export default {
  title: 'Panel',
  component: PanelComponent,
  decorators: [
    moduleMetadata({
      imports: [ThemeModule, PanelModule, ExpanderModule],
    }),
  ],
} as Meta;

const Template: Story<{
  q1: boolean,
  q2: boolean,
  q3: boolean,
  theme: Theme,
}> = (args) => ({
  props: args,
  template: `
    <ljk-theme [theme]="theme">
      <ljk-panel>
        <h2>Faq</h2>
        <ljk-expander [(open)]="q1">
          <ljk-expander-header>Question 1</ljk-expander-header>
          <ljk-expander-body>My Answer</ljk-expander-body>
        </ljk-expander>
        <ljk-expander [(open)]="q2">
          <ljk-expander-header>Question 2</ljk-expander-header>
          <ljk-expander-body>My Answer</ljk-expander-body>
        </ljk-expander>
        <ljk-expander [(open)]="q3">
          <ljk-expander-header>Question 3</ljk-expander-header>
          <ljk-expander-body>My Answer</ljk-expander-body>
        </ljk-expander>
      </ljk-panel>
    </ljk-theme>
  `
});


export const Default = Template.bind({});

Default.args = {
  q1: true,
  q2: false,
  q3: false,
  theme: 'light'
};
