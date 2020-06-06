import styled from 'styled-components';

export const Drawer = styled.div`
  width: 300px;
  background-color: lightgray;
  transition: 300ms width;

  @media screen and (max-width: 768px) {
    width: ${({ shouldCollapse }) => (shouldCollapse ? 0 : '100%')};
  }
`;

export const Details = styled.div`
  flex-grow: 1;
  background-color: lightcyan;
`;
