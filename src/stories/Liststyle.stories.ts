import type { Meta, StoryObj } from '@storybook/angular';
import Liststyle from './liststyle.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Liststyle> = {
  title: 'Atom/List style',
  component: Liststyle,
  tags: ['autodocs'],
  render: (args: Liststyle) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Liststyle>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    ListText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit suscipit tempore enim sequi delectus perspiciatis ipsam reprehenderit, vel in?',
  },
};