import React from 'react';
import { AppLayout, Header, Main, Footer } from './App.styles';
import RedditPosts from './features/redditPosts';

const App: React.FC = () => {
  return (
    <AppLayout>
      <Header>
        <h2>Reddit App - TOP Posts</h2>
      </Header>
      <Main>
        <RedditPosts />
      </Main>
      <Footer></Footer>
    </AppLayout>
  );
};

export default App;
