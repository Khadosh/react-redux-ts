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

const mockedData = {
  postList: [
    {
      id: 'gyfedz',
      author: 'rextraneous',
      title: 'A short story',
      thumbnail: 'https://b.thumbs.redditmedia.com/BhCqiVdXZqjaGcW5nFNyRaqjrRqFw1dJiWihm9E1fCo.jpg',
      created: 1591576055,
      comments_number: 1773,
      viewed: false,
      dismissed: false
    }
  ],
  after: 't3_gy5nxy',
  errorMessage: 'Something went wrong'
};

describe('Reddit Posts Slice', () => {
  it('fetchingPosts should set fetching to true', () => {
    const result = reducer(initialState, fetchingPosts());
    expect(result.fetching).toBeTruthy();
  });

  it('fetchPostSuccess should update the PostList, after and clear up flags', () => {
    const { postList, after } = mockedData;
    const result = reducer(initialState, fetchPostSuccess(mockedData));
    expect(result.postList).toEqual(postList);
    expect(result.after).toEqual(after);
    expect(result.fetching).toBeFalsy();
    expect(result.errorMessage).toBeFalsy();
    expect(result.dismissingAll).toBeFalsy();
  });

  it('fetchPostFailure should set up an error message and clear up flags', () => {
    const { errorMessage } = mockedData;
    const result = reducer(initialState, fetchPostFailure(mockedData));
    expect(result.errorMessage).toEqual(errorMessage);
    expect(result.postList).toEqual(initialState.postList);
    expect(result.after).toEqual(initialState.after);
    expect(result.fetching).toBeFalsy();
    expect(result.dismissingAll).toBeFalsy();
  });

  it(`choosePost set selected post and update it's value to viewed`, () => {
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

  it('clearPost should set selectedPost to undefined', () => {
    const state = {
      ...initialState,
      postList: mockedData.postList,
      selectedPost: mockedData.postList[0]
    };

    const result = reducer(state, clearPost());
    expect(result.selectedPost).toBeUndefined();
  });

  it(`choosePost should set selected post and update it's value to viewed`, () => {
    const post = mockedData.postList[0];
    const state = {
      ...initialState,
      postList: mockedData.postList
    };
    const result = reducer(state, dismissPost(post.id));
    expect(result.postList[0].dismissed).toBeTruthy();
  });

  it(`setDismissingAll should set dismissingAll to true`, () => {
    const result = reducer(initialState, setDismissingAll());
    expect(result.dismissingAll).toBeTruthy();
  });

  it(`dismissAll should set dismissed = true to all entries in the postList`, () => {
    const state = { ...initialState, postList: mockedData.postList };
    const result = reducer(state, dismissAll());
    result.postList.map((post) => {
      expect(post.dismissed).toBeTruthy();
    });
  });

  it(`restoreAll should set dismissed = false to all entries in the postList`, () => {
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
