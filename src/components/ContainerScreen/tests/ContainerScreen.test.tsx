import React from 'react';
import {render} from '@testing-library/react-native';
import ContainerScreen from '../ContainerScreen';
import {View} from 'react-native';
import theme from '../../../styles/theme';

describe('ContainerScreen', () => {
  it('renders the title when provided', () => {
    const title = 'Test Title';
    const {getByText} = render(
      <ContainerScreen title={title}>
        <View />
      </ContainerScreen>,
    );

    // Assert that the title is rendered correctly
    expect(getByText(title)).toBeTruthy();
  });

  it('does not render the title when not provided', () => {
    const {queryByText} = render(
      <ContainerScreen>
        <View />
      </ContainerScreen>,
    );

    // Assert that the title is not rendered when not provided
    expect(queryByText('Test Title')).toBeNull();
  });

  it('renders children correctly', () => {
    const {getByTestId} = render(
      <ContainerScreen title="Test Title">
        <View testID="child-view" />
      </ContainerScreen>,
    );

    // Assert that the children are rendered inside the container
    expect(getByTestId('child-view')).toBeTruthy();
  });

  it('applies the correct title style when the title is provided', () => {
    const {getByText} = render(
      <ContainerScreen title="Test Title">
        <View />
      </ContainerScreen>,
    );

    const titleText = getByText('Test Title');

    // Ensure that the title is styled correctly
    expect(titleText).toHaveStyle({
      fontSize: theme.spacing.XL,
      fontStyle: 'italic',
      color: 'white',
    });
  });
});
