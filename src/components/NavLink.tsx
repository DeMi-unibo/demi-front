import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { Link, LinkProps } from 'react-router-dom';

type NavLinkProps = LinkProps & ButtonProps;

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, ...props }, ref) => (
    <Button 
      as={Link}
      ref={ref as React.Ref<HTMLButtonElement>}
      variant="ghost" 
      colorScheme="whiteAlpha"
      color="white"  // Add this line to ensure white text
      _hover={{ bg: "teal.600" }}  // Optional: slight background change on hover
      {...props}
    >
      {children}
    </Button>
  )
);

export default NavLink;