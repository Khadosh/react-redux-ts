import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { dismissAll } from '../../features/redditPosts/redditPosts.slice';
import { DismissAllButton } from './styles';

const DismissAll: FC = () => {
  const dispatch = useDispatch();

  return <DismissAllButton onClick={() => dispatch(dismissAll())}>Dismiss All</DismissAllButton>;
};

export default DismissAll;
