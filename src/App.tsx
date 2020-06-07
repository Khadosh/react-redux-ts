import React from 'react';
import { AppLayout, Header, Main, Footer } from './App.styles';
import RedditPosts from './features/redditPosts';
import DismissAll from './components/dismissAll';

const App: React.FC = () => {
  return (
    <AppLayout>
      <Header>
        <h2>Reddit App - TOP Posts</h2>
      </Header>
      <Main>
        <RedditPosts />
      </Main>
      <Footer>
        <DismissAll />
      </Footer>
    </AppLayout>
  );
};

export default App;
