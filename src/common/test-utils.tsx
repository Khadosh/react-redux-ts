import React, { ReactElement, FC } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer, {
  initialState as reducerInitialState,
  DefaultState
} from '../features/redditPosts/redditPosts.slice';

const render = (ui: ReactElement, initialState: DefaultState = reducerInitialState): any => {
  const store = createStore(reducer, initialState);
  const Wrapper: FC<any> = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const mockFunction = (fn: any, data: any): any => (fn as jest.Mock).mockReturnValue(data);
export const mockAction = (fn: any, data: any = {}): any =>
  mockFunction(fn as unknown, { type: fn.name, ...data });
