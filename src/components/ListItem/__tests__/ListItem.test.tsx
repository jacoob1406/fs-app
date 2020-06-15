import React from 'react';
import { render } from '@testing-library/react';
import ListItem, { Props } from '../ListItem';
import { ListItemCategory } from '../../../common/model/ListItemCategory';

const testProps: Props = {
  isCompleted: true,
  isSelected: false,
  text: 'To do test text',
  category: ListItemCategory.FAMILY,
  index: 1,
  onDelete: () => undefined,
  id: '1234',
  onSelect: () => undefined,
};

describe('ListItem component', () => {
  it('should match components class names based on props', () => {
    const component = render(<ListItem {...testProps} />);
    expect(
      component.container.querySelector('.listItem--completed')
    ).toBeTruthy();
    expect(
      component.container.querySelector('.listItem--selected')
    ).toBeFalsy();
    expect(component.container.querySelector('.listItem__index span'))
      .toMatchInlineSnapshot(`
    <span
      class="listItem__category"
    >
      Family
    </span>
    `);
  });
});
