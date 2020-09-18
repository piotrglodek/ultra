import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 0.4rem;
  background: ${({ theme: { color } }) => color.primary};
  padding: 1.8rem 3.2rem;
  color: ${({ theme: { color } }) => color.white};
  font-size: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme: { color } }) => color.lightPrimary};
  }
`;
