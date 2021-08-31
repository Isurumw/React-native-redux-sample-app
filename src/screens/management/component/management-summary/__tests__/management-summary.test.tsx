import React from 'react';
import {render} from 'react-native-testing-library';

import ManagementSummary from '../management-summary';

describe('render the management summary card', () => {
  it('the summary card component renders correctly', () => {
    const component = render(
      <ManagementSummary
        icon={require('assets/images/key.png')}
        title="test title"
        subTitle="test sub title"
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
