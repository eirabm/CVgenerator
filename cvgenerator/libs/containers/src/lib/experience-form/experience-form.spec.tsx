import { render } from '@testing-library/react';

import ExperienceForm from './experience-form';

describe('ExperienceForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExperienceForm />);
    expect(baseElement).toBeTruthy();
  });
});
