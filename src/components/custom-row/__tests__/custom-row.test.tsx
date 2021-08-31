import React from 'react';
import {render} from 'react-native-testing-library';

import CustomRow from '../custom-row';

describe('render the custom row', () => {
  it('the row component renders correctly', () => {
    const component = render(
      <CustomRow title="test title" subTitle="test sub title" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
