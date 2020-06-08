import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  dismissAllAsync,
  restoreAll,
  selectIsEmpty
} from '../../features/redditPosts/redditPosts.slice';
import { ActionButton } from '../../common/styles';

const DismissAll: FC = () => {
  const dispatch = useDispatch();
  const isEmpty = useSelector(selectIsEmpty);

  if (isEmpty)
    return <ActionButton onClick={() => dispatch(restoreAll())}>Restore All</ActionButton>;

  return <ActionButton onClick={() => dispatch(dismissAllAsync())}>Dismiss All</ActionButton>;
};

export default DismissAll;
