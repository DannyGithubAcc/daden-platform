import type { Meta, StoryObj } from '@storybook/angular';
import Typography from './typography.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Typography> = {
  title: 'Atom/Typography',
  component: Typography,
  tags: ['autodocs'],
  render: (args: Typography) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Typography>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    textWeight: 'this is the text weight text',
  },
};