import styled from 'styled-components';

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  height: 70px;
  background-color: #333;
  color: #fff;
  & > h2 {
    text-align: center;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  max-height: calc(100vh - 120px);
  display: flex;
  flex-direction: row;
`;

export const Footer = styled.footer`
  height: 50px;
  background-color: #333;
`;
