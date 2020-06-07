import styled, { keyframes } from 'styled-components';

export const Drawer = styled.div`
  width: 300px;
  min-width: 300px;
  background-color: lightgray;
  transition: 300ms width;
  overflow-y: scroll;
  padding: 0 10px;

  @media screen and (max-width: 768px) {
    min-width: 0;
    width: ${({ shouldCollapse }) => (shouldCollapse ? 0 : '100%')};
  }
`;

export const Details = styled.div`
  flex-grow: 1;
  background-color: lightcyan;
`;

const remove = keyframes`
  from {
    height: 150px;
  }
  to {
    height: 0;
  }
`;

export const DrawerPost = styled.div`
  &.dismissing {
    overflow: hidden;
    animation: ${remove} 0.3s linear;
  }
`;
