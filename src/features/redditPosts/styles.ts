import styled from 'styled-components';

interface DrawerProps {
  shouldCollapse: boolean;
}

export const Drawer = styled.div`
  width: 350px;
  min-width: 350px;
  background-color: #eee;
  transition: 300ms all;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    min-width: 0;
    width: ${({ shouldCollapse }: DrawerProps) => (shouldCollapse ? 0 : '100%')};
  }
`;
