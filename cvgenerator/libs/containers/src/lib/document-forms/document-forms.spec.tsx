import { render } from '@testing-library/react';

import DocumentForms from './document-forms';

describe('DocumentForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocumentForms />);
    expect(baseElement).toBeTruthy();
  });
});
