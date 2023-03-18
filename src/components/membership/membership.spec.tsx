import { render } from '@testing-library/react';

import Membership from './membership';

describe('Membership', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Membership />);
    expect(baseElement).toBeTruthy();
  });
});
