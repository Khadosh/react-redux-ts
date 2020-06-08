import styled from 'styled-components';

export const ActionButton = styled.button`
  margin: 10px auto;
  height: 30px;
  text-align: center;
  border-radius: 50px 50px 50px 50px;
  display: block;
  background-color: rgba(255, 120, 120, 0.9);
  border: none;
  color: white;
  font-weight: bold;
  padding: 0 30px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
