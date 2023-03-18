import { render } from '@testing-library/react';

import CardsSection from './cards-section';

describe('CardsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsSection />);
    expect(baseElement).toBeTruthy();
  });
});
