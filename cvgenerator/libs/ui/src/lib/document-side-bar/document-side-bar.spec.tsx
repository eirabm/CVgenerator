import { render } from '@testing-library/react';

import DocumentSideBar from './document-side-bar';

describe('DocumentSideBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocumentSideBar />);
    expect(baseElement).toBeTruthy();
  });
});
