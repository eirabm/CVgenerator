import { render } from '@testing-library/react';

import Trash from './trash';

describe('Trash', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Trash />);
    expect(baseElement).toBeTruthy();
  });
});
