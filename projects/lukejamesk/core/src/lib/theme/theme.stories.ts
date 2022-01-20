
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonModule } from '../button/button.module';
import { GridModule } from '../grid/grid.module';
import { PanelModule } from '../panel/panel.module';
import { ThemeModule } from './theme.module';

export default {
  title: 'Theme',
  decorators: [
    moduleMetadata({
      imports: [ThemeModule, PanelModule, GridModule, ButtonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template:`
    <ljk-theme theme="light">
      <ljk-panel>
        <ljk-grid>
          <ljk-grid-col span="12">
            <h3>This is my content</h3>
            <ljk-button>Action 1</ljk-button>
          </ljk-grid-col>
          <ljk-grid-col span="12">
            <ljk-theme theme="dark">
              <ljk-panel>
                <p>And a dark theme content theme</p>
                <ljk-button>Action 2</ljk-button>
              </ljk-panel>
            </ljk-theme>
          </ljk-grid-col>
        </ljk-grid>
      </ljk-panel>
    </ljk-theme>
  `
});

export const Primary = Template.bind({});

