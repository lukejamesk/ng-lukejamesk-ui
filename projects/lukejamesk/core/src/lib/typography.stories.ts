
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CoreModule } from './core.module';

export default {
  title: 'Typography',
  decorators: [
    moduleMetadata({
      imports: [CoreModule],
    }),
  ],
} as Meta;

const Template: Story = () => ({
  template: `
    <ljk-theme [theme]="theme">
    <h1>This is a heading 1</h1>
    <h2>This is a heading 2</h2>
    <h3>This is a heading 3</h3>
    <p>This is a paragraphy with some <strong>bolded</strong> text.</p>
    <p>This is a paragraphy with some <strong>bolded</strong> text.</p>
    <p>This is a paragraphy with some <strong>bolded</strong> text.</p>
    <p>This is a paragraphy with some <strong>bolded</strong> text.</p>
    </ljk-theme>
  `
});


export const Default = Template.bind({});

Default.args = {
  theme: 'light'
};
