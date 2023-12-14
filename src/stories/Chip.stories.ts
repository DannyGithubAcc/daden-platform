import type { Meta, StoryObj } from '@storybook/angular';
import Chip from './chip.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Chip> = {
  title: 'Atom/Chip',
  component: Chip,
  tags: ['autodocs'],
  render: (args: Chip) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Chip>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    color: 'none',
    state: 'normal',
    label: 'Chip',
  },
};