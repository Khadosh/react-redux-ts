import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../features/redditPosts/redditPosts.slice';

export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
