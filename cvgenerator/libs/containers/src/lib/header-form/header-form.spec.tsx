import { render } from '@testing-library/react';

import HeaderForm from './header-form';

describe('HeaderForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderForm />);
    expect(baseElement).toBeTruthy();
  });
});
