import styled, { keyframes, css } from 'styled-components';

interface drawerPostContainerProps {
  isDismissing: boolean;
}

const removePostAnimation = keyframes`
  0% {
    height: 270px;
    margin-left: 0;
  }

  40% {
    margin-left: -300px;
    height: 150px;
  }

  100% {
    margin-left: -768px;
    height: 0;
  }
`;

export const DrawerPostContainer = styled.div`
  background-color: #5a5a5a;
  width: calc(100% - 20px);
  padding: 0 10px 10px;
  overflow: hidden;
  border-bottom: 2px solid black;
  color: white;

  &:hover {
    cursor: pointer;
  }

  ${({ isDismissing }: drawerPostContainerProps) =>
    isDismissing &&
    css`
      border: none;
      animation: ${removePostAnimation} 0.5s linear;
    `}
`;

export const DrawerPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > p {
    text-align: right;
    background-color: #989898;
    box-shadow: inset 0px 0px 3px 2px rgb(130, 130, 130);
    border-radius: 50px 50px 50px 50px;
    padding: 5px 10px;
  }
`;

export const DrawerPostHeaderTitle = styled.div`
  display: flex;
  align-items: center;

  & > div {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transition: 0.3s background-color;
  }

  & > .viewed {
    background-color: #008471;
  }

  & > .unseen {
    background-color: #fffb7c;
  }

  & > h5 {
    margin: 0 10px;
  }
`;

export const DrawerPostBody = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & > img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  & > p {
    margin: 0;
  }
`;

export const DrawerPostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DismissButton = styled.button`
  cursor: pointer;
  border-radius: 50px 50px 50px 50px;
  border: 1px solid #846060;
  background-color: rgba(255, 120, 120, 0.9);
  color: white;
  transition: 0.3s background-color;

  &:hover {
    background-color: rgba(255, 120, 120, 1);
  }

  &:focus {
    outline: none;
  }
`;

export const DrawerPostSkeletonBody = styled.div`
  display: flex;
`;
