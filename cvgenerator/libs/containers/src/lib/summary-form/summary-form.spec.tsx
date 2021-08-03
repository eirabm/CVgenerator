import { render } from '@testing-library/react';

import SummaryForm from './summary-form';

describe('SummaryForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SummaryForm />);
    expect(baseElement).toBeTruthy();
  });
});
