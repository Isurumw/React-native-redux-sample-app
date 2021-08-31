import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import CustomButton from '../custom-button';

const mockButtonPress = jest.fn();

describe('render the custom button', () => {
  beforeEach(() => {
    mockButtonPress.mockClear();
  });

  it('the button component renders correctly', () => {
    const component = render(
      <CustomButton label="SIGN IN" onPress={mockButtonPress} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('tapped the button', () => {
    const component = render(
      <CustomButton label="SIGN IN" onPress={mockButtonPress} />,
    );

    const button = component.getByTestId('test_button');
    fireEvent.press(button);

    expect(mockButtonPress).toBeCalledTimes(1);
  });
});
