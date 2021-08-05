import { render } from '@testing-library/react';

import DocumentPreview from './document-preview';

describe('DocumentPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocumentPreview />);
    expect(baseElement).toBeTruthy();
  });
});
