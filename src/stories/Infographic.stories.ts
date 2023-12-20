import type { Meta, StoryObj } from '@storybook/angular';
import Infographic from './infographic.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Infographic> = {
  title: 'Page/Infographic',
  component: Infographic,
  tags: ['autodocs'],
  render: (args: Infographic) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Infographic>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    ListText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit suscipit tempore enim sequi delectus perspiciatis ipsam reprehenderit, vel in?',
  },
};