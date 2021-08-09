import { render } from '@testing-library/react';

import OtherSkills from './other-skills';

describe('OtherSkills', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OtherSkills />);
    expect(baseElement).toBeTruthy();
  });
});
