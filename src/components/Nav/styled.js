import styled from 'styled-components';
import { Link } from 'react-router-dom';
// shared components
import { Container } from '../../shared/components';
// images
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/close_icon.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/hamburger_icon.svg';

export const Navbar = styled.nav`
  width: 100%;
  height: 8rem;
  background-color: ${({
    theme: {
      color: { secondary },
    },
  }) => secondary};
  position: sticky;
  z-index: 999;
  top: 0;
`;

export const NavContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled(Link)`
  color: ${({ theme: { color } }) => color.white};
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const NavIcon = styled(Logo)`
  fill: ${({ theme: { color } }) => color.white};
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 0.8rem;
`;

export const NavMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  font-size: 2rem;
  align-items: center;

  @media screen and (max-width: 630px) {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    top: 8rem;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme: { color } }) => color.secondary};
  }
`;

export const NavItem = styled.li`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.4rem;
  @media screen and (max-width: 630px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding: 0 1.2rem;
  color: ${({
    theme: {
      color: { white },
    },
  }) => white};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
  &:hover {
    border-bottom-color: ${({
      theme: {
        color: { primary },
      },
    }) => primary};
  }
  @media screen and (max-width: 630px) {
    padding: 3.2rem 0;
    width: 100%;
  }
`;

export const NavLinkButton = styled(Link)`
  text-decoration: none;
  border-radius: 4px;
  background: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  padding: 1rem 2rem;
  color: ${({
    theme: {
      color: { white },
    },
  }) => white};
  outline: none;
  border: none;

  &:hover {
    background-color: ${({ theme: { color } }) => color.lightPrimary};
  }
`;

export const NavHamburger = styled.button`
  display: none;
  padding: 0;
  width: 4rem;
  height: 4rem;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 630px) {
    display: block;
  }
`;

export const NavMenuIcon = styled(HamburgerIcon)`
  fill: ${({
    theme: {
      color: { white },
    },
  }) => white};
`;
export const NavCloseIcon = styled(CloseIcon)`
  fill: ${({
    theme: {
      color: { white },
    },
  }) => white};
`;
