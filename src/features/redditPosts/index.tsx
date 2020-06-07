import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  choosePost,
  clearPost,
  dismissPost,
  selectPosts,
  selectPost
} from './redditPosts.slice';
import DrawerPost from '../../components/drawerPost';
import { PostState } from '../../common/types';

import { Drawer, Details } from './styles';

const RedditPosts: FC = () => {
  const [postToDismissId, setPostToDismissId] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const postList = useSelector(selectPosts);
  const selectedPost = useSelector(selectPost);
  const handleDismissAnimation = (id: string) => {
    return (evt: any): void => {
      evt.stopPropagation();
      setPostToDismissId(id);
    };
  };

  return (
    <>
      <Drawer shouldCollapse={!!selectedPost} postList={postList}>
        {postList.map((post: PostState) => (
          <DrawerPost
            key={post.id}
            post={post}
            onSelection={(id: string) => dispatch(choosePost(id))}
            onDismissAnimationStart={handleDismissAnimation}
            onDismissAnimationEnd={(id: string) => dispatch(dismissPost(id))}
            isDismissing={postToDismissId === post.id}
          />
        ))}
      </Drawer>
      <Details onClick={() => dispatch(clearPost())}>
        {selectedPost && JSON.stringify(selectedPost)}
      </Details>
    </>
  );
};

export default RedditPosts;
