import React from 'react';
import { render, fireEvent, mockFunction, mockAction } from '../../common/test-utils';
import { selectPosts, selectIsFetching, fetchPosts } from './redditPosts.slice';
import RedditPosts from '.';

jest.mock('./redditPosts.slice');
jest.mock('./useFetchFirstTime');

describe('Reddit Posts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('can render with redux with defaults', () => {
    mockFunction(selectPosts, []);
    const { getByTestId, getByText } = render(<RedditPosts />);
    expect(getByTestId('drawer')).toBeInTheDocument();
    expect(getByTestId('post-details')).toBeInTheDocument();
    expect(getByText(/fetch More/i));
  });

  test('it will render the loader if selectIsFecthing is true', () => {
    mockFunction(selectPosts, []);
    mockFunction(selectIsFetching, true);
    const { getByTestId } = render(<RedditPosts />);
    expect(getByTestId('drawer-post-skeleton'));
  });

  test('Fetch More! Button Click should call "fetchPosts"', () => {
    mockAction(fetchPosts);
    const { getByText } = render(<RedditPosts />);
    fireEvent.click(getByText(/fetch More/i));
    expect(fetchPosts).toHaveBeenCalledTimes(1);
  });
});
