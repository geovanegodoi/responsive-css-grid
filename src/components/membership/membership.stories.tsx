import type { Meta } from '@storybook/react';
import { Membership, MembershipProps } from './membership';

const Story: Meta<typeof Membership> = {
  component: Membership,
  title: 'Components/Membership',
  decorators: [
    (Story) => {
      return <div style={{ width: '300px' }}>{Story()}</div>;
    },
  ],
};
export default Story;

export const Regular = {
  args: { variant: 'regular' } as MembershipProps,
};

export const pro = {
  args: { variant: 'pro' } as MembershipProps,
};
