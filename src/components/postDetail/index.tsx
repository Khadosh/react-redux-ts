import React, { FC } from 'react';
import { PostState } from '../../common/types';

import {
  PostDetailsContainer,
  PostDetailsCard,
  PostDetailsCardHeader,
  PostDetailsCardBody
} from './styles';

interface DefaultProps {
  post?: PostState;
  onClose: () => void;
}

const PostDetails: FC<DefaultProps> = ({ post = {}, onClose }) => {
  const shouldHide = !Object.keys(post).length;
  const { author, thumbnail, title } = post;
  return (
    <PostDetailsContainer data-testid="post-details" shouldHide={shouldHide}>
      {!shouldHide && (
        <PostDetailsCard>
          <PostDetailsCardHeader>
            <h4>{author}</h4>
            <button onClick={onClose}>Go Back</button>
          </PostDetailsCardHeader>
          <PostDetailsCardBody>
            <img src={thumbnail} alt={title} />
            <p>{title}</p>
          </PostDetailsCardBody>
        </PostDetailsCard>
      )}
    </PostDetailsContainer>
  );
};

export default PostDetails;
