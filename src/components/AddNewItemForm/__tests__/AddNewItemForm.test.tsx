import React from 'react';
import { render } from '@testing-library/react';
import AddNewItemForm from '../AddNewItemForm';

describe('AddNewItemForm component', () => {
  it('should match snapshot', () => {
    const component = render(<AddNewItemForm handleSubmit={() => undefined} />);
    expect(component.container).toMatchSnapshot();
  });
});
