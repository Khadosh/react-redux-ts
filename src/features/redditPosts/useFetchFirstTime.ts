import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redditPosts.slice';

const useFetchFirstTime = (): any => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);
};

export default useFetchFirstTime;
