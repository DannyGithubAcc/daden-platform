import type { Meta, StoryObj } from '@storybook/angular';
import Card from './card.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Card> = {
  title: 'Molecule/Card',
  component: Card,
  tags: ['autodocs'],
  render: (args: Card) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Card>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    title: 'Title of the Card',
    content: 'This is the content of the card', 
    cardData: 'This is where the Card Data goes',
  },
};