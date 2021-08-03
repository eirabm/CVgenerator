import { render } from '@testing-library/react';

import SkillsForm from './skills-form';

describe('SkillsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillsForm />);
    expect(baseElement).toBeTruthy();
  });
});
