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

const PostDetails: FC<DefaultProps> = ({ post, onClose }) => {
  if (!post) return null;

  const { author, thumbnail, title } = post;
  return (
    <PostDetailsContainer>
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
    </PostDetailsContainer>
  );
};

export default PostDetails;
