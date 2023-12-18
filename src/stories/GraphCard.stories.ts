import type { Meta, StoryObj } from '@storybook/angular';
import GraphCard from './graphCard.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<GraphCard> = {
  title: 'Organism  /GraphCard',
  component: GraphCard,
  tags: ['autodocs'],
  render: (args: GraphCard) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<GraphCard>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    title: 'Title of the GraphCard',
    content: 'This is the content of the card', 
    cardData: 'This is where the Card Data goes',
  },
};