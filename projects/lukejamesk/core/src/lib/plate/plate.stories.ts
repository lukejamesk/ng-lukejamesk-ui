
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ExpanderModule } from '../expander/expander.module';
import { GridModule } from '../grid/grid.module';
import { PanelModule } from '../panel/panel.module';
import { ThemeModule } from '../theme/theme.module';
import { PlateComponent } from './plate.component';
import { PlateModule } from './plate.module';

export default {
  title: 'Theme/Plates',
  component: PlateComponent,
  decorators: [
    moduleMetadata({
      imports: [ThemeModule, PlateModule, PanelModule, GridModule, ExpanderModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template:`
    <ljk-theme [theme]="theme">
      <ljk-panel>
        <ljk-grid>
          <ljk-grid-col span="6">
            <ljk-plate>
              <ljk-panel>
                <p>This is my content</p>
                <ljk-plate>
                  <ljk-panel>
                    <ljk-expander id="TestExpander" [(open)]="open1">
                      <ljk-expander-header>
                        Question 1
                      </ljk-expander-header>
                      <ljk-expander-body>
                        This is my answer
                      </ljk-expander-body>
                    </ljk-expander>
                    <p>This is my content</p>
                    <ljk-plate>
                      <ljk-panel>
                        <p>This is my content</p>
                      </ljk-panel>
                    </ljk-plate>
                  </ljk-panel>
                </ljk-plate>
              </ljk-panel>
            </ljk-plate>
          </ljk-grid-col>
          <ljk-grid-col span="6">
            <ljk-plate>
              <ljk-panel>
                <ljk-expander id="TestExpander" [(open)]="open2">
                  <ljk-expander-header>
                    Question 2
                  </ljk-expander-header>
                  <ljk-expander-body>
                    This is my content
                  </ljk-expander-body>
                </ljk-expander>
              </ljk-panel>
            </ljk-plate>
          </ljk-grid-col>
        </ljk-grid>
      </ljk-panel>
    </ljk-theme>
  `
});

export const Default = Template.bind({});
Default.args = {
  theme: 'light'
}
