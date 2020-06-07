import styled, { keyframes, css } from 'styled-components';

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

export const DrawerPostContainer = styled.div`
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

  ${({ isDismissing }) =>
    isDismissing &&
    css`
      overflow: hidden;
      animation: ${removePostAnimation} 0.5s linear;
    `}
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
