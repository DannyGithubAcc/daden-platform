import type { Meta, StoryObj } from '@storybook/angular';
import Footer from './footer.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Footer> = {
  title: 'Molecule/Footer',
  component: Footer,
  tags: ['autodocs'],
  render: (args: Footer) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Footer>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const FooterPrimary: Story = {
  args: {
    item: 'item',
  },
};