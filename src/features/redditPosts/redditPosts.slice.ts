import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { PostState } from '../../common/types';

export interface DefaultState {
  postList: PostState[];
  selectedPost?: PostState;
  after?: string;
  errorMessage?: string;
  fetching: boolean;
  dismissingAll: boolean;
}

export const initialState: DefaultState = {
  postList: [],
  selectedPost: undefined,
  after: '',
  fetching: false,
  errorMessage: '',
  dismissingAll: false
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchingPosts: (state) => {
      state.fetching = true;
    },
    fetchPostSuccess: (state, action: PayloadAction<any>) => {
      const { postList, after } = action.payload;
      state.postList = state.postList.concat(postList);
      state.after = after;
      state.fetching = false;
      state.errorMessage = '';
      state.dismissingAll = false;
    },
    fetchPostFailure: (state, action: PayloadAction<any>) => {
      const { errorMessage } = action.payload;
      state.fetching = false;
      state.errorMessage = errorMessage;
      state.dismissingAll = false;
    },
    choosePost: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const post = state.postList.find((post) => post.id === id);
      if (post) {
        post.viewed = true;
        state.selectedPost = post;
      }
    },
    clearPost: (state) => {
      state.selectedPost = undefined;
    },
    dismissPost: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const post = state.postList.find((post) => post.id === id);
      if (post) post.dismissed = true;
    },
    setDismissingAll: (state) => {
      state.dismissingAll = true;
    },
    dismissAll: (state) => {
      state.postList = state.postList.map((post) => ({
        ...post,
        dismissed: true
      }));
    },
    restoreAll: (state) => {
      state.postList = state.postList.map((post) => ({
        ...post,
        dismissed: false
      }));
      state.dismissingAll = false;
    }
  }
});

export const {
  fetchingPosts,
  fetchPostSuccess,
  fetchPostFailure,
  choosePost,
  clearPost,
  dismissPost,
  restoreAll,
  setDismissingAll,
  dismissAll
} = postsSlice.actions;

/* Action Creators, used to call async methods */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPosts = (): AppThunk => async (dispatch, getState) => {
  const after = getState().posts.after;
  try {
    const url = `https://www.reddit.com/top.json?limit=50${after ? `&after=${after}` : ''}`;
    dispatch(fetchingPosts());
    const result = await fetch(url).then((result: any) => result.json());
    const postList = result.data.children.map(
      ({ data: { id, title, thumbnail, author, created, num_comments } }: any) => ({
        id,
        author,
        title,
        thumbnail:
          thumbnail === 'default' ? 'https://picsum.photos/100?grayscale&blur=2' : thumbnail,
        created,
        comments_number: num_comments,
        viewed: false,
        dismissed: false
      })
    );

    const payload = {
      postList,
      after: result.data.after
    };
    dispatch(fetchPostSuccess(payload));
  } catch (err) {
    dispatch(fetchPostFailure({ errorMessage: err.message }));
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const dismissAllAsync = (): AppThunk => (dispatch) => {
  dispatch(setDismissingAll());
  // delay to allow dismiss animation to finish
  setTimeout(() => dispatch(dismissAll()), 300);
};

/* Selectors */
export const selectPosts = (state: RootState): PostState[] =>
  state.posts.postList.filter((post) => !post.dismissed);
export const selectPost = (state: RootState): PostState | undefined => state.posts.selectedPost;
export const selectDismissingAll = (state: RootState): boolean => state.posts.dismissingAll;
export const selectIsFetching = (state: RootState): boolean => state.posts.fetching;
export const selectIsEmpty = (state: RootState): boolean =>
  !state.posts.fetching && !state.posts.postList.some((post) => !post.dismissed);

export default postsSlice.reducer;
