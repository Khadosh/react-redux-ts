import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  choosePost,
  clearPost,
  dismissPost,
  selectPosts,
  selectPost,
  selectDismissingAll
} from './redditPosts.slice';
import DrawerPost from '../../components/drawerPost';
import PostDetails from '../../components/postDetail';
import { PostState } from '../../common/types';

import { Drawer } from './styles';

const RedditPosts: FC = () => {
  const [postToDismissId, setPostToDismissId] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const postList = useSelector(selectPosts);
  const selectedPost = useSelector(selectPost);
  const dismissingAll = useSelector(selectDismissingAll);
  const handleDismissAnimation = (id: string) => {
    return (evt: any): void => {
      evt.stopPropagation();
      setPostToDismissId(id);
    };
  };

  return (
    <>
      <Drawer shouldCollapse={!!selectedPost}>
        {postList.map((post: PostState) => (
          <DrawerPost
            key={post.id}
            post={post}
            onSelection={(id: string) => dispatch(choosePost(id))}
            onDismissAnimationStart={handleDismissAnimation}
            onDismissAnimationEnd={(id: string) => dispatch(dismissPost(id))}
            isDismissing={postToDismissId === post.id || dismissingAll}
          />
        ))}
      </Drawer>
      <PostDetails onClose={() => dispatch(clearPost())} post={selectedPost} />
    </>
  );
};

export default RedditPosts;
