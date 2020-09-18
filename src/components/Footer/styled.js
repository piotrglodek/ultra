import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme: { color } }) => color.secondary};
  padding: 4rem 0;
  color: ${({ theme: { color } }) => color.grey};
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

export const FooterColumn = styled.div`
  width: 25%;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterColumnTitle = styled.h4`
  color: ${({ theme: { color } }) => color.white};
  font-size: 2.4rem;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterItem = styled.li`
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.white};
  &:hover {
    color: ${({ theme: { color } }) => color.primary};
  }
`;
