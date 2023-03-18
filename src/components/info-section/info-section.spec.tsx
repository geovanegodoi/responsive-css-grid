import { render } from '@testing-library/react';

import InfoSection from './info-section';

describe('Info', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoSection />);
    expect(baseElement).toBeTruthy();
  });
});
