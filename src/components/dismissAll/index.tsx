import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  dismissAll,
  restoreAll,
  selectIsFetching,
  selectPosts
} from '../../features/redditPosts/redditPosts.slice';
import { DismissAllButton } from './styles';

const DismissAll: FC = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsFetching);
  const posts = useSelector(selectPosts);

  if (!isFetching && !posts.length)
    return <DismissAllButton onClick={() => dispatch(restoreAll())}>Restore All</DismissAllButton>;

  return <DismissAllButton onClick={() => dispatch(dismissAll())}>Dismiss All</DismissAllButton>;
};

export default DismissAll;
