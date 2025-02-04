import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { Link, LinkProps } from 'react-router-dom';

type NavLinkProps = LinkProps & ButtonProps;

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => (
  <Button
    as={Link}
    variant="ghost" 
    colorScheme="whiteAlpha"
    type="button"
    {...props}
  >
    {children}
  </Button>
);

export default NavLink;