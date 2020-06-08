import styled from 'styled-components';

interface DrawerProps {
  shouldCollapse: boolean;
  removeScroll: boolean;
}

export const Drawer = styled.div`
  width: 350px;
  background-color: #eee;
  transition: 300ms all ease;
  overflow-y: ${({ removeScroll }: DrawerProps) => (removeScroll ? 'hidden' : 'scroll')};
  overflow-x: hidden;
  transition: 300ms all ease;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
