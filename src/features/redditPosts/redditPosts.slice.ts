import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { PostState } from '../../common/types';

interface DefaultState {
  postList: PostState[];
  selectedPost?: PostState;
  after?: string;
  fetching?: boolean;
  errorMessage?: string;
  dismissingAll?: boolean;
}

const initialState: DefaultState = {
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
    dismissAll: (state) => {
      state.dismissingAll = true;
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
  dismissAll
} = postsSlice.actions;

/* Action Creators, used to call async methods */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchPosts = (after?: string): AppThunk => async (dispatch) => {
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

/* Selectors */
export const selectPosts = (state: RootState): PostState[] =>
  state.posts.postList.filter((post) => !post.dismissed);
export const selectPost = (state: RootState): any => state.posts.selectedPost;
export const selectDismissingAll = (state: RootState): any => state.posts.dismissingAll;
export const selectIsFetching = (state: RootState): any => state.posts.fetching;

export default postsSlice.reducer;
