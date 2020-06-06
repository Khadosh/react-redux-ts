import React, { FC } from 'react';
import { Drawer, Details } from './styles';

const RedditPosts: FC = () => (
  <>
    <Drawer shouldCollapse={false} />
    <Details />
  </>
);

export default RedditPosts;
