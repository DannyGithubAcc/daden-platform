import type { Meta, StoryObj } from '@storybook/angular';
import Blockquote from './blockquote.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Blockquote> = {
  title: 'Atom/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  render: (args: Blockquote) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Blockquote>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    bigText: 'Quote',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae commodi atque, quos dolores veniam perferendis nemo, eius non animi eos explicabo possimus asperiores assumenda harum mollitia consequatur hic dolorem?', 
    type: 'none',
  },
};
