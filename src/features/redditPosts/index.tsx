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
import { utcFromNow } from '../../common/helpers';
import { Drawer, DrawerPost, Details } from './styles';

const RedditPosts: FC = () => {
  const [postToDismissId, setPostToDismissId] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const postList = useSelector(selectPosts);
  const selectedPost = useSelector(selectPost);
  const handleDismiss = (id: string) => {
    return (evt: any): void => {
      evt.stopPropagation();
      setPostToDismissId(id);
    };
  };

  return (
    <>
      <Drawer shouldCollapse={!!selectedPost} postList={postList}>
        {postList.map(({ id, title, created, thumbnail, img, comments_number, viewed }) => (
          <DrawerPost
            key={id}
            onClick={() => dispatch(choosePost(id))}
            className={postToDismissId === id ? 'dismissing' : ''}
            onAnimationEnd={() => dispatch(dismissPost(id))}
          >
            <h5>{title}</h5>
            <p>{viewed ? 'Viewed' : 'Unseen'}</p>
            <p>{utcFromNow(created)}</p>
            <img src={thumbnail === 'default' ? img : thumbnail} alt={title} />
            <strong>{comments_number}</strong>
            <button onClick={handleDismiss(id)}>dismiss</button>
          </DrawerPost>
        ))}
      </Drawer>
      <Details onClick={() => dispatch(clearPost())}>
        {selectedPost && JSON.stringify(selectedPost)}
      </Details>
    </>
  );
};

export default RedditPosts;
