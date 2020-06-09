import reducer, {
  initialState,
  fetchingPosts,
  fetchPostSuccess,
  fetchPostFailure,
  choosePost,
  clearPost,
  dismissPost,
  setDismissingAll,
  dismissAll,
  restoreAll
} from './redditPosts.slice';

import { mockedData } from './testData';

describe('Reddit Posts Slice', () => {
  test('fetchingPosts should set fetching to true', () => {
    const result = reducer(initialState, fetchingPosts());
    expect(result.fetching).toBeTruthy();
  });

  test('fetchPostSuccess should update the PostList, after and clear up flags', () => {
    const { postList, after } = mockedData;
    const result = reducer(initialState, fetchPostSuccess(mockedData));
    expect(result.postList).toEqual(postList);
    expect(result.after).toEqual(after);
    expect(result.fetching).toBeFalsy();
    expect(result.errorMessage).toBeFalsy();
    expect(result.dismissingAll).toBeFalsy();
  });

  test('fetchPostFailure should set up an error message and clear up flags', () => {
    const { errorMessage } = mockedData;
    const result = reducer(initialState, fetchPostFailure(mockedData));
    expect(result.errorMessage).toEqual(errorMessage);
    expect(result.postList).toEqual(initialState.postList);
    expect(result.after).toEqual(initialState.after);
    expect(result.fetching).toBeFalsy();
    expect(result.dismissingAll).toBeFalsy();
  });

  test(`choosePost set selected post and update it's value to viewed`, () => {
    const post = mockedData.postList[0];
    const expectedResult = {
      ...post,
      viewed: true
    };
    const state = {
      ...initialState,
      postList: mockedData.postList
    };
    const result = reducer(state, choosePost(post.id));
    expect(result.selectedPost).toEqual(expectedResult);
  });

  test('clearPost should set selectedPost to undefined', () => {
    const state = {
      ...initialState,
      postList: mockedData.postList,
      selectedPost: mockedData.postList[0]
    };

    const result = reducer(state, clearPost());
    expect(result.selectedPost).toBeUndefined();
  });

  test(`choosePost should set selected post and update it's value to viewed`, () => {
    const post = mockedData.postList[0];
    const state = {
      ...initialState,
      postList: mockedData.postList
    };
    const result = reducer(state, dismissPost(post.id));
    expect(result.postList[0].dismissed).toBeTruthy();
  });

  test(`setDismissingAll should set dismissingAll to true`, () => {
    const result = reducer(initialState, setDismissingAll());
    expect(result.dismissingAll).toBeTruthy();
  });

  test(`dismissAll should set dismissed = true to all entries in the postList`, () => {
    const state = { ...initialState, postList: mockedData.postList };
    const result = reducer(state, dismissAll());
    result.postList.map((post) => {
      expect(post.dismissed).toBeTruthy();
    });
  });

  test(`restoreAll should set dismissed = false to all entries in the postList`, () => {
    const state = {
      ...initialState,
      postList: mockedData.postList.map((post) => ({
        ...post,
        dismissed: true
      }))
    };
    const result = reducer(state, restoreAll());
    result.postList.map((post) => {
      expect(post.dismissed).toBeFalsy();
    });
  });
});
