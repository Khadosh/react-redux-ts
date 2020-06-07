import styled, { keyframes } from 'styled-components';

export const Drawer = styled.div`
  width: 300px;
  min-width: 300px;
  background-color: #eee;
  transition: 300ms width;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    min-width: 0;
    width: ${({ shouldCollapse }) => (shouldCollapse ? 0 : '100%')};
  }
`;

export const Details = styled.div`
  flex-grow: 1;
  background-color: lightcyan;
`;

const removePostAnimation = keyframes`
  0% {
    height: 150px;
    margin-left: 0;
  }

  40% {
    margin-left: -300px;
    opacity: 0;
    height: 150px;
  }

  100% {
    margin-left: -300px;
    opacity: 0;
    height: 0;
  }
`;

export const DrawerPost = styled.div`
  background-color: #ddd;
  width: 280px;
  padding: 0 10px;
  overflow: hidden;

  &.dismissing {
    overflow: hidden;
    animation: ${removePostAnimation} 0.3s linear;
  }
`;
