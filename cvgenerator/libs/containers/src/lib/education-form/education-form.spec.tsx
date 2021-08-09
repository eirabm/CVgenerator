import { render } from '@testing-library/react';

import EducationForm from './education-form';

describe('EducationForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EducationForm />);
    expect(baseElement).toBeTruthy();
  });
});
