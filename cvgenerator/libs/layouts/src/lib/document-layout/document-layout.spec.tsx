import { render } from '@testing-library/react';

import DocumentLayout from './document-layout';

describe('DocumentLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocumentLayout />);
    expect(baseElement).toBeTruthy();
  });
});
