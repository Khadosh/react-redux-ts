import React from 'react';
import { render, fireEvent } from '../../common/test-utils';
import PostDetails from '.';

import { mockedData } from '../../features/redditPosts/testData';

const defaultProps = {
  post: mockedData.postList[0],
  onClose: jest.fn()
};

describe('Post Details', () => {
  test('can render with redux with defaults', () => {
    const { getByAltText, getByText } = render(<PostDetails {...defaultProps} />);
    const expected = mockedData.postList[0];
    expect(getByText(expected.title));
    expect(getByText(expected.author));
    expect(getByAltText(expected.title));
    expect(getByText(/go back/i));
  });

  test('go back button fires onClose', () => {
    const { getByText } = render(<PostDetails {...defaultProps} />);
    const button = getByText(/go back/i);
    fireEvent.click(button);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  test(`if post is Empty then it should find the postDetailsCard`, () => {
    const { queryByText } = render(<PostDetails onClose={jest.fn()} />);
    const button = queryByText(/go back/i);
    expect(button).not.toBeInTheDocument();
  });
});
