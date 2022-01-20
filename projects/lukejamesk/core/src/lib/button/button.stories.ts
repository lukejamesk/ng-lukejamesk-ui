
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CoreModule } from '../core.module';

export default {
  title: 'Button',
  decorators: [
    moduleMetadata({
      imports: [CoreModule],
    }),
  ],
} as Meta;

export const Primary: Story = () => ({
  template: `
    <ljk-theme>
      <ljk-button>This is a test</ljk-button>
    </ljk-theme>
  `
});
