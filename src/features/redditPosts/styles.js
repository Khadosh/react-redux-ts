import styled, { keyframes } from 'styled-components';

export const Drawer = styled.div`
  width: 300px;
  min-width: 300px;
  background-color: #eee;
  transition: 300ms all;
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
    height: 270px;
    margin-left: 0;
  }

  40% {
    margin-left: -768px;
    height: 150px;
  }

  100% {
    margin-left: -768px;
    height: 0;
  }
`;

export const DrawerPost = styled.div`
  background-color: #ddd;
  width: calc(100% - 20px);
  padding: 0 10px;
  overflow: hidden;
  border-bottom: 2px solid black;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }

  & > img {
    height: 100px;
  }

  &.dismissing {
    overflow: hidden;
    animation: ${removePostAnimation} 0.5s linear;
  }
`;

export const DrawerPostHeader = styled.div`
  & > .viewed {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #008471;
  }

  & > .unseen {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #fffb7c;
  }
`;

export const DrawerPostBody = styled.div``;

export const DrawerPostFooter = styled.div``;
