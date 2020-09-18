import React, { useState } from 'react';
import {
  Navbar,
  NavContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavLinkButton,
  NavHamburger,
  NavMenuIcon,
  NavCloseIcon,
} from './styled';

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen((prevState) => setOpen(!prevState));

  return (
    <Navbar>
      <NavContainer>
        <NavLogo to='/'>
          <NavIcon />
          ULTRA
        </NavLogo>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink onClick={handleOpen} to='/'>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleOpen} to='/services'>
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLinkButton onClick={handleOpen} to='/sign'>
              Sign up
            </NavLinkButton>
          </NavItem>
        </NavMenu>
        <NavHamburger onClick={handleOpen}>
          {isOpen ? <NavCloseIcon /> : <NavMenuIcon />}
        </NavHamburger>
      </NavContainer>
    </Navbar>
  );
}

export default Nav;
