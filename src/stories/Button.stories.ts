import type { Meta, StoryObj } from '@storybook/angular';
import Button from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Button> = {
  title: 'Atom/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'none',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    hierarchy: 'secondary',
    color: 'none',
    label: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    size: 'medium',
    hierarchy: 'ghost',
    color: 'none',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    hierarchy: 'primary',
    color: 'none',
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'none',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    hierarchy: 'primary',
    color: 'none',
    label: 'Button',
  },
};

export const White: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'white',
    label: 'Button',
  },
};

export const Info: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'info',
    label: 'Button',
  },
};

export const Success: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'success',
    label: 'Button',
  },
};

export const Warning: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'warning',
    label: 'Button',
  },
};

export const Error: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'error',
    label: 'Button',
  },
};

export const Kort: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'none',
    label: 'Mand',
  },
};

export const Lang: Story = {
  args: {
    size: 'medium',
    hierarchy: 'primary',
    color: 'none',
    label: 'Dit is een knop met een heel lange tekst',
  },
};
