import React from 'react';
import { render } from '../../common/test-utils';
import { selectPosts, selectIsFetching } from './redditPosts.slice';
import RedditPosts from '.';

jest.mock('./redditPosts.slice');
jest.mock('./useFetchFirstTime');

describe('Reddit Posts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('can render with redux with defaults', () => {
    (selectPosts as jest.Mock).mockReturnValue([]);
    const { getByTestId, getByText } = render(<RedditPosts />);
    expect(getByTestId('drawer')).toBeInTheDocument();
    expect(getByTestId('post-details')).toBeInTheDocument();
    expect(getByText(/fetch More/i));
  });

  test('it will render the loader if selectIsFecthing is true', () => {
    (selectPosts as jest.Mock).mockReturnValue([]);
    (selectIsFetching as jest.Mock).mockReturnValue(true);
    const { getByTestId } = render(<RedditPosts />);
    expect(getByTestId('drawer-post-skeleton'));
  });
});
