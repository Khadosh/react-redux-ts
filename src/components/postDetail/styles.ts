import styled from 'styled-components';

interface props {
  shouldHide: boolean;
}

export const PostDetailsContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    background-color: white;
    position: absolute;
    top: 70px;
    bottom: 50px;
    left: 0;
    right: 0;
    transition: 0.3s all ease;
    margin-left: ${({ shouldHide }: props) => (shouldHide ? '100vw' : 0)};
    box-shadow: -5px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const PostDetailsCard = styled.div`
  margin: 10px auto;
  max-width: 360px;
  box-shadow: 2px 2px 5px darkgray;
  padding: 20px;
  text-align: center;
  border: solid 1px darkgray;
  border-radius: 5px;
`;

export const PostDetailsCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & > button {
      height: 30px;
      text-align: center;
      border-radius: 50px 50px 50px 50px;
      display: block;
      background-color: rgba(255, 120, 120, 0.9);
      color: white;
      outline: none;
      border: none;
      box-shadow: 1px 1px 3px black;
    }
  }
`;
export const PostDetailsCardBody = styled.div`
  display: flex;
  align-content: center;

  & > p {
    margin-left: 20px;
    text-align: left;
  }

  & > img {
    height: 140px;
  }
`;
