import type { Meta } from '@storybook/react';
import { Card, CardProps } from './card';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  decorators: [
    (Story) => {
      return <div style={{ width: '300px' }}>{Story()}</div>;
    },
  ],
};
export default Story;

export const Analytics = {
  args: { variant: 'analytics' } as CardProps,
};

export const Marketing = {
  args: { variant: 'marketing' } as CardProps,
};

export const Development = {
  args: { variant: 'development' } as CardProps,
};

export const Support = {
  args: { variant: 'support' } as CardProps,
};
