import React from 'react';
import { render, fireEvent, mockFunction, mockAction } from '../../common/test-utils';
import {
  selectIsEmpty,
  dismissAllAsync,
  restoreAll
} from '../../features/redditPosts/redditPosts.slice';
import DismisAll from '.';

jest.mock('../../features/redditPosts/redditPosts.slice');

describe('Dismiss All Button', () => {
  test('Button Text should be "Dismiss All" if we have posts', () => {
    mockFunction(selectIsEmpty, false);
    const { getByText } = render(<DismisAll />);
    expect(getByText(/Dismiss All/i));
  });

  test('Button Click should call "dismissAllAsync" if we do not have posts', () => {
    mockFunction(selectIsEmpty, false);
    mockAction(dismissAllAsync);
    const { getByText } = render(<DismisAll />);
    fireEvent.click(getByText(/Dismiss All/i));
    expect(dismissAllAsync).toHaveBeenCalledTimes(1);
  });

  test('Button Text should be "Restore All" if we do not have posts', () => {
    mockFunction(selectIsEmpty, true);
    const { getByText } = render(<DismisAll />);
    expect(getByText(/Restore All/i));
  });

  test('Button Click should call "restoreAll" if we do not have posts', () => {
    mockFunction(selectIsEmpty, true);
    mockAction(restoreAll);
    const { getByText } = render(<DismisAll />);
    fireEvent.click(getByText(/Restore All/i));
    expect(restoreAll).toHaveBeenCalledTimes(1);
  });
});
