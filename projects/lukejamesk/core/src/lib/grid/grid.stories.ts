
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PanelComponent } from '../panel/panel.component';
import { ThemeComponent } from '../theme/theme.component';
import { GridColComponent } from './grid-col.component';
import { GridComponent } from './grid.component';

export default {
  title: 'Grid',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      declarations: [GridColComponent, PanelComponent, ThemeComponent],
    }),
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template:`
    <ljk-theme>
      <ljk-grid>
        <ljk-grid-col span="6">
          <ljk-panel>
            Test item 1
          </ljk-panel>
        </ljk-grid-col>
        <ljk-grid-col span="3">
          Test item 2
        </ljk-grid-col>
        <ljk-grid-col span="3">
          Test item 3
        </ljk-grid-col>
        <ljk-grid-col span="3">
          <ljk-panel>
            Test item 1
          </ljk-panel>
        </ljk-grid-col>
        <ljk-grid-col span="9">
          <ljk-theme theme="dark">
            <ljk-panel>
              <ljk-grid>
                <ljk-grid-col span="6">
                  <ljk-panel>
                    Test item 1
                  </ljk-panel>
                </ljk-grid-col>
                <ljk-grid-col span="6">
                  <ljk-panel>
                    Test item 1
                  </ljk-panel>
                </ljk-grid-col>
              </ljk-grid>
            </ljk-panel>
          </ljk-theme>
        </ljk-grid-col>
      </ljk-grid>
    </ljk-theme>
  `
});

export const Primary = Template.bind({});

