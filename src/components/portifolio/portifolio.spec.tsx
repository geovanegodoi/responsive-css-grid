import { render } from '@testing-library/react';

import Portifolio from './portifolio';

describe('Portifolio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Portifolio />);
    expect(baseElement).toBeTruthy();
  });
});
