import type { Meta } from '@storybook/react';
import { Hero } from './hero';

const Story: Meta<typeof Hero> = {
  component: Hero,
  title: 'Components/Hero',
};
export default Story;

export const Primary = {
  args: {},
};
