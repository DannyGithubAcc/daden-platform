import type { Meta, StoryObj } from '@storybook/angular';
import carddata from './carddata.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<carddata> = {
  title: 'Molecule/carddata',
  component: carddata,
  tags: ['autodocs'],
  render: (args: carddata) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<carddata>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const CardDataPrimary: Story = {
  render: (args) => ({
    props: args,
      }),
  args: {
    color: 'none',
    state: 'normal',
    label: 'Chip',
  },
};