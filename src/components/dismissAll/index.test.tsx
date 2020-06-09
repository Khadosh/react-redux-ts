import React from 'react';
import { render } from '../../common/test-utils';
import { selectIsEmpty } from '../../features/redditPosts/redditPosts.slice';
import DismisAll from '.';

jest.mock('../../features/redditPosts/redditPosts.slice');

describe('Dismiss All Button', () => {
  test('Button Text should be "Dismiss All" if we have posts', () => {
    (selectIsEmpty as jest.Mock).mockReturnValue(false);
    const { getByText } = render(<DismisAll />);
    expect(getByText(/Dismiss All/i));
  });

  test('Button Text should be "Restore All" if we do not have posts', () => {
    (selectIsEmpty as jest.Mock).mockReturnValue(true);
    const { getByText } = render(<DismisAll />);
    expect(getByText(/Restore All/i));
  });
});
