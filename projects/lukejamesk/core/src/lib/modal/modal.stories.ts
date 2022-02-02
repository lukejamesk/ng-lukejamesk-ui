import { PortalModule } from '@angular/cdk/portal';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonModule } from '../button/button.module';
import { ThemeModule } from '../theme/theme.module';
import { ModalComponent } from './modal.component';
import { ModalModule } from './modal.module';

export default {
  title: 'Modal',
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [ThemeModule, ModalModule, PortalModule, ButtonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template:`
    <ljk-theme [theme]="theme">
      <ljk-button (click)="open = !open">Toggle Modal</ljk-button>
      <ljk-modal [(open)]="open">
        <div class="p-m">
          <h2>Modal title</h2>
          <p>This is my modal content</p>
        </div>
      </ljk-modal>
    </ljk-theme>
  `
});

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
  open: true,
}
