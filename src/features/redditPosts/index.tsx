import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  choosePost,
  clearPost,
  dismissPost,
  selectPosts,
  selectPost,
  selectDismissingAll,
  selectIsFetching
} from './redditPosts.slice';
import DrawerPost from '../../components/drawerPost';
import PostDetails from '../../components/postDetail';
import DrawerPostSkeleton from '../../components/drawerPost/drawerPost.skeleton';
import { PostState } from '../../common/types';
import { ActionButton } from '../../common/styles';
import { Drawer } from './styles';
import useFetchFirstTime from './useFetchFirstTime';

const RedditPosts: FC = () => {
  const [postToDismissId, setPostToDismissId] = useState('');
  const dispatch = useDispatch();
  const postList = useSelector(selectPosts);
  const selectedPost = useSelector(selectPost);
  const dismissingAll = useSelector(selectDismissingAll);
  const isFetchingPosts = useSelector(selectIsFetching);

  useFetchFirstTime();

  const handleDismissAnimation = (id: string) => {
    return (evt: any): void => {
      evt.stopPropagation();
      setPostToDismissId(id);
    };
  };

  const handleDismiss = (id: string) => {
    if (!dismissingAll) {
      dispatch(dismissPost(id));
      setPostToDismissId('');
    }
  };

  return (
    <>
      <Drawer data-testid="drawer" shouldCollapse={!!selectedPost} removeScroll={dismissingAll}>
        {postList.map((post: PostState) => (
          <DrawerPost
            key={post.id}
            post={post}
            onSelection={(id: string) => dispatch(choosePost(id))}
            onDismissAnimationStart={handleDismissAnimation}
            onDismissAnimationEnd={handleDismiss}
            isDismissing={postToDismissId === post.id || dismissingAll}
          />
        ))}
        {isFetchingPosts && <DrawerPostSkeleton />}
        <ActionButton onClick={() => dispatch(fetchPosts())}>Fetch More!</ActionButton>
      </Drawer>
      <PostDetails onClose={() => dispatch(clearPost())} post={selectedPost} />
    </>
  );
};

export default RedditPosts;
