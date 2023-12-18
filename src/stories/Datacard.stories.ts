import type { Meta, StoryObj } from '@storybook/angular';
import Datacard from './datacard.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Datacard> = {
  title: 'Molecule/DataCard',
  component: Datacard,
  tags: ['autodocs'],
  render: (args: Datacard) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Datacard>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    title: 'Title of the Card',
    content: 'This is the content of the card', 
    cardData: 'This is where the Card Data goes',
  },
};