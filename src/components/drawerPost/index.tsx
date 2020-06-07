import React, { FC } from 'react';
import { PostState } from '../../common/types';
import { utcFromNow } from '../../common/helpers';

import {
  DrawerPostContainer,
  DrawerPostHeader,
  DrawerPostHeaderTitle,
  DrawerPostBody,
  DrawerPostFooter
} from './styles';

interface DefaultProps {
  key: string;
  post: PostState;
  isDismissing: boolean;
  onSelection: (id: string) => void;
  onDismissAnimationStart: (evt: any) => (id: string) => void;
  onDismissAnimationEnd: (id: string) => void;
}

const DrawerPost: FC<DefaultProps> = ({
  post: { id, viewed, author, created, thumbnail, title, comments_number },
  onSelection,
  onDismissAnimationStart,
  onDismissAnimationEnd,
  isDismissing
}) => (
  <DrawerPostContainer
    onClick={() => onSelection(id)}
    onAnimationEnd={() => onDismissAnimationEnd(id)}
    isDismissing={isDismissing}
  >
    <DrawerPostHeader>
      <DrawerPostHeaderTitle>
        <div className={viewed ? 'viewed' : 'unseen'} />
        <h5>{author}</h5>
      </DrawerPostHeaderTitle>
      <p>{utcFromNow(created)}</p>
    </DrawerPostHeader>
    <DrawerPostBody>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
    </DrawerPostBody>
    <DrawerPostFooter>
      <strong>{comments_number} Comments!</strong>
      <button onClick={(evt: any) => onDismissAnimationStart(id)(evt)}>Dismiss</button>
    </DrawerPostFooter>
  </DrawerPostContainer>
);

export default DrawerPost;
