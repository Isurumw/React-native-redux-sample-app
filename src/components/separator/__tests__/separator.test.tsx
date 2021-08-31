import React from 'react';
import {render} from 'react-native-testing-library';

import Separator from '../separator';

describe('render the custom separator', () => {
  it('the separator component renders correctly', () => {
    const component = render(<Separator />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
