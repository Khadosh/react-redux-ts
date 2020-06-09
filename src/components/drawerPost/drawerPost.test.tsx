import React from 'react';
import { render, fireEvent } from '../../common/test-utils';
import DrawerPost from '.';

import { mockedData } from '../../features/redditPosts/testData';

const defaultProps = {
  key: '1',
  post: mockedData.postList[0],
  isDismissing: false,
  onSelection: jest.fn(),
  onDismissAnimationStart: jest.fn().mockImplementation(() => jest.fn()),
  onDismissAnimationEnd: jest.fn()
};

describe('Post Details', () => {
  test('it should render with default data', () => {
    const { getByTestId, getByAltText, getByText } = render(<DrawerPost {...defaultProps} />);
    const expected = mockedData.postList[0];
    expect(getByTestId('drawer-post'));
    expect(getByText(expected.title));
    expect(getByText(expected.author));
    expect(getByAltText(expected.title));
    expect(getByText(/dismiss/i));
  });

  test('click on the container should fire onSelection', () => {
    const { getByTestId } = render(<DrawerPost {...defaultProps} />);
    const id = mockedData.postList[0].id;
    fireEvent.click(getByTestId('drawer-post'));
    expect(defaultProps.onSelection).toHaveBeenCalledWith(id);
  });

  test('click on the container should fire onSelection', () => {
    const { getByText } = render(<DrawerPost {...defaultProps} />);
    const id = mockedData.postList[0].id;
    fireEvent.click(getByText(/dismiss/i));
    expect(defaultProps.onDismissAnimationStart).toHaveBeenCalledWith(id);
  });
});
