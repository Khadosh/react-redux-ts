import styled from 'styled-components';

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
