import type { Meta, StoryObj } from '@storybook/angular';
import Dashboard from './dashboard.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Dashboard> = {
  title: 'Template/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  render: (args: Dashboard) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Dashboard>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    ListText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit suscipit tempore enim sequi delectus perspiciatis ipsam reprehenderit, vel in?',
  },
};