import type { Meta, StoryObj } from '@storybook/angular';
import Header from './header.component';
import * as Button from './Button.stories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Header> = {
  title: 'Molecule/Header',
  component: Header,
  tags: ['autodocs'],
  render: (args: Header) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Header>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const HeaderPrimary: Story = {
  args: {
    BrandLetter: 'D',
    BrandName: 'Daden',
    items: [],
  },
};